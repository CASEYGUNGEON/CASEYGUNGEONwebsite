import { ButtonGrid } from '../Components';
import Box from '@mui/material/Box';

export class Area {
    #name;
    #description;
    /// A dictionary of areas accessible from this area.
    #moveOptions;
    /* Format:
     *      moveOptions = {
     *          "buttonText": "areaKey"
     *      }
     */
    /// A dictionary of actions available in this area.
    #actOptions;
    /* Format:
     *      actOptions = {
     *          "buttonText": "eventKey"
     *      }
     */
    constructor(name, description, moveOptions, actOptions) {
        this.name = name;
        this.description = description;
        this.moveOptions = moveOptions;
        this.actOptions = actOptions;
    }

    getName() {
        return this.name;
    }

    getDescription() {
        return this.description;
    }

    getMoveOptions() {
        return this.moveOptions;
    }

    getActOptions() {
        return this.actOptions;
    }

    display(stateArr) {
        return (
            <>
                {this.getDescription()}
                <Box className="halfway">
                    <ButtonGrid buttonWidth="100" buttonHeight="10" width="40vw" rows={1} statearr={stateArr} type="moveArea" options={this.getMoveOptions()} className="halfway" /><br/>
                    <ButtonGrid buttonWidth="100" buttonHeight="10" width="40vw" rows={1} statearr={stateArr} type="startEvent" options={this.getActOptions()} className="halfway" />
                </Box>
            </>
        );

    }
}

export class Location {
    #areaList = {
        nullArea: new Area(
            "none",
            [
                "default"
            ],
            [
                null
            ]
        )
    };
    #areaNames;
    #exits = {
        toAreaName: "LocationName"
    };

    constructor(areaList, entrances, exits) {
        this.areaList = areaList;
        this.areaNames = Object.keys(areaList);
        this.entrances = entrances;
        this.exits = exits;
    }

    hasArea(areaName) {
        if (areaName in this.areaList)
            return true;
        return false;
    }

    getArea(areaName) {
        if (areaName !== null)
            return this.areaList[areaName];
        else
            return this.areaList[this.areaNames[0]];
    }

    getExitLocation(toAreaName) {
        return this.exits[toAreaName];
    }
}