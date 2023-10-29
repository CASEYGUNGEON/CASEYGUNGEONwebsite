import { Location, Area } from '../../Objects/Location';

export let Bridge = new Area(
    "The bridge",
    "A wide array of consoles flash here, displaying all sorts of data. It's strangely quiet.",
    {"Command Hall": "Command Hall"},
    [],
);

export let CommandHall = new Area(
    "The Command hall",
    "This wide corridor leads to the bridge as well as individual offices for each member of the chain of command.",
    { "Bridge": "Bridge" },
    []
);

export let SS13Location = new Location(
    {
        "Bridge": Bridge,
        "Command Hall": CommandHall,
    }
);