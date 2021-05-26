import React, { useState, Fragment } from 'react';
import styles from './../../../styles/stylesCustomButton.pcss'
/**
 * 
 * @param {*title => string} props 
 * @param {*onclick => function} props
 * @returns کاستوم کامپوننت دکمه
 */

const CustomButton = (props) => {

    return (
        <Fragment>
            <button className={`${styles.container }`} {...props}>{props.title}</button>
        </Fragment>
    )
}

export { CustomButton };