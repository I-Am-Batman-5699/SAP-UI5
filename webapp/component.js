sap.ui.define(
  [
    "sap/ui/core/UIComponent",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel",
    "./common/HelloDialog",
    "sap/ui/Device",
  ],
  function (UIComponent, MessageToast, JSONModel, ResourceModel, HelloDialog, Device) {
    "use strict";

    return UIComponent.extend("UI_FIVE.component", {
      metadata: {
        // interfaces: ["sap.ui.core.IAsyncContentCreation"],
        manifest: "json"
      },
      init: function () {
        // Call init of the parent
        UIComponent.prototype.init.apply(this, arguments);
        // Set data modes
        const oData = {
          person: {
            name: "Batman"
          }
        };
        const oModel = new JSONModel(oData);
        this.setModel(oModel);

        // Set i18n model
        const i18nModel = new ResourceModel({
          bundleName: "UI_FIVE/i18n/i18n",
          supportedLocales: [""],
          fallbackLocale: ""
        });
        this.setModel(i18nModel, "i18n");
        
        // set device model
        const oDeviceModel = new JSONModel(Device);
        oDeviceModel.setDefaultBindingMode("OneWay");
        this.setModel(oDeviceModel, "device");
        
        //Set dialog
        this._helloDialog = new HelloDialog(this.getRootControl());
        
        // create the views based on the url/hash
        this.getRouter().initialize();

      },

      getContentDensityClass(){
        return Device.support.touch ? "sapUiSizeCozy": "sapUiSizeCompact";
      },

      exit: function () {
        this._helloDialog.destroy();
        delete this._helloDialog;
      },

      onOpenDialog: async function (oEvent) {
        this._helloDialog.onOpenDialog(oEvent);
      },

      onCloseDialog: async function (oEvent) {
        // this._helloDialog.onOpenDialog();
      },

    });
  }
);
