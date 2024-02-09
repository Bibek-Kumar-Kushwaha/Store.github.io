import React, { useState, useEffect } from 'react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll'; // Import ScrollLink and scroll from react-scroll
import { FaRegUser, FaSearch, FaCartPlus } from 'react-icons/fa';
import { IoMenu, IoClose } from 'react-icons/io5';

const Navbar = () => {
    const [toggle, settoggle] = useState(false);
    const [search, setSearch] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    // Toggle Handler
    const handletoggle = () => {
        settoggle(!toggle);
    };
    // Search Handler
    const searchHandle = () => {
        setSearch(!search);
    };
    //Fixed Search Box
    const handleInputChange = (e) => {
        setSearchValue(e.target.value);
    };

    const data = [
        {
            navName: 'Home',
            link: 'Home',
        },
        {
            navName: 'Promation',
            link: 'Promation',
        },
        {
            navName: 'Customer',
            link: 'Customer',
        },
        {
            navName: 'Product',
            link: 'Product',
        },
        {
            navName: 'Contact',
            link: 'Contact',
        },


    ];


    return (
        <>
            <div className="navbar fixed top-0 left-0 w-full bg-white shadow-md z-50 py-2 px-6 flex justify-between items-center">
                <div className="w-[95%] m-auto flex justify-evenly ">
                    {/* **************Logo********** */}
                    <div className="my-auto hover:animate-spin cursor-none">
                        <img src='store.jpeg' alt="LOGO" className='w-14 h-14 rounded-xl' />
                    </div>
                    {/* *************Menu*********** */}
                    <div className={` ${toggle ? 'block' : 'hidden'} fixed md:static md:block my-auto  h-1/2 md:w-[60%] w-full top-14 left-0  md:bg-white z-10 `}>
                        <ul className="md:flex justify-evenly font-bold text-xl text-center w-[80%] mx-auto my-4 md:bg-white bg-gray-200 p-2">
                            {data.map((item, index) => (
                                <li key={index} className="my-5 md:my-0 mx-2 hover:scale-95 hover:text-gray-700 cursor-pointer">
                                    <ScrollLink
                                        to={item.link}
                                        smooth={true} // Enable smooth scrolling
                                        duration={500} // Duration of the scroll animation
                                        onClick={handletoggle}
                                    >
                                        {item.navName}
                                    </ScrollLink>
                                </li>
                            ))}
                        </ul>
                    </div>

                    { /* *********** Search Box ************* */}
                    <div className={`w-[90%] md:w-[60%] h-12 fixed  top-14 md:top-[85px] ${search ? 'block' : 'hidden'} md:text-xl text-[12px] text-center border-2 border-orange-600 rounded-3xl flex items-center justify-center z-10`}>
                        <input
                            type="text"
                            placeholder='Search Your Item'
                            onChange={handleInputChange}
                            value={searchValue}
                            className='h-full bg-gray-100  w-[80%] rounded-tl-3xl rounded-bl-3xl text-center px-4 focus:outline-none '
                        />

                        <FaSearch onClick={searchHandle} className='hover:text-white text-2xl  h-full bg-blue-400 w-[20%] rounded-tr-3xl rounded-br-3xl' />

                    </div>
                    {/* *************Icon**************** */}
                    <div className="flex space-x-6 my-auto text-2xl">
                        <span className="cursor-pointer hover:scale-110">
                            <FaSearch onClick={searchHandle} />
                        </span>
                        <span className="cursor-pointer hover:scale-110"><FaRegUser /></span>
                        <span className="cursor-pointer hover:scale-110"><FaCartPlus /></span>
                    </div>

                    {/* **********for mobile Toggle Control************** */}
                    <div className="my-auto text-4xl md:hidden">
                        {
                            toggle ?
                                <span className="" onClick={handletoggle}>
                                    <IoClose />
                                </span>
                                :
                                <span className="" onClick={handletoggle}>
                                    <IoMenu />
                                </span>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;
