import { motion } from 'framer-motion'

export default function BudgetCTA() {
  const cards = [
    {
      title: 'Pastel Bundles',
      sub: 'Curated sets for maximum value',
      href: '/shop?bundle=true',
      image: 'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?q=80&w=1600&auto=format&fit=crop'
    },
    {
      title: 'Under ₹799',
      sub: 'Daily wear, premium feel',
      href: '/shop?price_max=799',
      image: 'https://images.unsplash.com/photo-1543968996-ee822b8176ba?q=80&w=1600&auto=format&fit=crop'
    },
    {
      title: 'Under ₹999',
      sub: 'Party-ready picks',
      href: '/shop?price_max=999',
      image: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=1600&auto=format&fit=crop'
    }
  ]
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {cards.map((c) => (
        <motion.a key={c.title} href={c.href} whileHover={{ scale: 1.01 }} className="relative overflow-hidden rounded-2xl border border-pink-100 bg-white">
          <img src={c.image} alt={c.title} className="h-44 w-full object-cover" loading="lazy" />
          <div className="p-5">
            <div className="text-pink-900 font-semibold">{c.title}</div>
            <div className="text-sm text-pink-900/70">{c.sub}</div>
          </div>
        </motion.a>
      ))}
    </div>
  )
}
