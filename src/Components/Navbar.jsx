import { Button, Link } from '@heroui/react';
import logo from '/logo.png'
const Navbars = () => {
return (
        <>
        <nav className='flex justify-between px-4 md:px-20 '>
            <div>
                <img src={logo}/>
            </div>
            <div className='flex items-center'>
                <Button as={Link} variant="bordered" 
            radius="full" color="primary" className=' md:px-8 md:py-5 font-semibold px-5 '>Contact</Button>
            </div>
        </nav>
        </>
)
}

export default Navbars;