
import EditTodoForm from '@/components/editTodoForm'
import React, { useState } from 'react'

const getTodoById = async (id:any)=>{
  try {
    const res = await fetch(`http://localhost:3000/api/todos/${id}`, {
      cache: 'no-store'
    });
    if(!res.ok){
      throw new Error("failed to fetch todos !");
    }
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}
export default async function EditTodo({params}:any) {
  const {id} = params;
  
  const {title, description} =await getTodoById(id);

  return (
    <EditTodoForm id={id} title={title} description={description} />
  )
}
