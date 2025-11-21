import ProductCard from './ProductCard'

export default function ProductGrid({ products = [], onAddToCart, onWishlist }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
      {products.map((p) => (
        <ProductCard key={p.id || p._id} product={p} onAddToCart={onAddToCart} onWishlist={onWishlist} />)
      )}
    </div>
  )
}
