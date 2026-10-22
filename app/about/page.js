import React from 'react'

const About = () => {
  return (
   <main>
    <section className='h-[100vh] flex justify-center my-4 md:my-20'>
     <div className='flex flex-col gap-10 md:w-2/3 h-[70vh] rounded-3xl px-8 md:px-5 py-4'>
      <h1 className='text-4xl font-bold text-white'>About NanoLink</h1>
      <p className='text-lg leading-loose tracking-wider'>Welcome to our URL Shortener, a simple and efficient tool designed to make sharing links easier. Our platform allows you to transform long, complicated URLs into short, clean, and manageable links that are easy to share across social media, emails, messages, and other platforms. Our goal is to provide a fast, user-friendly, and reliable solution for anyone who wants to simplify their online experience. Whether you are a student, content creator, developer, or business professional, our URL Shortener helps you save space, keep your links organized, and share them effortlessly. We believe that sharing links should be quick, convenient, and accessible to everyone.</p>
     </div>

    
    </section>
   </main>
  )
}

export default About
