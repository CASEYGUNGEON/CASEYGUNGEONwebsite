import { Location, Area } from '../../Objects/Location';
import TestEvent from '../Events/SimpleEvent/TestEvent';



export let MainStreet = new Area(
    "Main Street",
    "It's pretty busy on this road. There's a store here with its doors wide open, and a much quieter side street.",
    {
        "Side Street": "Side Street",
        "Store": "Store",
    },
    {
        "Look for someone" : "testevent"
    }
);

export let SideStreet = new Area(
    "Side Street",
    "This street is quiet. Shadow lurks in a nearby alley.",
    {
        "Main Street": "Main Street",
        "Back Alley": "Back Alley"
    },
    []
);

export let BackAlley = new Area(
    "Back Alley",
    "This alley is pretty dark. It's hard to see here.",
    { "Side Street": "Side Street"},
    []
);

export let Store = new Area(
    "Store",
    "You can barely hear yourself over the bustle in this store.",
    { "Main Street": "Main Street"},
    []
);

export let CityLocation = new Location(
    {
        "Main Street": MainStreet,
        "Side Street": SideStreet,
        "Store": Store,
        "Back Alley": BackAlley,
    },
    []
);