import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"



function Card({data,reference}) {
    return (
        <>
            <motion.div drag dragConstraints={reference} whileDrag={{scale:0.8}} className="w-[230px] h-[270px] bg-zinc-900/90 rounded-[30px] text-white p-5 shadow-lg relative overflow-hidden m-5">
                <FaRegFileAlt />
                <p className='mt-5 text-[14px] font-normal'>
                    {data.desc}
                </p>

                <div className="footer absolute bottom-0 w-full left-0">
                    <div className='flex items-center justify-between px-5 py-3'>
                        <p>{data.fileSize}</p>
                        <span className='w-7 h-7 bg-zinc-600 rounded-full flex justify-center items-center shadow-md'>  
                            {data.close?<IoClose size="1em"/>:<MdOutlineFileDownload size="1em" />}
                        </span>
                    </div>
                    {data.tag.isOpen &&
                        (<div className={`tag w-full bg-green-600 p-3 px-5 py-3 flex justify-center items-center text-[16px] font-semibold`}>
                        <p>{data.tag.tagTitle}</p>
                        </div>)   
                    }
                </div>
            </motion.div>
        </>
    )
}

export default Card