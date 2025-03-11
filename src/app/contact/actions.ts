"use server";

import { z } from "zod";
import { sendEmail } from "@/lib/email";

// Contact form schema
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export async function submitContactForm(formData: ContactFormData) {
  try {
    // Validate form data
    const validatedData = contactFormSchema.parse(formData);

    // Send email using Resend
    const { data, error } = await sendEmail({
      from: "BLD Apps Contact Form <noreply@bldapps.com>",
      to: "info@bldapps.com",
      subject: `Contact Form: ${validatedData.subject}`,
      text: `
Name: ${validatedData.name}
Email: ${validatedData.email}
Subject: ${validatedData.subject}

Message:
${validatedData.message}
      `,
      html: `
<h2>New Contact Form Submission</h2>
<p><strong>Name:</strong> ${validatedData.name}</p>
<p><strong>Email:</strong> ${validatedData.email}</p>
<p><strong>Subject:</strong> ${validatedData.subject}</p>
<h3>Message:</h3>
<p>${validatedData.message.replace(/\n/g, '<br>')}</p>
      `,
    });

    if (error) {
      console.error("Error sending email:", error);
      return { success: false, message: "Failed to send message. Please try again later." };
    }

    return { success: true, message: "Your message has been sent successfully!" };
  } catch (error) {
    console.error("Error in contact form submission:", error);
    
    if (error instanceof z.ZodError) {
      const errorMessages = error.errors.map((err) => err.message).join(", ");
      return { success: false, message: `Validation error: ${errorMessages}` };
    }
    
    return { success: false, message: "An unexpected error occurred. Please try again later." };
  }
} 