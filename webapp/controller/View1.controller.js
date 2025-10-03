sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";
    return Controller.extend("com.demo.myhandson07.controller.View1", {
        onInit() {
        },
        onPress: function () {
            this.getOwnerComponent().getRouter().navTo("RouteView2");
        },
        onSubmit: function () {
            var empId = this.getView().byId("idEmpId").getValue();
            var name = this.getView().byId("idName").getValue();
            var email = this.getView().byId("idEmail").getValue();

            // Employee ID validation
            if (empId === "") {
                this.getView().byId("idEmpId").setValueState("Error");
                this.getView().byId("idEmpId").setValueStateText("Employee Id is a mandatory field");
            } else {
                this.getView().byId("idEmpId").setValueState("None");
                var empIdRegExp = /^[0-9]+$/;
                if (!empId.match(empIdRegExp)) {
                    this.getView().byId("idEmpId").setValueState("Error");
                    this.getView().byId("idEmpId").setValueStateText("Employee Id must be only digits");
                } else if (empId.length !== 7) {
                    this.getView().byId("idEmpId").setValueState("Error");
                    this.getView().byId("idEmpId").setValueStateText("Employee Id length must be 7 digits");
                }
            }

            // Name validation
            if (name === "") {
                this.getView().byId("idName").setValueState("Error");
                this.getView().byId("idName").setValueStateText("Employee name is mandatory");
            } else {
                this.getView().byId("idName").setValueState("None");
                var nameRegExp = /^[a-zA-Z]+$/;
                if (!name.match(nameRegExp)) {
                    this.getView().byId("idName").setValueState("Error");
                    this.getView().byId("idName").setValueStateText("Employee name must contain only letters");
                }
            }

            // Email validation
            if (email === "") {
                this.getView().byId("idEmail").setValueState("Error");
                this.getView().byId("idEmail").setValueStateText("Employee email is mandatory");
            } else {
                this.getView().byId("idEmail").setValueState("None");
                var emailRegExp = /^[a-zA-Z0-9._-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,4}$/;
                if (!email.match(emailRegExp)) {
                    this.getView().byId("idEmail").setValueState("Error");
                    this.getView().byId("idEmail").setValueStateText("Employee email is not valid");
                }
            }
        }

    });
});