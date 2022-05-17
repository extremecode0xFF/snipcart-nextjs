import Product, { IProduct } from './Product'
import styles from '../styles/ProductList.module.scss'

interface IProductListProps {
  products: IProduct[]
}

const ProductList = (props: IProductListProps) => {
  return (
    <div className={styles.product_list}>
      {props.products.map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </div>
  )
}

export default ProductList
