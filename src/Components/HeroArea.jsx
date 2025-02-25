import { Button } from "@heroui/react"
import Cardano from '/hero-card.png'
import { motion } from "framer-motion"
function HeroArea() {
return(
<section className="flex flex-col-reverse md:flex-row justify-between w-full mt-10 md:mt-28">
    {/* Left Dection/ Text section */}
    <div className="flex flex-col gap-4 md:gap-8 w-full md:w-1/2">
    <motion.h1
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        
    className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold md:w-[480px] max-w-[480px] mt-10 leading-tight">Spend your Cardano anywhere, anytime.</motion.h1>
    <motion.p
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
    className="md:w-3/4 text-xs leading-relaxed text-secondary md:text-sm lg:text-base md:leading-loose">Our user-friendly platform enables businesses and individuals to seamlessly convert and spend their crypto for everyday purchases.</motion.p>
    <motion.div initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.3 }}>
    <Button color="primary" radius="full" className="md:px-8 md:text-[17px] md:py-6">
        Get Started
    </Button>
    </motion.div>
    </div>

    <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
    className="w-full md:w-[900px] flex justify-center items-center">
        <img className="lg:ml-[300px]" src={Cardano}/>
    </motion.div>
</section>
)
}

export default HeroArea