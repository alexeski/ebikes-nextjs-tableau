import { Layout } from '@/components/Layout'
import Products from '@/components/ProductList'

export default function ProductExplorerPage() {
  return (
    <Layout>
      <div>
        {/* <h1>Product Explorer</h1> */}
        <Products />
      </div>
    </Layout>
  )
}
