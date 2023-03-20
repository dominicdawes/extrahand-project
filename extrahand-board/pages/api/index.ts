// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Request, Response } from 'express'
import { API_URL, DUMMY_URL, LOCAL_URL } from "../../lib/api"

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default async ({body}: Request, res: Response) => {
  const {term, fullTime, location, page} = JSON.parse( body );
  let query = "";
  if (term) {
    query += `&search=${term}`
  }
  if (fullTime) {
    query += `&full_time=true`
  }
  if (location) {
    query += `&location=${location.replace(" ", "+")}`
  }
  if (page) {
    query += `&page=${page}`
  }
  if (query.length) {
    query = query.substring(1);
  }

  try {
    console.log(`${LOCAL_URL}/?${query}`)
    const data = await fetch(`${LOCAL_URL}/?${query}`);   // query structure for search filter
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
