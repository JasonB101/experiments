import React from 'react'

const Button = ({style}) => <button style={style}></button>



export default Button
export const OKButton = () => (
    Button({
        style:{
            backgroundColor: "green",
            fontSize: "20px",
        }
        
    })
)