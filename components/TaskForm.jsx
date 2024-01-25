import prisma from "@/utils/db"
import {revalidatePath} from "next/cache"

// ? A server action is an asynchronous function that is executed on the server. It handles form submissions and data mutations. Note the formData which is a web api interface that comes already with Nextjs. Also note the "use server", as this function will run in the server.
const createTask = async (formData) => {
  "use server"
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

const TaskForm = () => {
  return <form action={createTask}>
      <div className="join w-full">
        <input type="text" className="input input-bordered join-item w-full" placeholder="type here" name="content" required/>
        <button type="submit" className="btn btn-primary joint-item">create task</button>
      </div>
  </form>
}

export default TaskForm