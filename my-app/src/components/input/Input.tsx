import React, {useState} from "react";
import classes from './style.module.scss'
interface inputPropsType {
    placeholderBody: string
    disabled?:boolean
}


export const Input: React.FC<inputPropsType> = ({placeholderBody,disabled}) => {
    const [inputValue, setInputValue] = useState<string>('')

    const handleNameChange = (event:React.ChangeEvent<HTMLInputElement>)=> {
        setInputValue(event.target.value)
    }
    return (
        <input
            className={classes.container}
            placeholder={placeholderBody}
            onChange={handleNameChange}
            value={inputValue}
            disabled={disabled}
        />
    )
}