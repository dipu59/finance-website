import { motion } from "framer-motion";
const WhatDoWeOffer = () => {
    const data =[
        {
            id:1,
            img:'/dollar.svg',
            heading:'Cardano Debit-Cards',
            disc:'Cardano, simplified. The debit card that makes crypto spending easy.'
        },
        {
            id:2,
            img:'/dollar.svg',
            heading:'On & Off Ramp',
            disc:'Fiat meets crypto, effortlessly buy, sell, and manage.'
        },
        {
            id:3,
            img:'/dollar.svg',
            heading:'Solutions for business',
            disc:'Empowering businesses with effortless crypto payments and seamless fiat solutions.'
        },
    ]
return (
    <section className=" space-y-4 pt-4 md:pt-0 md:space-y-12">
        <h1 className="text-center text-xl md:text-2xl lg:text-4xl font-semibold">What do we offer?</h1>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {data.map((item, index)=>(
                <div  className="flex gap-4" key={index}>
                <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className='bg-[#3d3f54] flex items-center justify-center max-h-12 max-w-12 rounded-xl w-4/5'>
							<img
								alt='icon'
								className='h-6 w-6'
								src={item.img}
							/>
						</motion.div>

						<div>
							<motion.h4  initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }} className='font-bold text-lg md:text-xl mb-1'>{item.heading}</motion.h4>

							<motion.p  initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 , delay:1 }} className='text-secondary text-sm max-w-[240px]'>
								{item.disc}
							</motion.p>
						</div>
					</div>
            ))
            }
       </div>
    </section>
  )
}

export default WhatDoWeOffer;