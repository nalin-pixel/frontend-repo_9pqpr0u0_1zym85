import { Heart, ShoppingBag, User, Menu } from 'lucide-react'
import { motion } from 'framer-motion'
import Container from './Container'

export default function Header() {
  return (
    <div className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-pink-100/60">
      <Container>
        <div className="flex items-center justify-between py-4">
          <motion.a href="/" className="flex items-center gap-2" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-2xl font-semibold tracking-tight text-pink-700">NautiKids</span>
          </motion.a>

          <div className="hidden md:flex items-center gap-8">
            <nav className="text-sm text-pink-900/80">
              <ul className="flex items-center gap-6">
                <li className="group relative">
                  <a href="/shop" className="hover:text-pink-600">Girls</a>
                </li>
                <li className="group relative">
                  <a href="/shop" className="hover:text-pink-600">Boys</a>
                </li>
                <li className="group relative">
                  <a href="/shop" className="hover:text-pink-600">New In</a>
                </li>
                <li className="group relative">
                  <a href="/about" className="hover:text-pink-600">About</a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <a href="/wishlist" className="p-2 rounded-full hover:bg-pink-50 text-pink-700"><Heart size={20} /></a>
            <a href="/cart" className="p-2 rounded-full hover:bg-pink-50 text-pink-700"><ShoppingBag size={20} /></a>
            <a href="/auth/login" className="p-2 rounded-full hover:bg-pink-50 text-pink-700"><User size={20} /></a>
            <button className="md:hidden p-2 rounded-full hover:bg-pink-50 text-pink-700"><Menu size={20} /></button>
          </div>
        </div>
      </Container>
    </div>
  )
}
