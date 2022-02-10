import type { NextApiRequest, NextApiResponse } from "next"


export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const nodemailer = require("nodemailer")

    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
            user: "ubok.website.notifier@gmail.com",
            pass: "v6$@Lilkah"
        },
        secure: true
    })

    const mailData = {
        from: 'ubok.website.notifier@gmail.com',
        to: 'cameron.macalister@voxsio.com',
        subject: `Website demo request`,
        text: `Hi there,\n\n${req.body.email} has requested access to the app via the form on the website.\n\nCheers,\nThe Website\n`
    }

    transporter.sendMail(mailData, (err: any, info: any) => {
        if(err) console.log(err)
        else console.log(info)
    })

    res.status(200).end()
}