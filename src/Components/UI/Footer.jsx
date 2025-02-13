import React from 'react'
import footerContact from '../../api/footerApi.json'
import {MdPlace} from "react-icons/md"
import {TbMailPlus} from "react-icons/tb"
import {IoCallSharp} from "react-icons/io5"

function Footer() {

  const footerIcon={
      MdPlace:<MdPlace/>,
      IoCallSharp:<IoCallSharp/>,
      TbMailPlus:<TbMailPlus/>
  }

  return (
  <div>
    <div className='grid grid-cols-3 md:h-20  h-25 py-3 px-4 sm:px-28 bg-[#202020]'>
      {footerContact.map((curData,index)=>{
        const {icon,title,details}=curData;
            return (
              <div className='flex flex-row' key={index}>
                 <div className='text-blue-600 text-2xl'>{footerIcon[icon]}</div>
                 <div className='ml-1'>
                  <p className='text-white text-xl'>{title}</p>
                  <p className='text-slate-400'>{details}</p>
                 </div>
              </div>
            )
      })}
    </div>
    <p className='text-white h-8   bg-black text-center mx-auto'>© {new Date().getFullYear()} WorldAtlas. All rights reserved.</p>

    </div>
  )
}

export default Footer
