"use client"
import { useState } from "react"
import { ToastContainer, toast, Bounce } from "react-toastify"
import Link from "next/link"
import Image from "next/image"


export default function Home() {
  const [form, setform] = useState({ "url": "", "shorturl": "" })
  const [Generated, setGenerated] = useState("")



  const handlegenerate = async () => {
    let res = await fetch('/api/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    })

    const response = await res.json()

    if (response.success) {
      toast(response.message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
      setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${form.shorturl}`)
      setform({ "url": "", "shorturl": "" })
    }
    else {
      toast(response.message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    }
  }

  const handlechange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value })
  }

  const copy=() => {
    navigator.clipboard.writeText(Generated)
    toast("URL copied", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });

  }
  

  return (
    <main >
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />

      {/* headings */}
      <section className="flex justify-center items-center h-[40vh] ">
        <div className="flex flex-col gap-4 justify-center items-center">
          <h1 className="text-6xl font-bold">URL Shortener</h1>
          <p>Shorten and Customize the links</p>
        </div>
      </section>

      {/* Form */}
      <section className="flex flex-col gap-5  items-center h-[80vh]">
        <div className="flex flex-col gap-4">
          <input onChange={handlechange} value={form.url} className="border-2 border-sky-300 px-4 py-2  rounded-xl w-100" placeholder="Enter your URL" type="text" name="url" />

          <input onChange={handlechange} value={form.shorturl} className="border-2 border-sky-300 px-4 py-2 rounded-xl w-100" placeholder="Enter the name you want" type="text" name="shorturl" />
        </div>
        <div>
          <button onClick={() => handlegenerate()} className="bg-sky-300 shadow-2xl shadow-sky-300 text-black px-3 py-1 w-80 rounded-full font-bold text-lg hover:bg-sky-400 transition-colors cursor-pointer">Generate</button>
        </div>

        {Generated &&
          <div className="flex gap-4 justify-center items-center my-4">
            <span className='font-bold text-lg'>Your Link: </span>
            <code>
              <Link target="_blank" href={Generated}>{Generated}</Link>
            </code>
            <Image src="/copy.png" alt="" height={25} width={25} onClick={copy} className="cursor-pointer bg-white p-1" />
            </div>}
      </section>
    </main>
  );
}
