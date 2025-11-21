import { motion } from 'framer-motion'

const testimonials = [
  {
    name: 'Aarav’s mom',
    quote: 'The fabrics are unbelievably soft and the colors are dreamy. My son loves his new co-ords!',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop'
  },
  {
    name: 'Mia’s dad',
    quote: 'Sizing was perfect and the packaging felt premium. Beautiful pastels that actually last.',
    avatar: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=400&auto=format&fit=crop'
  },
  {
    name: 'Zoya’s aunt',
    quote: 'We bought two party dresses — elegant silhouettes and comfy enough for long hours.',
    avatar: 'https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=400&auto=format&fit=crop'
  }
]

export default function Testimonials() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {testimonials.map((t, i) => (
        <motion.div
          key={t.name}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.05 }}
          className="rounded-2xl bg-white border border-pink-100 p-5 shadow-sm"
        >
          <div className="flex items-center gap-3">
            <img src={t.avatar} alt={t.name} className="h-10 w-10 rounded-full object-cover" loading="lazy" />
            <div className="text-sm font-medium text-pink-900">{t.name}</div>
          </div>
          <p className="mt-3 text-sm text-pink-900/80">“{t.quote}”</p>
        </motion.div>
      ))}
    </div>
  )
}
