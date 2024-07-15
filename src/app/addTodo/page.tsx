"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

function AddTodo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const router = useRouter();

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    if (!title || !description) {
      alert("Title and Description Required!");
      return;
    }
    try {
      const res = await fetch('http://localhost:3000/api/todos', { // Corrected the endpoint
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ title, description }),
      });
      if (res.ok) {
        router.push("/");
      } else {
        throw new Error("Failed to add todo");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className='flex flex-col' onSubmit={handleSubmit}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        placeholder='Todo title'
        className='border-2 p-2 my-2'
      />
      <input
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        type="text"
        placeholder='Todo description'
        className='border-2 p-2 my-2'
      />
      <button type="submit" className='bg-black text-white p-3'>Add Todo</button>
    </form>
  );
}

export default AddTodo;
