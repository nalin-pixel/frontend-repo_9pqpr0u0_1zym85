import { motion } from 'framer-motion'

const tiles = [
  {
    title: 'Girls • Dresses',
    sub: 'Pastel twirls for playdates and parties',
    href: '/shop?category=dress&gender=girls',
    image: 'https://images.unsplash.com/photo-1510784722466-f2aa9c52fff6?q=80&w=1600&auto=format&fit=crop'
  },
  {
    title: 'Boys • Co-ords',
    sub: 'Soft linens, comfy cottons, classic cuts',
    href: '/shop?category=co-ord&gender=boys',
    image: 'https://images.unsplash.com/photo-1639278028489-f9e2c09c611c?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxCb3lzJTIwJUUyJTgwJUEyJTIwQ28tb3Jkc3xlbnwwfDB8fHwxNzYzNzIyODk0fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80'
  },
  {
    title: 'Newborn • Essentials',
    sub: 'Featherlight layers, gentle on skin',
    href: '/shop?category=newborn',
    image: 'https://images.unsplash.com/photo-1707433028891-41746503a4b0?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxOZXdib3JuJTIwJUUyJTgwJUEyJTIwRXNzZW50aWFsc3xlbnwwfDB8fHwxNzYzNzIyODk1fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80'
  }
]

export default function CollectionTiles() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {tiles.map((t) => (
        <motion.a
          key={t.title}
          href={t.href}
          whileHover={{ y: -4 }}
          className="relative overflow-hidden rounded-2xl border border-pink-100 group"
        >
          <img src={t.image} alt={t.title} className="h-64 w-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-pink-900/40 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-5">
            <h3 className="text-white/95 font-semibold drop-shadow">{t.title}</h3>
            <p className="text-white/90 text-sm">{t.sub}</p>
            <span className="mt-3 inline-block text-xs text-pink-100/90">Shop now →</span>
          </div>
        </motion.a>
      ))}
    </div>
  )
}
