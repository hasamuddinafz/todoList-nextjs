
import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <nav className='bg-black text-white flex justify-between items-center p-6 font-bold'>
        <Link  href={"/"}>Hasamuddin.com</Link>
        <Link className='p-2 bg-blue-800' href={"/addTodo"}>Add Todo</Link>
    </nav>
  )
}

export default Navbar