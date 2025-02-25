import { motion } from "framer-motion";
const WinsVision = () => {
  return (
    <section className="bg-[#3D3D543D] py-8 md:py-16 rounded-3xl px-4 md:px-40">
        <motion.h1
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='text-center text-xl mb-4 md:text-3xl'>Wern’s Vision</motion.h1>
        <motion.p initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }} className='text-center text-base md:text-4xl text-primary'>Building a financial future where everyone has 
        access to secure and effortless digital money.</motion.p>
    </section>
  )
}

export default WinsVision;