// import { EmailTemplate } from '../../../components/EmailTemplate';
import { ContactTemplate } from "@/components/Emails/ContactTemplate";
import { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const sendMail = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const data = await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: ['dev.chrisvaz@gmail.com'],
            subject: 'Hiring',
            text: "",
            react: ContactTemplate({ firstName: 'John' }),
        });

        res.status(200).json(data);
    } catch (error) {
        res.status(400).json(error);
    }
}

export default sendMail;