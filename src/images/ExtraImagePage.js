// import React from 'react';
import { useState } from "react";
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import folderInfo from './extrafiles.json';


const folderList = folderInfo.map(item => [item.name, item.path]);

const files = require.context("./extrafiles", true);
const fileNames = files.keys();
const fileList = fileNames.map(file => files(file));

const ImageDisplay = (props) => {
	const [display, setDisplay] = useState(0);
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


const ExtraImagePage = (props) => {
    const [category, setCategory] = useState([]);

	const [currentFileNames, setCurrentFileNames] = useState([]);
	const [currentFiles, setCurrentFiles] = useState([]);

	const changeCategory = (event) => {
		var currentFolder = event.target.value;
		setCategory(currentFolder);
		var nameArray = [];
		var fileArray = [];
		fileNames.forEach(function(fileName) {
			if(fileName.includes(currentFolder[1]))
			{
				nameArray.push(fileName);
				fileArray.push(fileList[fileNames.indexOf(fileName)]);
			}
		});

		setCurrentFileNames(nameArray);
		setCurrentFiles(fileArray);
	};

    return (
        <>
            <header />
            <body>
				<h1>Image Gallery</h1>
				<FormControl sx={{width: 200}}>
					<InputLabel id="category-label">Category</InputLabel>
						<Select
							labelId="category-option-label"
							id="category"
							value={category[0]}
							label="Category"
							onChange={changeCategory}
							renderValue={val => val[0]}
						>
						{folderList.map((val, index) => <MenuItem value={[val[0], val[1]]}>{val[0]}</MenuItem>)}
						</Select>
				</FormControl>
				<br /><br />
                {category.length ? <ImageDisplay names={currentFileNames} files={currentFiles} /> : ""}
            </body>
        </>
    );
};

export default ExtraImagePage;