// ? A server action is an asynchronous function that is executed on the server. It handles form submissions and data mutations. 

"use server"

import prisma from "@/utils/db"
import {revalidatePath} from "next/cache"

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


export const deleteTask = async (formData) => {
    const id = formData.get("id");
    await prisma.task.delete({
        where: {id} // {id : id}
    })
    revalidatePath("/tasks")
}