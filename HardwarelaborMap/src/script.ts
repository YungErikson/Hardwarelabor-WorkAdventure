/// <reference types="@workadventure/iframe-api-typings" />

import { bootstrapExtra } from "@workadventure/scripting-api-extra";

let currentPopup = undefined;

// Open the popup when we enter a given zone
WA.room.onEnterLayer("AP1").subscribe(() => {
    WA.ui.openPopup("AP1_popup", 'Hello world!', [{
        label: "Close",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
        }
    }]);
});


WA.ui.modal.openModal({
    title: "WorkAdventure",
    src: "https://www.htwk-leipzig.de",
    allow: "fullscreen",
    allowApi: false,
    position: "center",
});
