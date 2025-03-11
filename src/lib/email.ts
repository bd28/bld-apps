import { Resend } from 'resend';

// Initialize Resend with API key from environment variable
const resend = new Resend(process.env.RESEND_API_KEY);

// Email sending interface
export interface EmailData {
  from: string;
  to: string;
  subject: string;
  text: string;
  html?: string;
}

/**
 * Send an email using Resend
 * @param data Email data including from, to, subject, and content
 * @returns Promise with the result of the email sending operation
 */
export async function sendEmail(data: EmailData) {
  try {
    // Log email attempt (for debugging)
    console.log('Attempting to send email:', {
      from: data.from,
      to: data.to,
      subject: data.subject,
    });

    // Send email using Resend
    const result = await resend.emails.send({
      from: data.from,
      to: data.to,
      subject: data.subject,
      text: data.text,
      html: data.html,
    });

    // Log success
    console.log('Email sent successfully:', result);
    
    return { data: result, error: null };
  } catch (error) {
    // Log error
    console.error('Error sending email:', error);
    
    return { 
      data: null, 
      error: error instanceof Error ? error : new Error('Unknown error sending email') 
    };
  }
}

/**
 * Mock email function for testing in environments where Resend is not available
 * @param data Email data
 * @returns Mock response
 */
export async function mockSendEmail(data: EmailData) {
  console.log('MOCK EMAIL SENDING (not actually sent):', data);
  
  // Log to server console for verification
  console.log(`
----- MOCK EMAIL -----
From: ${data.from}
To: ${data.to}
Subject: ${data.subject}
Message: ${data.text}
---------------------
  `);
  
  // Simulate successful email sending
  return { 
    data: { id: "mock-email-id-" + Date.now() }, 
    error: null 
  };
} 