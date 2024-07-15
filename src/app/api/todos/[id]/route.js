import { NextResponse } from "next/server";
import connectMongoDb from "../../../../../libs/mongodb";
import Todo from "../../../../../models/Todos";

export async function PUT(request, { params }) {
    const { id } = params;

    try {
        // Extract newTitle and newDescription from request body
        const { newTitle, newDescription } = await request.json();
        
        // Log to check if title and description are received correctly
        console.log("Received title:", newTitle);
        console.log("Received description:", newDescription);

        // Connect to MongoDB
        await connectMongoDb();

        // Update the todo in MongoDB
        const updatedTodo = await Todo.findByIdAndUpdate(id, { title: newTitle, description: newDescription }, { new: true });

        // Check if todo was found and updated
        if (!updatedTodo) {
            return NextResponse.json({ message: "Todo not found" }, { status: 404 });
        }

        // Respond with success message and updated todo
        return NextResponse.json({ message: "Todo Updated Successfully", updatedTodo }, { status: 200 });
    } catch (error) {
        // Handle errors
        console.error("Error updating todo:", error);
        return NextResponse.json({ message: "Failed to update todo" }, { status: 500 });
    }
}

export async function GET(request, { params }) {
    try {
      const { id } = params;
      if (!id) {
        return NextResponse.json({ message: "ID is required" }, { status: 400 });
      }
  
      await connectMongoDb();
      const todo = await Todo.findById(id);
  
      if (!todo) {
        return NextResponse.json({ message: "Todo not found" }, { status: 404 });
      }
  
      return NextResponse.json(todo, { status: 200 });
    } catch (error) {
      console.error("Error fetching todo:", error);
      return NextResponse.json({ message: "Failed to fetch todo" }, { status: 500 });
    }
  }