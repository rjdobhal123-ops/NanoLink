import React from 'react'

const Contact = () => {
  return (
     <main>
    <section className='h-[100vh] flex flex-col md:flex-row gap-2 md:gap-40 mx-3 md:mx-10 my-3 md:my-20'>
     <div className='flex flex-col gap-10 md:w-[50vw] h-[70vh] shadow-2xl  px-5 py-4'>
      <h1 className='text-4xl font-bold text-white'>Get in Touch</h1>
      <p className='text-lg leading-loose tracking-wider'>We value your feedback and are always looking for ways to improve our URL Shortener. If you have any questions, suggestions, technical issues, or ideas for new features, we would love to hear from you. Whether you need assistance using our platform or simply want to share your experience, feel free to reach out to us. Your feedback helps us make our service better, more efficient, and more user-friendly. Thank you for choosing our URL Shortener and being a part of our journey toward making link sharing simpler for everyone.</p>
     </div>


      <div className='flex flex-col justify-center gap-5 text-lg h-[30vh] my-10 mx-4 border-2 border-sky-300 rounded-2xl px-6 py-2 bg-sky-900'>
        <span>email: rjdobhal123@gmail.com</span>
      <span>ph: 1234567890</span>
      <span className='text-sky-300'> <a href="https://github.com/rjdobhal123-ops">Github</a></span>
     
     </div>
    </section>
   </main>
  )
}

export default Contact
