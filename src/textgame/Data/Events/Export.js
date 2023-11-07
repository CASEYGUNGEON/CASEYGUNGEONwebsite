import { Combat } from "./Combat";
import { TestEvent, Wave } from "./SimpleEvent/TestEvent";

const eventDict = {
    "combat": Combat,
    "testevent": TestEvent,
};

const actionDict = {
	"wave": Wave,
};

export { eventDict, actionDict };