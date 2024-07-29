QUnit.config.autostart = false;

sap.ui.require(["sap/ui/core/Core"], async(Core) => {
	"use strict";

	await Core.ready();

	sap.ui.require([
		"UI_FIVE/localService/mockserver",
		"UI_FIVE/test/integration/NavigationJourney"
	], (mockserver) => {
		// initialize the mock server
		mockserver.init();
		QUnit.start();
	});
    
});