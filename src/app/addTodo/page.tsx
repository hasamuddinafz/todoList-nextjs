import React from 'react'

function page() {
  return (
    <form className='flex flex-col'>
        <input type="text" placeholder='Todo title' className='border-2 p-2 my-2'/>
        <input type="text" placeholder='Todo description' className='border-2 p-2 my-2'/>
        <button className='bg-blue-800 text-white p-3'>Add Todo</button>
    </form>
  )
}

export default page