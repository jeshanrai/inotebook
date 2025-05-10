import React from 'react'

export default function Alert() {
  return (
    <div>
        <div className="alert alert-success alert-dismissible fade show" role="alert">
            <strong>Success!</strong> This is a success alert—check it out!
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
      
    </div>
  )
}
