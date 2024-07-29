sap.ui.define([
    "sap/ui/test/opaQunit",
    "./pages/App"
], (opaTest, App) => {
    "use strict";

    QUnit.module("Navigation");

    opaTest("Should Open the Hello Dialog", (given, when, then)=> {
        //arrangements
        given.iStartMyUIComponent({
            componentConfig:{
                name: "UI_FIVE"
            }
        });

        // Actions
        when.onTheAppPage.iPressTheSayHelloWithDialogButton();

        // Assertions
        then.onTheAppPage.iShouldSeetheHelloDialog();

        // Cleanup
        then.iTeardownMyApp();

    });
});