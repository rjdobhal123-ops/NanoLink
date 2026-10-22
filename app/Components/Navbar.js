"use client"

import React from 'react'
import Link from 'next/link'
import { useState } from 'react'

const Navbar = () => {
  const [menuopen, setmenuopen] = useState(false)
  return (
   <nav className='relative min-h-[64px] w-full flex justify-between items-center text-white px-4 md:px-6 py-3'>
    {/* logo */}
    <div className='text-xl md:text-2xl shrink-0 font-bold'>NanoLink</div>


    <ul className='hidden md:flex justify-center items-center gap-5 lg:gap-8 font-bold cursor-pointer'>
       <Link href="/" className='hover:text-sky-300 transition-colors'><li>Home</li></Link> 
       <Link href="/about" className='hover:text-sky-300 transition-colors'> <li>About</li></Link>
       <Link href="/" className='hover:text-sky-300 transition-colors'> <li>Generate</li></Link>
       <Link href="/contact" className='hover:text-sky-300 transition-colors'><li>Contact</li></Link> 
    </ul>
    <div className='hidden md:flex gap-3 shrink-0'>
       <Link href="/"> <button className='rounded-lg bg-sky-300 px-3 py-2 hover:bg-sky-400 transition-colors cursor-pointer text-black'>Generate</button></Link>

       <Link href="https://github.com/rjdobhal123-ops">  <button className='rounded-lg bg-sky-300 px-3 py-2 hover:bg-sky-400 transition-colors cursor-pointer text-black'>Github</button></Link>
    </div>

     {/* Hamberger */}
    <button onClick={()=>setmenuopen(!menuopen)}
      className='md:hidden text-2xl p-2'>
      {menuopen?"X":"☰"}
    </button>

    {menuopen && (
      <div className='absolute top-full left-0 w-full border-t border-gray-700 bg-black p-6 md:hidden z-50'>
        <ul className='flex flex-col items-center gap-6 font-bold'>
          <li><Link href="/" onClick={()=>setmenuopen(false)}>Home</Link></li>
          <li><Link href="/about" onClick={()=>setmenuopen(false)}>About</Link></li>
          <li><Link href="/" onClick={()=>setmenuopen(false)}>Generate</Link></li>
          <li><Link href="/contact" onClick={()=>setmenuopen(false)}>Contact</Link></li>
        </ul>

        <div className='flex justify-center gap-3 mt-6'>
          <Link className='rounded-lg bg-sky-300 px-4 py-2 text-black' href="/" onClick={()=>setmenuopen(false)}>Generate</Link>

          <Link href="https://github.com/rjdobhal123-ops" target='_blank' className='rounded-lg bg-sky-300 px-4 py-2 text-black'>Github</Link>
        </div>
      </div>
    )}
   </nav>
  )
}

export default Navbar
