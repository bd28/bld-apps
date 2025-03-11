import { NextResponse } from "next/server";
import { sendEmail } from "@/lib/email";

export async function GET() {
  try {
    // Send a test email using Resend
    const { data, error } = await sendEmail({
      from: "BLD Apps Test <noreply@bldapps.com>",
      to: "info@bldapps.com",
      subject: "Test Email from BLD Apps Website",
      text: "This is a test email to verify that the contact form is working correctly.",
      html: `
<h2>Test Email</h2>
<p>This is a test email to verify that the contact form is working correctly.</p>
<p>If you're seeing this, the email functionality is working properly!</p>
      `,
    });

    if (error) {
      console.error("Error sending test email:", error);
      return NextResponse.json(
        { success: false, message: "Failed to send test email", error },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Test email sent successfully!", data },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in test email:", error);
    return NextResponse.json(
      { success: false, message: "An unexpected error occurred", error },
      { status: 500 }
    );
  }
} 