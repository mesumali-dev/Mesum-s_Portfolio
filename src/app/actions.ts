"use server";

import nodemailer from "nodemailer";

interface ContactFormData {
    name: string;
    email: string;
    phone: string;
    message: string;
}

export async function sendContactEmail(data: ContactFormData) {
    const { name, email, phone, message } = data;

    const username = process.env.PERSONAL_EMAIL;
    const password = process.env.EMAIL_PASSWORD;
    const myEmail = process.env.PERSONAL_EMAIL;

    if (!username || !password) {
        console.error("Missing PERSONAL_EMAIL or EMAIL_PASSWORD in environment variables.");
        return { success: false, message: "Server mailer configuration error." };
    }

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: username,
            pass: password,
        },
    });

    try {
        await transporter.sendMail({
            from: username,
            to: myEmail,
            subject: `New message from ${name}`,
            html: `
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Message:</strong><br/>${message}</p>
            `
        });

        return { success: true, message: "Email sent successfully!" };
    } catch (error) {
        console.error("Error sending email:", error);
        return { success: false, message: "Message could not be sent!" };
    }
}
