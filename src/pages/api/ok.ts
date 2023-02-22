import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  ok: boolean
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ ok: true })
}
