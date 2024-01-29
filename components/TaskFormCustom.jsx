// ? This component will help the client to visualize some message while the data is being fetched.
"use client"

import { createTaskCustom } from "@/utils/actions"
import { useEffect } from "react"
import { useFormStatus, useFormState } from "react-dom"
import toast from 'react-hot-toast';

const SubmitBtn = () => {
    // Let's get the pending from the result of useFormStatus hook:
    const {pending} = useFormStatus()
    // Now let's render some button text and disable it depending on that status:
    return (
        <button type="submit" className="btn btn-primary joint-item" disabled={pending}>
            {pending ? "please wait...":"create task"}
        </button>
    )
}

// ? Note the new React hook useFormState, that updates state based on the result of the form action.
const initialState = {
    message: null,
}

const TaskForm = () => {
    // The useFormState takes the action function of our form and the initial state as parameters:
    const [state, formAction] = useFormState(createTaskCustom, initialState)

    // useEffect that will listen for changes in "state":
    useEffect(() => {
        if (state.message === "error") {
            toast.error("There was an error")
            return
        }
        if (state.message) {
            toast.success("Task created")
        }
    }, [state])

    // Note how the form action will be our state funcion. And we can also display the message.
    return <form action={formAction}>
        {state.message ? <p className="mb-2">{state.message}</p> : null}
        <div className="join w-full">
            <input type="text" className="input input-bordered join-item w-full" placeholder="type here" name="content" required/>
            <SubmitBtn />
        </div>
    </form>
}

export default TaskForm