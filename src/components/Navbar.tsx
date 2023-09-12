import Container from "./Container"
import menu from '../assets/meny.svg'
import { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement | null>(null)
    const toggleImgRef = useRef<HTMLImageElement | null>(null)

    const toggleNavbar = () => {
        setIsOpen((prev) => !prev);
    };

    useEffect(() => {
        const handleOutside = (e: MouseEvent) => {
            if (
                isOpen &&
                menuRef.current &&
                !menuRef.current.contains(e.target as Node) &&
                e.target !== toggleImgRef.current
            ) {
                setIsOpen(false);
            }
        }

        if (isOpen) {
            document.addEventListener('click', handleOutside)
        }

        return () => {
            document.removeEventListener('click', handleOutside)
        }
    }, [isOpen])

    return (
        <Container>
            <nav className="flex gap-11 justify-between z-10 p-9">
                <h1 className="text-white text-4xl max-sm:text-2xl font-normal font-habib">Play With Dirt.</h1>
                <ul className="w-3/5 flex justify-between items-center max-lg:hidden">
                    <li className="text-white text-center cursor-pointer text-2xl font-normal">Home</li>
                    <li className="text-white text-center cursor-pointer text-2xl font-normal">About</li>
                    <li className="text-white text-center cursor-pointer text-2xl font-normal">Pottery</li>
                    <li className="text-white text-center cursor-pointer text-2xl font-normal">Contact</li>
                </ul>
                <img
                    ref={toggleImgRef}
                    onClick={toggleNavbar}
                    src={menu}
                    alt="menu icon"
                    className="lg:hidden block"
                    width={25}
                />

                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            ref={menuRef}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="md:hidden absolute top-0 left-0 right-0 p-4 bg-gray-100 font-habib"
                        >
                            <ul className="space-y-4">
                                <li>
                                    <a href="#" className="text-xl text-gray-700 font-extrabold hover:text-gray-400" style={{ color: "#918c8c" }}>Home</a>
                                </li>
                                <li>
                                    <a href="#" className="text-xl text-gray-700 font-extrabold hover:text-gray-400" style={{ color: "#918c8c" }}>About</a>
                                </li>
                                <li>
                                    <a href="#" className="text-xl text-gray-700 font-extrabold hover:text-gray-400" style={{ color: "#918c8c" }}>Services</a>
                                </li>
                                <li>
                                    <a href="#" className="text-xl text-gray-700 font-extrabold hover:text-gray-400" style={{ color: "#918c8c" }}>Contact</a>
                                </li>
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </Container >
    )
}

export default Navbar