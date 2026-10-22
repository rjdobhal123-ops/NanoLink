import React from 'react'

const Footer = () => {
  return (
    <footer className='min-h-[20vh] bottom-0 bg-sky-300 text-black flex flex-col md:flex-row  gap-3 md:gap-40 items-center'>
        <div className='text-lg font-bold px-2 md:px-4 py-2'>RajatDobhal © Copyright 2026</div>
    <div className='flex flex-col py-2 md:py-4 items-center justify-center gap-2 md:gap-4'>
      <h1 className='font-bold text-2xl md:text-3xl'>Your links. Your data. No bloat. </h1>
      <p className='px-4'>Ship faster with links that actually tell you what happened after the click.</p>
    </div>
    </footer>
  )
}

export default Footer
