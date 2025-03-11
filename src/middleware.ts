import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// In-memory store for rate limiting
// In a production environment, you would use Redis or another distributed store
const ipRequestCounts = new Map<string, { count: number; resetTime: number }>();

// Rate limit configuration
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute in milliseconds
const MAX_REQUESTS_PER_WINDOW = 5; // 5 requests per minute

export function middleware(request: NextRequest) {
  // Only apply rate limiting to API routes
  if (!request.nextUrl.pathname.startsWith('/api')) {
    return NextResponse.next();
  }

  // Get the IP address from the request
  // Use X-Forwarded-For header or fallback to a default value
  const forwardedFor = request.headers.get('x-forwarded-for');
  const ip = forwardedFor ? forwardedFor.split(',')[0].trim() : 'unknown';
  
  // Get the current time
  const now = Date.now();
  
  // Get the request count for this IP
  const ipData = ipRequestCounts.get(ip);
  
  // If this is the first request or the window has expired, reset the count
  if (!ipData || now > ipData.resetTime) {
    ipRequestCounts.set(ip, {
      count: 1,
      resetTime: now + RATE_LIMIT_WINDOW,
    });
    return NextResponse.next();
  }
  
  // If the IP has exceeded the rate limit, return a 429 Too Many Requests response
  if (ipData.count >= MAX_REQUESTS_PER_WINDOW) {
    return new NextResponse(
      JSON.stringify({
        success: false,
        message: 'Too many requests, please try again later.',
      }),
      {
        status: 429,
        headers: {
          'Content-Type': 'application/json',
          'Retry-After': `${Math.ceil((ipData.resetTime - now) / 1000)}`,
        },
      }
    );
  }
  
  // Increment the request count
  ipData.count += 1;
  ipRequestCounts.set(ip, ipData);
  
  // Allow the request to proceed
  return NextResponse.next();
}

// Only apply this middleware to API routes
export const config = {
  matcher: '/api/:path*',
}; 