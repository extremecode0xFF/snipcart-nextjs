import { NextApiRequest, NextApiResponse } from 'next'
import { getProducts } from '../../../firebase/request'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const response = await getProducts()
    res.status(200).json(response)
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json(error.message)
    } else {
      res.status(500).json(error)
    }
  }
}
