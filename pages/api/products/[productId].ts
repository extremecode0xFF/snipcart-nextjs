import { NextApiRequest, NextApiResponse } from 'next'
import { IProduct } from '../../../components/Product'
import { getProducts } from '../../../firebase/request'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { productId } = req.query
  try {
    const payload: IProduct[] = await getProducts()
    const product: IProduct | undefined = payload.find(
      (p) => p.id === productId
    )
    res.status(200).json(product)
  } catch (error) {
    if (error instanceof Error) {
      res.status(404).json(error.message)
    } else {
      res.status(404).json(error)
    }
  }
}
