sap.ui.define([
  "sap/ui/core/mvc/Controller", 
  "sap/m/MessageToast",
  "sap/ui/core/Fragment",
], function (Controller,MessageToast, Fragment) {
  "use strict";

  return Controller.extend("UI_FIVE.controller.HelloPanel", {
    onInit: function () {

    },

    onShowHello: function (oEvent) {
      /* // Vanilla JS alert
            alert("UI5"); */

      // Read message from i18n
      const oBundle = this.getView().getModel("i18n").getResourceBundle();
      const person = this.getView().getModel().getProperty("/person/name");

      const sMsg = oBundle.getText("helloMessage", [person]);

      MessageToast.show(sMsg);
    },

    // onOpenDialog: async function (oEvent) {

    //   const oView = this.getView();

    //   if(!this.byId("helloDialog")){
    //     Fragment.load({
    //       id: oView.getId(),
    //       name: "UI_FIVE.view.fragments.HelloDialog",
    //       controller: this
    //     }).then((oDialog)=> {
    //       //Connect dialog to root view
    //       oView.addDependent(oDialog);
    //       oDialog.open();
    //     })
    //   }
    //   else{
    //     this.byId("helloDialog").open();
    //   }

    //   /* this._showHelloDialog ??= await this.loadFragment({
    //     name: "UI_FIVE.view.fragments.HelloDialog"
    //   });
    //   this._showHelloDialog.open(); */
    // },

    // onCloseDialog: async function(oEvent){
    //   this.byId("helloDialog").close();
    // },
    onOpenDialog: function(o){
      this.getOwnerComponent().onOpenDialog(o);
    },
    onCloseDialog: function(o){
      this.getOwnerComponent().onCloseDialog(o);
    },
  });
});
