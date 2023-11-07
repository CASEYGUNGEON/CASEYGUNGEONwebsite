import { SimpleEvent } from './SimpleEvent';

const Wave = () => {
    this.setDatum('waved', true);
    this.setExtraDesc("They wave back.");
};

var TestEvent = new SimpleEvent(
    "Test Event",
    "You approach the strangely nondescript person.",
    {
        "wave": Wave
    },
    {
        "waved": false
    }
);

export { TestEvent, Wave };