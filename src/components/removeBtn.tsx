"use client"
import React from 'react';
import { MdDeleteForever } from 'react-icons/md';
import { useRouter } from 'next/navigation';

export default function RemoveBtn({ id }:any) {
    const router = useRouter();

    const DeleteTodo = async () => {
        const confirmed = confirm("Are you sure?");
        if (confirmed) {
            try {
                const res = await fetch(`http://localhost:3000/api/todos?id=${id}`, { // Fixed the URL
                    method: "DELETE"
                });
                if (res.ok) {
                    router.refresh();
                } else {
                    console.error("Failed to delete todo");
                }
            } catch (error) {
                console.error("Error:", error);
            }
        }
    };

    return (
        <div>
            <button className='text-red-700' onClick={DeleteTodo}>
                <MdDeleteForever size={30} />
            </button>
        </div>
    );
}
