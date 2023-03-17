// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Request, Response } from 'express'
import { API_URL, DUMMY_URL, LOCAL_URL } from "../../lib/api"

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default async (_: Request, res: Response) => {
  try {
    const data = await fetch(LOCAL_URL)
    const json = await data.json()
    res.status(200).json(json)
  } catch(err) {
    res.status(500).json({ error: err })
  }
}



// type Data = {
//   name: string
// }

// export default function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Data>
// ) {
//   res.status(200).json({ name: 'John Doe' })
// }
