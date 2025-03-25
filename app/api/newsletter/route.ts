import { NextResponse } from "next/server";
import { NewsletterSchema } from "@/app/validations/newsletter";

export async function POST(req: Request) {

    const thankYouMessage = 'Thank you for signing up to our recipe newsletter';
    const errorMessage = 'Please enter a valid email address';
    try {
        const body = await req.json();
        console.log({
            type: 'newsletter_signup_request',
            body,
            timestamp: new Date().toISOString()
        });

        const { email } = NewsletterSchema.parse(body);
        console.log({
            type: 'newsletter_signup_success',
            email,
            timestamp: new Date().toISOString()
        });

        return NextResponse.json({
            message: thankYouMessage
        });
    } catch (error) {
        console.error({
            type: 'newsletter_signup_error',
            error: error instanceof Error ? error.message : 'Unknown error',
            timestamp: new Date().toISOString()
        });
        return NextResponse.json(
            { error: errorMessage },
            { status: 400 }
        );
    }
}