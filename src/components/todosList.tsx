
import Link from 'next/link'
import React from 'react'
import { HiPencilAlt } from 'react-icons/hi'
import { IoRemove } from 'react-icons/io5'
import { MdDeleteForever } from 'react-icons/md'

function TodosList() {
  return (
    <div className='p-5 border my-2'>
        <div className='flex justify-between items-start'>
            <div className="todoContent">
                <h1 className='font-bold text-2xl'>Title Here...</h1>
                <p>The Description Here</p>
            </div>
            <div className="actions flex">
                <Link href={"/editTodo/123"} className='text-green-700'>
                    <HiPencilAlt size={30}/>
                </Link>
                <Link href={"/"} className='text-red-700'>
                    <MdDeleteForever size={30}/>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default TodosList