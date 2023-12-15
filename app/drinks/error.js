"use client" // Very important to define an error file as use client only.

const error = (error) => {
    console.log(error);
  return (
    <div>{error.error.message}</div>
  )
}

export default error