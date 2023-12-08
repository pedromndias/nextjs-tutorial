// Transform this component into a Client Component:
"use client"

import { useState } from "react"

const ClientPage = () => {
    // Create state for a counter:
    const [count, setCount] = useState(0)
    console.log("client component");
    return (
      <div>
        <h1 className="text-7xl font-bold mb-4">{count}</h1>
        <button className="btn btn-primary" onClick={() => setCount(count + 1)}>
          Increase
        </button>
      </div>
    )
  }
  
  export default ClientPage