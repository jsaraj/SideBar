import React from 'react'
import { data } from './Data'
import { GiAbstract119, GiShuriken } from "react-icons/gi";
import { useGlobalContext } from './context';



function SideBar() {

    const { isOpenSidebar, closeSidebar } = useGlobalContext();

    return (
        <>
            <div className={`${isOpenSidebar ? "hidden" : " "} " w-40 bg-gray-400 fixed h-full top-0 left-0 z-50"`}>
                <div className='flex justify-center cursor-pointer bg-orange-400 py-2' onClick={closeSidebar}>
                    <GiShuriken />
                </div>
                <div className='flex pb-4 justify-center py-5'>
                    <GiAbstract119 size={50} color='orange' />
                </div>
                <ul>
                    {
                        data.map((item, index) => {
                            return (
                                <div className='border-b-orange-400 hover:border-b-2 hover:border-b-orange-400 transition-all ease-in-out duration-300 pl-2 '>
                                    <li key={index} className='flex py-3'>
                                        <a href={item.url} className='pr-2'>{item.icon}</a>
                                        <a href={item.url} >{item.title}</a>
                                    </li>
                                </div>
                            )
                        })
                    }
                </ul>
            </div>
        </>
    )
}

export default SideBar