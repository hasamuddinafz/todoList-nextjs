import { NextResponse } from "next/server";
import connectMongoDb from "../../../../libs/mongodb";
import Todo from "../../../../models/Todos";

export async function POST(request) {
    try {
        const { title, description } = await request.json();
        
        // Connect to MongoDB
        await connectMongoDb();
        
        // Create a new Todo
        await Todo.create({ title, description });
        
        // Respond with success message
        return NextResponse.json({ message: "Todo Added Successfully" }, { status: 201 });
    } catch (error) {
        // Handle errors
        console.error("Error adding todo:", error);
        return NextResponse.json({ message: "Failed to add todo" }, { status: 500 });
    }
}

export async function GET() {
    try {
        await connectMongoDb(); // Connect to MongoDB
        
        const todos = await Todo.find(); // Fetch all todos
        
        return NextResponse.json({ todos });
    } catch (error) {
        console.error("Error fetching todos:", error);
        return NextResponse.json({ message: "Failed to fetch todos" }, { status: 500 });
    }
}

export async function DELETE(request) {
    try {
        const { searchParams } = new URL(request.url);
        const id = searchParams.get("id");

        await connectMongoDb(); // Connect to MongoDB
        
        const deletedTodo = await Todo.findByIdAndDelete(id); // Find and delete todo by ID
        
        if (!deletedTodo) {
            return NextResponse.json({ message: "Todo not found" }, { status: 404 });
        }
        
        return NextResponse.json({ message: "Todo Deleted successfully" }, { status: 200 });
    } catch (error) {
        console.error("Error deleting todo:", error);
        return NextResponse.json({ message: "Failed to delete todo" }, { status: 500 });
    }
}
