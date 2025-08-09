import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Heading = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-white shadow-m">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    {/* <img src={brandLogo} alt="Brand Logo" className="h-10 cursor-pointer w-auto" /> */}

                    {/* Desktop Menu */}
                    <nav className="hidden md:flex gap-6 items-center text-gray-700 font-medium">
                        <a href="#menu" className="hover:text-red-600">MENU</a>
                        <a href="#location" className="hover:text-red-600">LOCATION</a>
                        <a href="#about" className="hover:text-red-600">ABOUT</a>
                        <a href="#contact" className="hover:text-red-600">CONTACT</a>
                    </nav>
                    <button className="bg-red-600 hidden sm:block cursor-pointer text-white px-4 py-2 rounded-md hover:bg-red-700 transition">
                        Login
                    </button>

                    <div className="sm:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-800 focus:outline-none"
                        >
                            {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Dropdown */}
                {isOpen && (

                    <div className="md:hidden flex flex-col gap-4 pb-4 text-gray-700 font-medium">
                        <a href="#menu" className="hover:text-red-600" onClick={() => setIsOpen(false)}>MENU</a>
                        <a href="#location" className="hover:text-red-600" onClick={() => setIsOpen(false)}>LOCATION</a>
                        <a href="#about" className="hover:text-red-600" onClick={() => setIsOpen(false)}>ABOUT</a>
                        <a href="#contact" className="hover:text-red-600" onClick={() => setIsOpen(false)}>CONTACT</a>
                        <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition">
                            Login
                        </button>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Heading;
