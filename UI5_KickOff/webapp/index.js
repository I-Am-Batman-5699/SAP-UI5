sap.ui.define([
    "sap/ui/core/ComponentContainer"
], function(ComponentContainer){
    "use strict";

    new ComponentContainer({
        name: "UI_FIVE",
        setting: {
            id: "ui5"
        },
        async : true
    }).placeAt("content");
});