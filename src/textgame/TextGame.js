// import React from 'react';
import { useState, useEffect } from "react";
import { ButtonGrid } from './Components';

// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { cyan, yellow } from '@mui/material/colors';

import locations from './Data/Locations/Export';
import { eventDict, actionDict } from './Data/Events/Export';

import "./TextGame.css";

const TextGame = () => {
    const [selection, setSelection] = useState(null);
    const [selectionType, setSelectionType] = useState(null);

    const [currentLocation, setCurrentLocation] = useState("city");
    const [currentArea, setCurrentArea] = useState("Main Street");

    const [inEvent, setInEvent] = useState(false);
    const [currentEvent, setCurrentEvent] = useState(null);

    const [title, setTitle] = useState("Text Game!")

    const stateArr = [selection, setSelection, selectionType, setSelectionType, title, setTitle];
    const stateDict = {
        "selection": selection,
        "setSelection": setSelection,
        "selectionType": selectionType,
        "setSelectionType": setSelectionType,
        "title": title,
        "setTitle": setTitle,
    };

    useEffect(() => {
        document.title = `${title}`;
        switch (selectionType) {
            case "moveArea":
                setCurrentArea(selection);
                break;
            case "moveLocation":
                setCurrentLocation(selection); //TODO: set an actual location, not a string
                break;
            case "startEvent":
                setCurrentEvent(selection);
				console.log(selection);
				console.log(eventDict[selection]);
                break;
            case "eventAction": //TODO: Handle event actions
                currentEvent.selection();
                break;
            case "endEvent":
                setInEvent(false);
                setCurrentEvent(null);
                break;
            default:
                break;
        }

        setSelection(null);
        setSelectionType(null);

    }, [title, selection, selectionType, currentEvent, currentLocation, currentArea]);

	
    useEffect(() => {
        if (currentEvent != null) {
			setInEvent(true);
        }
        else {
            console.log("event is empty")
        }
    }, [currentEvent]);

    if (inEvent && eventDict[currentEvent] != null) {
        return (
            <div>
                {eventDict[currentEvent].display(stateArr)}
            </div>
        );
    }
    else {
        if (currentArea != null) {
            return (
                <div>
                    {locations[currentLocation].getArea(currentArea).display(stateArr)}
                </div>
            )
        }
    }
}

// <ButtonGridTest selectarr={selectarr} />

export default TextGame;