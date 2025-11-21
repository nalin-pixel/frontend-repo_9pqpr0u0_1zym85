import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Header from './components/Header'
import Footer from './components/Footer'
import Container from './components/Container'
import SectionHeading from './components/SectionHeading'
import ProductGrid from './components/ProductGrid'
import CollectionTiles from './components/CollectionTiles'
import Testimonials from './components/Testimonials'
import BudgetCTA from './components/BudgetCTA'
import Gallery from './components/Gallery'
import { api, getUserId } from './lib/api'

function Hero() {
  const banners = [
    {
      title: 'Pastel Dreams, Playful Hearts',
      sub: 'Premium styles for your little trendsetters',
      image: 'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?q=80&w=1600&auto=format&fit=crop'
    },
    {
      title: 'New Season • New Smiles',
      sub: 'Soft hues, softer fabrics',
      image: 'https://images.unsplash.com/photo-1516962126636-27ad087061cc?q=80&w=1600&auto=format&fit=crop'
    },
    {
      title: 'Made for Twirls',
      sub: 'Elegant silhouettes for girls & boys',
      image: 'https://images.unsplash.com/photo-1680055195868-2b12621ac283?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxNYWRlJTIwZm9yJTIwVHdpcmxzfGVufDB8MHx8fDE3NjM3MjE5MzV8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80'
    }
  ]
  const [idx, setIdx] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % banners.length), 3500)
    return () => clearInterval(t)
  }, [])
  const b = banners[idx]
  return (
    <div className="relative overflow-hidden rounded-3xl border border-pink-100">
      <motion.img key={b.image} src={b.image} alt="hero" className="h-[52vh] w-full object-cover" initial={{ opacity: 0, scale: 1.02 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} />
      <div className="absolute inset-0 bg-gradient-to-t from-pink-900/30 to-transparent" />
      <div className="absolute inset-0 flex items-end p-8 sm:p-12">
        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="max-w-xl text-white">
          <h1 className="text-3xl sm:text-5xl font-semibold drop-shadow">{b.title}</h1>
          <p className="mt-2 sm:mt-3 text-sm sm:text-base opacity-90">{b.sub}</p>
          <div className="mt-5 flex gap-3">
            <a href="/shop" className="rounded-md bg-white/90 text-pink-900 px-4 py-2 text-sm font-medium hover:bg-white">Shop now</a>
            <a href="/about" className="rounded-md bg-pink-100/80 text-pink-900 px-4 py-2 text-sm font-medium hover:bg-pink-100">Our story</a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default function App() {
  const [products, setProducts] = useState([])
  const userId = getUserId()

  useEffect(() => {
    api.listProducts({}).then((d) => setProducts(d.items || [])).catch(() => setProducts([]))
  }, [])

  const addToCart = (p) => api.cart.add({ user_id: userId, product_id: p.id, quantity: 1 })
  const wish = (p) => api.wishlist.add({ user_id: userId, product_id: p.id })

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-amber-50 text-pink-900">
      <Header />
      <main>
        <Container className="py-8 sm:py-12">
          <Hero />
        </Container>

        <Container className="py-8">
          <SectionHeading title="Curated collections" subtitle="Handpicked themes with real photos" />
          <CollectionTiles />
        </Container>

        <Container className="py-8">
          <SectionHeading title="Best sellers" subtitle="Our most loved pieces" />
          <ProductGrid products={products.slice(0,8)} onAddToCart={addToCart} onWishlist={wish} />
        </Container>

        <Container className="py-8">
          <SectionHeading title="On a budget?" subtitle="Premium looks without the price pinch" />
          <BudgetCTA />
        </Container>

        <Container className="py-8">
          <SectionHeading title="From our community" subtitle="Happy parents, happier kids" />
          <Testimonials />
        </Container>

        <Container className="py-8">
          <SectionHeading title="Lookbook" subtitle="Pastel snapshots from recent shoots" />
          <Gallery />
        </Container>
      </main>
      <Footer />
    </div>
  )
}
