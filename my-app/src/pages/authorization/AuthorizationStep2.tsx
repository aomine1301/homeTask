import React from "react";
import classes from './style.module.scss'
import {Button} from "../../components/button/Button";
import {Input} from "../../components/input/Input";

interface AuthorizationStep2PropsTypes {
    sec?:number
}

export const AuthorizationStep2: React.FC<AuthorizationStep2PropsTypes> = ({sec}) => {



    return (
        <div className={classes.container}>

            <h1>Регистрация</h1>
            <p>Lorem ipsum dolor sit amet.</p>

            <Input placeholderBody="Your email" disabled={true}/>
            <p >Lorem ipsum dolor sit amet.{sec}</p>
            <Button bodyButton="Continue"/>

        </div>
    )
}