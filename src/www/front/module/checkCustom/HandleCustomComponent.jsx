import React from 'react';
import { render } from 'react-dom';
import CustomDropDown from '../../../../components/custom/customDropDown/CustomDropDown';

const HandleCustomComponent = () => {

    console.log("handle custom component")

    return (
        <div>
            <CustomDropDown />
        </div>
    )
}

export default HandleCustomComponent;