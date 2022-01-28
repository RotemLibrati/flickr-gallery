import React, { StyleSheet } from "react";
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

// const styles = StyleSheet.create({
//     spinner: {
//         width: '100%',
//         height: '100%',
//         display: flex,
//         align-items: center,
//     justify- content: center;
// }
//     }
// });

export default Spinner;