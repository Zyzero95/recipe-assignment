import { NextResponse } from "next/server";
import { NewsletterSchema } from "@/app/validations/newsletter";

export async function POST(req: Request) {
    try {
        const body = await req.json;
        const { email } = NewsletterSchema.parse(body);
        console.log(`Newsletter signup from ${email}`);

        return NextResponse.json({
            message: 'Thank you for signing up to our recipe newsletter'
        })
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
        return NextResponse.json(
            { error: 'Email address is invalid' },
            { status: 400 }
        )
    }
}