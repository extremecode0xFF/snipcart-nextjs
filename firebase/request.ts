import { child, DataSnapshot, get, ref } from 'firebase/database'
import { IProduct } from '../components/Product'
import { firebaseDatabase } from './config'

export async function getProducts(): Promise<IProduct[]> {
  try {
    const response: DataSnapshot = await get(
      child(ref(firebaseDatabase), `products`)
    )
    if (response.exists()) {
      const payload: IProduct[] = response.val()
      return payload
    }
    return []
  } catch {
    throw new Error('failed to load data')
  }
}
/*TODO
export async function getProductById(id:string) {
  try {
    const response: DataSnapshot = await get(query(ref(firebaseDatabase,'products'), orderByKey(), equalTo(id)));
    console.log('RES: ',response.val(), 'ID: ', id)
    
    if (response.exists()) {
      const payload: IProduct = response.val()[0]
      return payload
    }
    return {}
  } catch {
    throw new Error('failed to load data')
  }
}
*/