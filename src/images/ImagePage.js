// import React from 'react';
import { useState } from "react";
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

const cardbackFiles = require.context('./files/cardbacks', true);
const cardbackNames = cardbackFiles.keys();
const cardbackFileList = cardbackFiles.keys().map(file => cardbackFiles(file));

const abbeyFiles = require.context('./files/abbey', false);
const abbeyNames = abbeyFiles.keys();
const abbeyFileList = abbeyFiles.keys().map(file => abbeyFiles(file));

const abbeyNsfwFiles = require.context('./files/abbey/nsfw', true);
const abbeyNsfwNames = abbeyNsfwFiles.keys();
const abbeyNsfwFileList = abbeyNsfwFiles.keys().map(file => abbeyNsfwFiles(file));


const ImageDisplay = (props) => {
	const [display, setDisplay] = useState(1);
	const names = props.names;
	const files = props.files;
	return(
		<>
			{names.map((name, index) => <Button variant='contained' onClick={() => setDisplay(index)}>{name.split(/[\\/]/).pop()}</Button>)}
			<br />
			{names[display].match(/\.(jpg|jpeg|png|gif)$/i)
				? <img src={files[display]} style={{ width: 'auto', height: '80vh', objectFit: 'scale-down', }} alt="a CASEYGUNGEON classic cardback." />
				: <video controls src={files[display]} type="video/mp4" /> }
		</>
	)
}


const fileLists = [ cardbackFileList, abbeyFileList ];
const nameLists = [ cardbackNames, abbeyNames ];
const nsfwFileLists = [ cardbackFileList, abbeyFileList, abbeyNsfwFileList ];
const nsfwNameLists = [ cardbackNames, abbeyNames, abbeyNsfwNames ];
const categoryList = [ "Cardbacks", "Abbey" ];
const nsfwCategoryList = [ "Cardbacks", "Abbey", "Abbey NSFW" ];

const ImagePage = () => {
    const [category, setCategory] = useState(0);
	const [ nsfwToggle, setNsfwToggle ] = useState(0);
	const changeCategory = (event) => {
		setCategory(event.target.value);
	};
	
	const toggleNsfw = () => {
		setCategory(0);
		setNsfwToggle(!nsfwToggle);
	}
    return (
        <>
            <header />
            <body>
				<FormControl>
					<InputLabel id="demo-simple-select-label">Category</InputLabel>
						<Select
							labelId="demo-simple-select-label"
							id="demo-simple-select"
							value={category}
							label="Category"
							onChange={changeCategory}
						>
						{nsfwToggle ? nsfwCategoryList.map((val, index) => <MenuItem value={index}>{val}</MenuItem>) : categoryList.map((val, index) => <MenuItem value={index}>{val}</MenuItem>)}
						</Select>
				<FormControlLabel control={<Switch checked={nsfwToggle} onChange={() => toggleNsfw()}/>} label="18+" />
				</FormControl>
				<br /><br />
                {nsfwToggle ? <ImageDisplay files={nsfwFileLists[category]} names={nsfwNameLists[category]} /> : <ImageDisplay files={fileLists[category]} names={nameLists[category]} /> }
            </body>
        </>
    );
};

export default ImagePage;