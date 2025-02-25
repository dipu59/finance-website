import { motion } from "framer-motion"
import man from '/Man.png'
import man2 from '/Man2.png'
import man3 from '/Man3.png'
import quation from '/Quation.png'
const Review = () => {
    const Info = [
        {
            id:1,
            img: man,
            name:'Hadid Khan',
            profection:' UIUX Designer',
            disc:'"Great session! Dani was super helpful. She shared some practical advice on how can lorem ip we go about refining ."'
        },
        {
            id:2,
            img: man2,
            name:'Wade Warren',
            profection:' Web Designer',
            disc:'"Its is both attractive and highly adaptable. Its exactly what Ive been looking forefinitely wo lorem ipsum dolorth the investment."'
        },
        {
            id:3,
            img: man3,
            name:'Jenny Wilson',
            profection:' Trust Administrator',
            disc:'"I am really satisfied with it. Im good to go. It really saves me time and effort. Its is exactly what our business has been lacking. "'
        },
    ]
    return (
        <section className="grid gap-4 grid-cols-1 md:grid-cols-3">
            {Info.map((item,index)=>(
                <motion.div initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                whileTap={{scale:0.8,}}  key={index}>
                <div className="bg-[#27322F3D] space-y-4 md:space-y-8 py-8 px-6 rounded-2xl hover:shadow-lg hover:shadow-indigo-700  transition duration-300 hover:cursor-pointer" >
                    <motion.div initial={{ opacity: 0, x: -200 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }} className="bg-[#3d3f54] flex items-center justify-center max-h-12 max-w-12 rounded-full w-4/5 p-3"><img className="h-6 w-6 object-cover" src={quation}/></motion.div>
                    <motion.p initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }} className="text-sm md:text-base">{item.disc}</motion.p>

                    <motion.div initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 , ease:'anticipate'}}
                ea
                className="flex md:gap-5 gap-2">
                        <img className="h-10 w-10" src={item.img}/>
                        <div className="space-y-1">
                            <h3 className="text-base font-medium">{item.name}</h3>
                            <p className="text-xs md:text-sm text-[#ADB2B1]">{item.profection}</p>
                        </div>
                    </motion.div>
                </div>
                </motion.div>
            ))

            }
        </section>
    )
}

export default Review