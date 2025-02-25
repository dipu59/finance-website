import { Button } from "@heroui/react"
import CraditCard from '/CraditCard.png'
import { motion } from "framer-motion"
function FindCard() {
return(
<section className="flex  flex-col-reverse md:flex-row-reverse justify-between w-full mt-10 md:mt-28">
    {/* Left Dection/ Text section */}
    <div className="flex flex-col gap-4 md:gap-8 w-full md:w-1/2">
    <motion.h1
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        
    className="text-xl sm:text-3xl md:text-4xl lg:text-4xl font-semibold md:w-[680px] max-w-[700px] mt-10 leading-tight">Find the Perfect Card for You</motion.h1>
    <motion.p
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
    className="md:w-[100%] text-xs leading-relaxed text-secondary md:text-sm lg:text-base md:leading-loose">Unlocking the Power of Crypto, Both Virtually and Physically
Manage your crypto effortlessly and spend it seamlessly with Wern. Our virtual card allows for instant and secure online transactions, while the physical Wern Card empowers you to convert and spend your crypto at millions of merchants worldwide. Experience the flexibility and convenience of both options, all within the secure and user-friendly Wern ecosystem.</motion.p>
    <motion.div initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.3, delay:0.8 }} >
    <Button color="primary" radius="full" className="md:px-8 md:text-[17px] md:py-6">
    Learn more
    </Button>
    </motion.div>
    </div>

    <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
    className="w-full md:w-[900px] flex justify-center items-center">
        <img className="md:mr-32" src={CraditCard}/>
    </motion.div>
</section>
)
}

export default FindCard;