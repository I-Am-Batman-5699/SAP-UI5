sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "../common/Formatter",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/ui/core/routing/History",
    "sap/m/MessageToast",
], function (Controller, JSONModel, Formatter, Filter, FilterOperator, History, MessageToast) {
    "use strict";

    return Controller.extend("UI_FIVE.controller.Detail", {
        onInit: function () {

            const oViewModel = new JSONModel({
				currency: "EUR"
			});
			this.getView().setModel(oViewModel, "view");
            
            const oRouter = this.getOwnerComponent().getRouter();
            oRouter.getRoute("detail").attachPatternMatched(this._onObjectMatched, this);
        },

        _onObjectMatched: function(oEvent){
            this.byId("rating").reset();
            this.getView().bindElement({
                path: "/" + window.decodeURIComponent(oEvent.getParameter("arguments").invoicePath),
                model:"invoice"
            });
        },

        onPressNavBack: function(){
            
            const oHistory = History.getInstance();
            const sPreviousHash = oHistory.getPreviousHash();

            if(sPreviousHash !== undefined){
                window.history.go(-1);
            }
            else{
                const oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("overview", {}, true);
            }
        },

        onRatingChange(oEvent) {
			const fValue = oEvent.getParameter("value");
			const oResourceBundle = this.getView().getModel("i18n").getResourceBundle();

			MessageToast.show(oResourceBundle.getText("ratingConfirmation", [fValue]));
		},

    });
});
