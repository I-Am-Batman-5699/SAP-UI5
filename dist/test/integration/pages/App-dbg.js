sap.ui.define([
    "sap/ui/test/Opa5",
    "sap/ui/test/actions/Press"
], (Opa5, Press) => {
    "use strict";

    const sViewname = "UI_FIVE.view.HelloPanel";

    Opa5.createPageObjects({
        onTheAppPage:{
            actions: {
                iPressTheSayHelloWithDialogButton: function(){
                    return this.waitFor({
                        id:"helloDialogButton",
                        viewName: sViewname,
                        actions: new Press(),
                        errorMessage: "Did not find the 'say hello from dialog' button on the HelloPanel view"
                    });
                }
            },

            assertions: {
                iShouldSeetheHelloDialog(){
                    return this.waitFor({
                        controlType: "sap.m.Dialog",
                        success(){
                            Opa5.assert.ok(true, "We found and opened the dialog");
                        },
                        errorMessage: "Did not find the Dialog control"
                    });
                }
            }
        },
    });
});