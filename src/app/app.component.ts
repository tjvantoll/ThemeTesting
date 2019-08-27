import { Component } from "@angular/core";
import { getRootView } from "tns-core-modules/application";
import "nativescript-theme-core";

@Component({
    selector: "ns-app",
    moduleId: module.id,
    templateUrl: "./app.component.html"
})
export class AppComponent {
    constructor() {
        // getRootView().className += " ns-dark";
    }
}
