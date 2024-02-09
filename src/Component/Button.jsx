import React from 'react'
import { Link } from 'react-scroll'
export default function Button(props) {
    return (
        <>

            <div className='w-full flex font-bold cursor-pointer'>
                <Link to='/Home' className=" text-red hover:before:bg-redborder-[rgb(255,81,0)]  relative overflow-hidden border border-[rgb(255,81,0)] text-[rgb(255,81,0)]  transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-[rgb(255,81,0)] before:transition-all before:duration-200 hover:text-white hover:shadow-[rgb(255,81,0)] hover:before:left-0 hover:before:w-full">
                    <p className="relative py-3 md:px-16 xl:px-3  px-6 z-10 text-sm md:text-lg">
                        {props.title}
                    </p>
                </Link>
            </div>
        </>
    )
}
