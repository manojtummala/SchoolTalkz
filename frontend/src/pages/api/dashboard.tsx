// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req: any, res: any) {
    res.status(200).json({ name: 'Dashboard John Doe' })

    if (req.method === 'GET') {
        // res.status(200).json()
    }
}
