import React from 'react'

function Alert(props) {
  return (
    <div>
        <div className="alert alert-success alert-dismissible fade show" role="alert">
            <strong>{props.alert}</strong>
        </div>
    </div>
  )
}

export default Alert