import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// In-memory store for rate limiting
// In production, you would use Redis or another persistent store
const ipRequestCounts = new Map<string, { count: number; timestamp: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute in milliseconds
const MAX_REQUESTS_PER_WINDOW = 5; // 5 requests per minute

export function middleware(request: NextRequest) {
  // Only apply rate limiting to contact form endpoints
  if (
    request.nextUrl.pathname === '/api/contact' ||
    request.nextUrl.pathname.startsWith('/api/contact/') ||
    request.method === 'POST'
  ) {
    // Get the IP address from the request headers
    const forwardedFor = request.headers.get('x-forwarded-for');
    const ip = forwardedFor ? forwardedFor.split(',')[0].trim() : 'unknown';
    const now = Date.now();
    const requestData = ipRequestCounts.get(ip);

    // If this IP hasn't been seen before or the window has expired, reset the counter
    if (!requestData || now - requestData.timestamp > RATE_LIMIT_WINDOW) {
      ipRequestCounts.set(ip, { count: 1, timestamp: now });
      return NextResponse.next();
    }

    // If the IP has made too many requests within the window, block the request
    if (requestData.count >= MAX_REQUESTS_PER_WINDOW) {
      return new NextResponse(
        JSON.stringify({
          success: false,
          message: 'Rate limit exceeded. Please try again later.',
        }),
        {
          status: 429,
          headers: {
            'Content-Type': 'application/json',
            'Retry-After': `${Math.ceil((requestData.timestamp + RATE_LIMIT_WINDOW - now) / 1000)}`,
          },
        }
      );
    }

    // Otherwise, increment the counter and allow the request
    requestData.count++;
    ipRequestCounts.set(ip, requestData);
  }

  return NextResponse.next();
}

// Only run the middleware on API routes
export const config = {
  matcher: ['/api/:path*'],
}; 