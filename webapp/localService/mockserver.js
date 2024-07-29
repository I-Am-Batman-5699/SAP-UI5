sap.ui.define([
    "sap/ui/core/util/MockServer",
    "sap/base/util/UriParameters"
], function (MockServer, UriParameters){
    "use strict";
    return {
        // init(){
        init : function(){
            // create
            const oMockServer = new MockServer({
                rootUri: sap.ui.require.toUrl("UI_FIVE") + "/V2/Northwind/Northwind.svc/"
                // rootUri: "https://services.odata.org/V2/Northwind/Northwind.svc/"
            });
            /*
            if uri
            // rootUri: "https://services.odata.org/V2/Northwind/Northwind.svc/"
            then replace "uri":"V2/Northwind/Northwind.svc/", with "uri":"https://services.odata.org/V2/Northwind/Northwind.svc/"
            */

            const oUrlParams = new URLSearchParams(window.location.search);
            // const oUrlParams = new UriParameters(window.location.href);

            // configure mockserver with delay
            MockServer.config({
                autoRespond: true,
                autoRespondAfter: oUrlParams.get("serverDelay") || 500
            });

            // simulate
            // const sPath = "../localService";
            const sPath = sap.ui.require.toUrl("UI_FIVE/localService");
            oMockServer.simulate(sPath + "/metadata.xml", sPath + "/mockdata");

            // start
            oMockServer.start();
        }
    }
});