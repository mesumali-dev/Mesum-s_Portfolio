import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
    const { name, email, phone, message } = await request.json(); 

    const username = process.env.PERSONAL_EMAIL;
    const password = process.env.EMAIL_PASSWORD;
    const myEmail = process.env.PERSONAL_EMAIL;

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

        return NextResponse.json({ message: "Email sent successfully!" }, { status: 200 });
    } catch (error) {
        console.error("Error sending email:", error);
        return NextResponse.json({ message: "Message could not be sent!" }, { status: 500 });
    }
}
