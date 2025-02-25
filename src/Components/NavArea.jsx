// import { motion } from "framer-motion";

// export default function NavArea() {
//   return (
//     <>
//       {/* Navbar */}
//       <nav className="bg-gray-800 text-white py-4 px-6 flex justify-between items-center">
//         <div className="text-2xl font-bold">MyWebsite</div>
//         <ul className="flex space-x-6">
//           <li><a href="#" className="hover:text-blue-400">Home</a></li>
//           <li><a href="#" className="hover:text-blue-400">About</a></li>
//           <li><a href="#" className="hover:text-blue-400">Contact</a></li>
//         </ul>
//       </nav>

//       {/* Hero Section */}
//       <section className="h-screen flex items-center justify-center bg-gray-900 px-6 md:px-16">
//         <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
//           {/* Left Side (Text) */}
//           <motion.div 
//             initial={{ opacity: 0, y: -50 }} 
//             animate={{ opacity: 1, y: 0 }} 
//             transition={{ duration: 0.8, ease: "easeOut" }}
//             className="text-white"
//           >
//             <h1 className="text-5xl font-bold">Build Amazing Websites</h1>
//             <p className="text-lg text-gray-300 mt-4">
//               Create modern, fast, and responsive websites using React, Tailwind, and Framer Motion.
//             </p>
//             <motion.button 
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1, delay: 0.5 }}
//               className="mt-6 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600"
//             >
//               Get Started
//             </motion.button>
//           </motion.div>

//           {/* Right Side (Image) */}
//           <motion.div 
//             initial={{ opacity: 0, x: 50 }} 
//             animate={{ opacity: 1, x: 0 }} 
//             transition={{ duration: 0.8, ease: "easeOut" }}
//           >
//             <img 
//               src="https://source.unsplash.com/500x500/?technology" 
//               alt="Hero Illustration" 
//               className="rounded-lg shadow-lg"
//             />
//           </motion.div>
//         </div>
//       </section>
//     </>
//   );
// }
