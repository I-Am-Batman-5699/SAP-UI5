sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast",
    "../common/Formatter",
    "sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
], function(Controller, JSONModel, MessageToast, Formatter, Filter, FilterOperator) {
    "use strict";

    return Controller.extend("UI_FIVE.controller.InvoiceList", {
        // Custom formatter
        formatter: Formatter,

        onInit: function(){
            const oModel = new JSONModel({
                currency:"EUR"
            });
            this.getView().setModel(oModel, "view");
        },

        notNullUndefinedEmpty: function(inp){
            return inp!==undefined && inp!==null && inp!=="";
        },

        onFilterInvoices: function(oEvent){
            const sQuery = oEvent.getParameter("query");
            const aFilter = [];
            
            // No filet if empty
            if(this.notNullUndefinedEmpty(sQuery)){
                aFilter.push(new Filter("ProductName", FilterOperator.Contains, sQuery));
            }

            // const oList = this.byId("invoiceListId") after 34;
            const oList = this.byId(oEvent.getSource().oParent.oParent.sId.split("--").pop());
            const oBinding = oList.getBinding("items");
            oBinding.filter(aFilter);
        },

        /* onPressDetails: function(oEvent){
            const oRouter = this.getOwnerComponent().getRouter();
            oRouter.navTo("detail");
        }, */

        onPressDetails: function (oEvent) {
            const oItem = oEvent.getSource();
            const oRouter = this.getOwnerComponent().getRouter();
            oRouter.navTo("detail", {
                invoicePath: window.encodeURIComponent(oItem.getBindingContext("invoice").getPath().substr(1))
            });
        },

        onExit: function(){

        },

    });
});