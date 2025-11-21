import { motion } from 'framer-motion'

export default function SectionHeading({ title, subtitle }) {
  return (
    <div className="text-center mb-8">
      <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-2xl sm:text-3xl font-semibold tracking-tight text-pink-900">
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mt-2 text-pink-900/70">
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}
