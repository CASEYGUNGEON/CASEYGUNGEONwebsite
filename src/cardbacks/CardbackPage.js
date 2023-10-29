// import React from 'react';
import { useState } from "react";
import Button from '@mui/material/Button';

const files = require.context('./files', true);
const names = files.keys();
const fileList = files.keys().map(file => files(file));

const CardbackPage = () => {
    const [display, setDisplay] = useState(1);
    return (
        <>
            <header />
            <body>
                {names.map((name, index) => <Button variant='contained' onClick={() => setDisplay(index)}>{name.split(/[\\/]/).pop()}</Button>)}
                <br />
                {names[display].match(/\.(jpg|jpeg|png|gif)$/i)
                    ? <img src={fileList[display]} style={{ width: 'auto', height: '90vh', objectFit: 'scale-down', }} alt="a CASEYGUNGEON classic cardback." />
                    : <video controls src={fileList[display]} type="video/mp4" /> }
                

                
            </body>
        </>
    );
};

export default CardbackPage;