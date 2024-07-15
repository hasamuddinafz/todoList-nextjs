"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function EditTodoForm({ id, title, description }: any) {
    const [newTitle, setNewTitle] = useState(title);
    const [newDescription, setNewDescription] = useState(description);
    
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        try {
            const res = await fetch(`http://localhost:3000/api/todos/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ newTitle, newDescription })
            });

            if (!res.ok) {
                throw new Error("Failed to update Todo");
            }

            // Redirect to the homepage after successful update
            router.push('/');
        } catch (error) {
            console.error("Error updating todo:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className='flex flex-col'>
            <input
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                type="text"
                placeholder='Todo title'
                className='border-2 p-2 my-2'
            />
            <input
                value={newDescription}
                onChange={(e) => setNewDescription(e.target.value)}
                type="text"
                placeholder='Todo description'
                className='border-2 p-2 my-2'
            />
            <button type='submit' className='bg-black text-white p-3'>Update Todo</button>
        </form>
    );
}
