sap.ui.define([
    "sap/ui/base/ManagedObject",
    "sap/ui/core/Fragment",
    "sap/ui/core/syncStyleClass"
], function (ManagedObject, Fragment, syncStyleClass) {
    "use strict";

    return ManagedObject.extend("UI_FIVE.common.HelloDialog",{
        constructor: function (oView) {
            this._oView = oView;
        },

        exit: function () {
            delete this._oView;
        },

        onOpenDialog: async function (oEvent) {
            const oView = this._oView; const that = this;
            if (!oView.byId("helloDialog")) {
                await Fragment.load({
                    id: oView.getId(),
                    name: "UI_FIVE.view.fragments.HelloDialog",
                    controller: that
                }).then((oDialog) => {
                    //Connect dialog to root view
                    oView.addDependent(oDialog);
                    // set compact/cozy to dialog style
                    syncStyleClass(oView.getController().getOwnerComponent().getContentDensityClass(), oView, oDialog)
                });
            }
            oView.byId("helloDialog").open();

            /* this._showHelloDialog ??= await this.loadFragment({
              name: "UI_FIVE.view.fragments.HelloDialog"
            });
            this._showHelloDialog.open(); */
        },

        onCloseDialog: async function (oEvent) {
            this._oView.byId("helloDialog").close();
        },
    });

});

