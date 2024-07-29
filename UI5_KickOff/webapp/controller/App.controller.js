sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
  ],
  function(Controller) {
    "use strict";

    return Controller.extend("UI_FIVE.controller.App", {
      onInit: function() {
        this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
        /*
           "contentDensities": {
                        "compact": true,
                        "cozy": true
                },

                Added in manifest
        */
      },
      onOpenDialog: function(o){
        this.getOwnerComponent().onOpenDialog(o);
      },
    });
  }
);
