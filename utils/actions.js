// ? A server action is an asynchronous function that is executed on the server. It handles form submissions and data mutations. 

"use server"

import prisma from "@/utils/db"
import {revalidatePath} from "next/cache"
import { redirect } from "next/navigation"
// We will use Zod, a schema declaration and validation library:
import {z} from "zod"

export const getAllTasks = async () => {
    return await prisma.task.findMany({
        orderBy: {
            createdAt: "desc"
        }
    })
}


// ? Note the formData which is a web api interface that comes already with Nextjs. Also note the "use server", as this function will run in the server.

export const createTask = async (formData) => {
    const content = formData.get("content")
    // console.log(content);
    await prisma.task.create({
        data: {
            content,
        }
    })
    // Note that we need to revalidate the path because the component is static and otherwise it would not reflect the updates:
    revalidatePath("/tasks")
}

export const createTaskCustom = async (prevState, formData) => {
    // This 1 second is just to simulate a delay on loading data with prisma:
    // await new Promise((resolve) => setTimeout(resolve,1000));
    const content = formData.get("content")
    // console.log(content);
    // Let's use the Zod library to create a schema for validation:
    const Task = z.object({
        content: z.string().min(5)
    })
    try {
        Task.parse({content})
        await prisma.task.create({
            data: {
                content,
            }
        })
        revalidatePath("/tasks")
        // If successful, let's return a message:
        return { message: "Success!"}
    } catch (error) {
        // console.log(error);
        return {message: error.errors[0].message}
    }
    
    
    
}

export const deleteTask = async (formData) => {
    const id = formData.get("id");
    await prisma.task.delete({
        where: {id} // {id : id}
    })
    revalidatePath("/tasks")
}

export const getTask = async (id) => {
    return await prisma.task.findUnique({
        where: {
            id
        }
    })
}

export const editTask = async (formData) => {
    const id = formData.get("id")
    const completed = formData.get("completed")
    const content = formData.get("content")
    await prisma.task.update({
        where: {
            id
        },
        data: {
            completed: completed === "on" ? true: false,
            content
        }
    })
    // Let's redirect the user (this must always be outside the "try" block):
    redirect("/tasks")
}