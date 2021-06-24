import React from "react";
import classes from './style.module.scss'
import {Button} from "../../components/button/Button";
import {Input} from "../../components/input/Input";

interface AuthorizationPropsTypes {

}

export const AuthorizationStep1: React.FC<AuthorizationPropsTypes> = () => {



    return (
        <div className={classes.container}>

            <h1>Регистрация</h1>
            <p>Lorem ipsum dolor sit amet.</p>

            <Input placeholderBody="Your email"/>
            <Button bodyButton="Continue"/>

        </div>
    )
}