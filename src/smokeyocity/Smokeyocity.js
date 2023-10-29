// import React from 'react';
import { useState } from "react";
import { Link } from 'react-router-dom';
import {Helmet} from "react-helmet";
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './Smokeyocity.css';
import veer from './veersitting.jpg';


export default function Smokeyocity() {
	const [display, setDisplay] = useState("none");
	const theme = createTheme({
		palette: {
			primary: {
				main: '#8a06bb',
			},
			secondary: {
				main: '#00ffff',
			},
		},
	});
	return (
		<ThemeProvider theme={theme}>
			<Helmet>
				<title>Smokey Commission Info</title>
			</Helmet>
			<div className='Smokey'>
				<header>
					<h1>smokeyocity commission information</h1>
					<Button variant="contained" component={Link} to="/">Go Back</Button>
				</header>
				<div>
					<span className="shadow">
						<br/><h3 style={{display: "inline"}}>under construction. <a class='Smokey shadow' href='https://twitter.com/smokeyocity'>check here for now!</a></h3>
					</span>
					<br/><br/><Button variant='contained' onClick={() => setDisplay('colorsketch')}>Color Sketch</Button><Button variant='contained' onClick={() => setDisplay('none')}>none</Button>
					{ display === 'colorsketch' ?
						<span className="shadow">
							<br/><h1 style={{display: "inline"}}>Color sketch: $</h1>check twitter
							<br/><img src={veer} width="500" height="500" alt="colored sketch of Veer"/>
						</span>
						: null }
				</div>
			</div>
		</ThemeProvider>
	);
};
