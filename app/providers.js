// ? Here we will create a component to render styled toasts. Note how we wrap the children and a Toaster component inside Providers. Providers allow us to share certain values from a parent component to its child components
"use client"

import { Toaster } from "react-hot-toast"

const Providers = ({children}) => {
  return (
    <>
        <Toaster />
        {children}
    </>
  )
}

export default Providers