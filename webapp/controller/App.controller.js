sap.ui.define(
	[
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
	], function(Controller, MessageToast){
		
		Controller.extend("opensap.myappsapui5.controller.App", {
			onShowHello: function(){
				MessageToast.show("Hello opan SAP");
			}
		});
	
});