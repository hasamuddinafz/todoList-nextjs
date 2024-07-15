import React from 'react'
import Link from 'next/link'
import { HiPencilAlt } from 'react-icons/hi'
import RemoveBtn from './removeBtn';
const getTodos = async()=>{
    try {
        const res = await fetch("http://localhost:3000/api/todos", {cache:'no-store'});
        if(!res.ok){
            throw new Error("Failed to fetch Todos");
        }
        return res.json();
    } catch (error) {
        console.log(error);
    }
};
export default async function  todosList() {
    const {todos} = await getTodos();
  return (
    
    <div className='my-2'>
    {todos.map((todo:any)=>(
        <div className='flex justify-between items-start border p-5 my-2' key={todo._id}>
            <div className="todoContent">
                <h1 className='font-bold text-2xl'>{todo.title}</h1>
                <p>{todo.description}</p>
            </div>
            <div className="actions flex">
                <Link href={`/editTodo/${todo._id}`} className='text-green-700'>
                    <HiPencilAlt size={30}/>
                </Link>
                <RemoveBtn id={todo._id}/>
            </div>
        </div>
        ))}
    </div>
  )
}
