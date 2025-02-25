import { motion } from "framer-motion";

export default function ScrollAnimationSections() {
  return (
    <div className="bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold"
        >
          Welcome to My Website
        </motion.h1>
      </section>

      {/* Second Section - Scroll করলে Animation হবে */}
      <section className="h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-semibold"
        >
          Scroll করে এখানে এলে Animation হবে! 🚀
        </motion.div>
      </section>

      {/* Third Section - Scroll করলে Animation হবে */}
      <section className="h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-semibold"
        >
          আরেকটা Section, যেটা Scroll করলে Animate হবে! 🎉
        </motion.div>
      </section>
    </div>
  );
}
