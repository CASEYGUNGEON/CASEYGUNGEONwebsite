// import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { cyan, yellow } from '@mui/material/colors';
import './Carpet.css';
import amn from './amntransparent.png'
import {Helmet} from "react-helmet";
import GitHubIcon from '@mui/icons-material/GitHub';
import StorefrontIcon from '@mui/icons-material/Storefront';
import HouseIcon from '@mui/icons-material/House';

const Homepage = () => {
	const theme = createTheme({
		palette: {
			primary: {
				main: cyan[500],
			},
			secondary: {
				main: yellow[500],
			},
		},
	});
	return (
		<ThemeProvider theme={theme}>
			<Helmet>
				<title>CASEYGUNGEON homepage</title>
				<meta name="description" content="This is the CASEYGUNGEON homepage!"/>
			</Helmet>
			<div className="Carpet">
				<header className="center">
					<a href='https://twitter.com/skdaffle'><img src={amn} title='art by skdaffle' width="100" height="100" alt="art by skdaffle" /></a>
					<b style={{ fontSize: 30, fontWeight: 'bold' }}>Welcome to CASEYGUNGEON.com!</b>
					<a href='https://twitter.com/skdaffle'><img src={amn} title='art by skdaffle' alt='art by skdaffle' width="100" height="100" /></a>
					<br/>
				</header>
				<div>
					<div className="center">
						<br /><br /><br />
						<Box sx={{ backgroundColor: 'black', width:'50%', margin:'auto'}}>
							<p>I'm a 27-year-old full-stack developer with experience in Java and React. (It's how I built this website!) I also have experience working in fast-paced IT support both with a ticket queue and in realtime, and I love to design and program video games! I primarily work in the Unity engine, but have also used GameMaker Studio and BYOND.</p>
							<p>If you're seeing this page, there's a decent chance that it's because I'm looking for a job. I'm ready to work right away, so please hire me! If you don't have my e-mail address from my resume, feel free to contact me at <a style={{ color: "yellow" }} href="mailto:mail@caseygungeon.com">mail@caseygungeon.com</a></p>
						</Box>
					</div>
				</div>
				<footer className="center">
					<span style={{ backgroundColor: 'black', width:'50%', margin:'auto'}}><b>Points of Interest:</b></span><br />
					<a style={{color:"white"}} href="https://github.com/CASEYGUNGEON" title='Github'><GitHubIcon style={{fontSize: 50}}/></a>
					<a style={{color:"red"}} href="https://caseygungeon.itch.io/" title='itch.io'><StorefrontIcon style={{fontSize: 50}}/></a>
					<a style={{color:"gray"}} href="https://toyhou.se/SWORDDOGGIRL/characters" title='Toyhou.se'><HouseIcon style={{fontSize: 50}}/></a>
				</footer>
			</div>
		</ThemeProvider>
	);
}
// <Button variant="contained" component={Link} to="/smokeyocity">Smokey info</Button>
export default Homepage;