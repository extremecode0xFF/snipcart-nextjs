import Product, { IProduct } from './Product'

interface IProductListProps {
  products: IProduct[]
}

const ProductList = (props: IProductListProps) => {
  return (
    <>
      {props.products.map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </>
  )
}

export default ProductList
