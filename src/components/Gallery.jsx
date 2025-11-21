import { motion } from 'framer-motion'

const images = [
  'https://images.unsplash.com/photo-1604335399105-a0c18ad24e8e?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1571513800374-df1bbe650e9a?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1600677397770-3f16cf92a171?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1614359686716-3b623d5897c5?q=80&w=1600&auto=format&fit=crop'
]

export default function Gallery() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
      {images.map((src, i) => (
        <motion.img
          key={src}
          src={src}
          alt={`gallery-${i}`}
          loading="lazy"
          className="h-36 w-full object-cover rounded-xl border border-pink-100"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        />
      ))}
    </div>
  )
}
