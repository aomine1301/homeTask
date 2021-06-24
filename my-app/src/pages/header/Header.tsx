import React from "react";
import classes from "./style.module.scss";

interface HeaderPropsType {

}


export const Header: React.FC<HeaderPropsType> = () => {
    return (
        <div className={classes.container}>
            <p>Lorem ipsum dolor sit.</p>

        </div>
    )
}