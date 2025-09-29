sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("com.demo.myhandson07.controller.View1", {
        onInit() {
        },
        onPress: function(){
            this.getOwnerComponent().getRouter().navTo("RouteView2");
        }
    });
});