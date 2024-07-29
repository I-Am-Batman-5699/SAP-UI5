sap.ui.define(["UI_FIVE/common/Formatter","sap/ui/model/resource/ResourceModel"],(t,e)=>{"use strict";QUnit.module("formatting functions",{});QUnit.test("Should return the translated texts:",o=>{const r=new e({bundleUrl:sap.ui.require.toUrl("UI_FIVE/i18n/i18n.properties"),supportedLocales:[],fallbackLocale:""});const s={getOwnerComponent(){return{getModel(){return r}}}};const n=t.statusText.bind(s);o.strictEqual(n("A"),"New","The long text for status 'A' is correct");o.strictEqual(n("B"),"In Progress","The long text for status 'B' is correct");o.strictEqual(n("C"),"Done","The long text for status 'C' is correct");o.strictEqual(n("Foo"),"Foo","The long text for status 'Foo' is correct")})});
//# sourceMappingURL=formatter.js.map