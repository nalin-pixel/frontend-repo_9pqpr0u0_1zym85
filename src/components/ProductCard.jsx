import { Heart } from 'lucide-react'
import { motion } from 'framer-motion'

export default function ProductCard({ product, onAddToCart, onWishlist }) {
  return (
    <motion.div whileHover={{ y: -4 }} className="group rounded-2xl bg-white border border-pink-100/70 shadow-sm hover:shadow-md overflow-hidden">
      <div className="relative aspect-[4/5] bg-pink-50">
        <img src={product.image_urls?.[0] || 'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?q=80&w=1200&auto=format&fit=crop'} alt={product.title} className="h-full w-full object-cover" loading="lazy" />
        <button onClick={() => onWishlist?.(product)} className="absolute top-3 right-3 p-2 rounded-full bg-white/90 text-pink-700 shadow">
          <Heart size={18} />
        </button>
      </div>
      <div className="p-4">
        <h3 className="text-sm font-medium text-pink-900 line-clamp-1">{product.title}</h3>
        <p className="mt-1 text-xs text-pink-900/60 line-clamp-2">{product.description}</p>
        <div className="flex items-center gap-2 mt-3">
          <span className="text-pink-700 font-semibold">₹{product.price}</span>
          {product.mrp && (
            <span className="text-xs line-through text-pink-900/50">₹{product.mrp}</span>
          )}
        </div>
        <button onClick={() => onAddToCart?.(product)} className="mt-3 w-full rounded-md bg-pink-600 text-white text-sm py-2 hover:bg-pink-700">Add to cart</button>
      </div>
    </motion.div>
  )
}
