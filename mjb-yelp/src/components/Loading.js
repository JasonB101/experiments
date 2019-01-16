import React from 'react'

function Loading({loading, children}) {
    return (
        loading ? <div className="loading">...Loading</div> : children
    )
}

export default Loading
