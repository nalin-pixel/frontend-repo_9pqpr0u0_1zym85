import Container from './Container'

export default function Footer() {
  return (
    <footer className="bg-pink-50 border-t border-pink-100 text-pink-900/80">
      <Container>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 py-12">
          <div>
            <h4 className="font-semibold text-pink-900 mb-3">About</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/about" className="hover:text-pink-700">Our Story</a></li>
              <li><a href="/contact" className="hover:text-pink-700">Contact</a></li>
              <li><a href="/" className="hover:text-pink-700">Careers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-pink-900 mb-3">Help</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-pink-700">Shipping</a></li>
              <li><a href="#" className="hover:text-pink-700">Returns</a></li>
              <li><a href="#" className="hover:text-pink-700">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-pink-900 mb-3">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/shop" className="hover:text-pink-700">Girls</a></li>
              <li><a href="/shop" className="hover:text-pink-700">Boys</a></li>
              <li><a href="/shop" className="hover:text-pink-700">New In</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-pink-900 mb-3">Newsletter</h4>
            <p className="text-sm mb-3">Get updates on new arrivals and exclusive offers.</p>
            <form className="flex gap-2">
              <input type="email" placeholder="Your email" className="w-full rounded-md border border-pink-200 bg-white/70 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-pink-300"/>
              <button className="rounded-md bg-pink-600 text-white px-3 py-2 text-sm hover:bg-pink-700">Join</button>
            </form>
          </div>
        </div>
        <div className="border-t border-pink-100 py-4 text-xs text-pink-900/60 flex items-center justify-between">
          <p>© {new Date().getFullYear()} NautiKids. All rights reserved.</p>
          <p>Made with love.</p>
        </div>
      </Container>
    </footer>
  )
}
