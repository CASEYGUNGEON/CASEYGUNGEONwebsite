// import React from 'react';
import { useState, useEffect } from "react";
import { ButtonGrid } from './Components';

// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { cyan, yellow } from '@mui/material/colors';

import locations from './Data/Locations/Export';
import events from './Data/Events/Export';

import "./TextGame.css";

const TextGame = () => {
    const [selection, setSelection] = useState(null);
    const [selectionType, setSelectionType] = useState(null);

    const [currentLocation, setCurrentLocation] = useState(locations["city"]);
    const [currentArea, setCurrentArea] = useState(currentLocation.getArea(null));

    const [inEvent, setInEvent] = useState(false);
    const [currentEvent, setCurrentEvent] = useState(events["testevent"]);

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
                setCurrentArea(currentLocation.getArea(selection));
                break;
            case "moveLocation":
                setCurrentLocation(selection); //TODO: set an actual location, not a string
                break;
            case "startEvent":
                setCurrentEvent(events[selection]);
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

    }, [selection]);

    useEffect(() => {
        if (currentEvent) {
            console.log(currentEvent.getDescription());
        }
        else {
            console.log("event is empty")
        }
    }, [currentEvent]);

    if (inEvent) {
        return (
            <div>
                {currentEvent.display(stateArr)}
            </div>
        );
    }
    else {
        if (currentArea != null) {
            return (
                <div>
                    {currentArea.display(stateArr)}
                </div>
            )
        }
    }
}

// <ButtonGridTest selectarr={selectarr} />

export default TextGame;