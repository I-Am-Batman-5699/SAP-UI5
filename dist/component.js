sap.ui.define(
  [
    "sap/ui/core/UIComponent",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel",
    "./common/HelloDialog",
    "sap/ui/Device"
  ],
  function (e, o, t, n, i, s) {
    "use strict";
    return e.extend("UI_FIVE.component", {
      metadata: { manifest: "json" },
      init: function () {
        e.prototype.init.apply(this, arguments);
        const o = { person: { name: "Batman" } };
        const a = new t(o);
        this.setModel(a);
        const l = new n({
          bundleName: "UI_FIVE/i18n/i18n",
          supportedLocales: [""],
          fallbackLocale: ""
        });
        this.setModel(l, "i18n");
        const c = new t(s);
        c.setDefaultBindingMode("OneWay");
        this.setModel(c, "device");
        this._helloDialog = new i(this.getRootControl());
        this.getRouter().initialize();
      },
      getContentDensityClass() {
        return s.support.touch ? "sapUiSizeCozy" : "sapUiSizeCompact";
      },
      exit: function () {
        this._helloDialog.destroy();
        delete this._helloDialog;
      },
      onOpenDialog: async function (e) {
        this._helloDialog.onOpenDialog(e);
      },
      onCloseDialog: async function (e) {}
    });
  }
);
//# sourceMappingURL=component.js.map
