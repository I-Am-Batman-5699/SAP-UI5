sap.ui.define([
    "sap/ui/core/Control",
    "sap/m/RatingIndicator",
    "sap/m/Label",
    "sap/m/Button"
], (Control, RatingIndicator, Label, Button) => {
    "use strict";

    let oResourceBundle_loaded = undefined;

    return Control.extend("UI_FIVE.control.ProductRating", {

        
        metadata: {
            properties: {
                //  this.getProperty("value") <== this the property, getter and setter automatically created
                value: {
                    type: "float",
                    defaultValue: 0,
                }
            },
            aggregations: {
                _rating: {
                    type: "sap.m.RatingIndicator",
                    multiple: false,
                    visibility: "hidden"
                },
                _label: {
                    type: "sap.m.Label",
                    multiple: false,
                    visibility: "hidden"
                },
                _button: {
                    type: "sap.m.Button",
                    multiple: false,
                    visibility: "visible"
                }
            },
            events: {
                change: {
                    parameters: {
                        value: {
                            type: "int"
                        }
                    }
                }
            }
        },

        init() {
        
            this.setAggregation("_rating", new RatingIndicator({
                value: this.getValue(),
                iconSize: "2rem",
                visualMode: "Half",
                liveChange: this._onRate.bind(this),
                maxValue: 7,
            }));

            this.setAggregation("_label", new Label({
                text: "{i18n>productRatingLabelInitial}",
                id: "idRateProductLabel"
            })).addStyleClass("sapUiSmallMargin");

            this.setAggregation("_button", new Button({
                text: "{i18n>productRatingButton}",
				press: this._onSubmit.bind(this),
                type: "Emphasized",
                class: "customProductLabelButton",
                enabled: false
            })).addStyleClass("sapUiTinyMarginTopBottom");

            this._loadi18n();
        },

        _loadi18n: function(){
            // oResourceBundle_loaded = this.getModel("i18n").getResourceBundle();
        },

        /* Important */
        // Renderer defines HTML which will be added and show in UI, oRm is renderer manager
        renderer(oRm, oControl) {
            // div opened
            oRm.openStart("div", oControl);
            // class added to div
			oRm.class("myAppDemoCustomProductRating");
            // div start closed
			oRm.openEnd();
            // aggregations added to div(renderer)
			oRm.renderControl(oControl.getAggregation("_rating"));
            // div closed
			oRm.close("div");
            
            oRm.openStart("div", oControl);
			oRm.class("myAppDemoCustomProductRating");
			oRm.openEnd();
			oRm.renderControl(oControl.getAggregation("_label"));
			oRm.renderControl(oControl.getAggregation("_button"));
			oRm.close("div");


            oResourceBundle_loaded = oResourceBundle_loaded || oControl.getModel("i18n").getResourceBundle();
        },
        /* Important */

        
        /* @override */ // Setter method
        setValue: function(fValue){
            !this.getAggregation("_button").getEnabled() && this.getAggregation("_button").setEnabled(true);
            this.setProperty("value", fValue, true);
			this.getAggregation("_rating").setValue(fValue);

			return this;
        },

        reset: function(){
            // const oResourceBundle = this.getModel("i18n").getResourceBundle();
            const oResourceBundle = oResourceBundle_loaded;

			this.setValue(0);
			this.getAggregation("_rating").setEnabled(true);

			this.getAggregation("_label").setText(oResourceBundle.getText("productRatingLabelInitial"));
			this.getAggregation("_label").setDesign("Standard");

			this.getAggregation("_button").setEnabled(true);
        },

        _onRate: function(oEvent){
            // const oResourceBundle = this.getModel("i18n").getResourceBundle();
            const oResourceBundle = oResourceBundle_loaded;
			const fValue = oEvent.getParameter("value");

			this.setProperty("value", fValue, true);

			this.getAggregation("_label").setText(oResourceBundle.getText("productRatingLabelIndicator", [fValue, oEvent.getSource().getMaxValue()]));
			this.getAggregation("_label").setDesign("Bold");
        },

        _onSubmit(oEvent) {
			// const oResourceBundle = this.getModel("i18n").getResourceBundle();
			const oResourceBundle = oResourceBundle_loaded;

			this.getAggregation("_rating").setEnabled(false);
			this.getAggregation("_label").setText(oResourceBundle.getText("productRatingLabelFinal"));
			this.getAggregation("_button").setEnabled(false);
			this.fireEvent("change", {
				value: this.getValue()
			});
		},

        

    });
});