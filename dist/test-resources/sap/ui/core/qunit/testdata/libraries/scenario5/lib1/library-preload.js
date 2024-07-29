//@ui5-bundle testlibs/scenario5/lib1/library-preload.js
sap.ui.predefine("testlibs/scenario5/lib1/library",[
	"sap/ui/core/Lib",
	"sap/ui/core/library",
	"testlibs/scenario5/lib3/library",
	"testlibs/scenario5/lib4/library",
	"testlibs/scenario5/lib5/library"
], function(Library) {
	"use strict";
	return Library.init({
		name: "testlibs.scenario5.lib1",
		apiVersion: 2,
		dependencies: [
			"testlibs.scenario5.lib3",
			"testlibs.scenario5.lib4",
			"testlibs.scenario5.lib5"
		],
		noLibraryCSS: true
	});
});
sap.ui.require.preload({
	"testlibs/scenario5/lib1/manifest.json":"{\n\t\"sap.ui5\": {\n\t\t\"dependencies\": {\n\t\t\t\"libs\": {\n\t\t\t\t\"testlibs.scenario5.lib3\": {\n\t\t\t\t\t\"minVersion\": \"1.0.0\"\n\t\t\t\t},\n\t\t\t\t\"testlibs.scenario5.lib4\": {\n\t\t\t\t\t\"minVersion\": \"1.0.0\"\n\t\t\t\t},\n\t\t\t\t\"testlibs.scenario5.lib5\": {\n\t\t\t\t\t\"minVersion\": \"1.0.0\"\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n}"
});