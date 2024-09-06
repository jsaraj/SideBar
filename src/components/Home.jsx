import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { useGlobalContext } from './context';

function Home() {


    const { openSidebar } = useGlobalContext();

    return (
        <>
            <aside className=''>
                <div className='p-5 cursor-pointer'>
                    <GiHamburgerMenu className="w-8 h-8 bg-orange-400 p-1 rounded-md z-10" onClick={openSidebar} />
                </div>
            </aside>
        </>

    )
}

export default Home