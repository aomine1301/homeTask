import React from "react";
import classes from './Button.module.scss'
interface ButtonPropsType{
    bodyButton:string,
}

export const Button:React.FC<ButtonPropsType> = ({bodyButton}) =>{

    const handleClickButton = (e:React.MouseEvent<HTMLButtonElement>) =>{
        console.log('hello world')
    }

    return(
        <button
            className={classes.button}
            onClick={handleClickButton}
        >
            {bodyButton}

        </button>
    )
}
