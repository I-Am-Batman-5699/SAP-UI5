sap.ui.define([
    "sap/ui/base/ManagedObject",
], function (ManagedObject) {
    "use strict";

    // Factory return
    return {
        statusText: function(sStatus){
            // const oResourceBundle = this.getView().getModel("i18n").getResourceBundle();
            const oResourceBundle = this.getOwnerComponent().getModel("i18n").getResourceBundle();
            let status ="none";
            switch(sStatus){
                case "A":
                    status = oResourceBundle.getText("invoiceStatusA");
                    break;
                case "B":
                    status = oResourceBundle.getText("invoiceStatusB");
                    break;
                case "C":
                    status = oResourceBundle.getText("invoiceStatusC");
                    break;
                default:
                    status = "Obsolete <Property not maintained anymore>";
            }
            return status;
        }
    };

});

