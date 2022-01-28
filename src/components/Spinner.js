import React from "react";
import "react-loader-spinner";

import { Oval } from 'react-loader-spinner'

const Spinner = () => {
    return (
        <Oval 
            heigth="100"
            width="100"
            color='grey'
            ariaLabel='loading'
        />
    )
};


export default Spinner;