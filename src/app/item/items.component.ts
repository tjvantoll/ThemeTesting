import { Component, OnInit } from "@angular/core";
import { getRootView } from "tns-core-modules/application";
import { ClassList } from "nativescript-theme-core";

import { Item } from "./item";
import { ItemService } from "./item.service";

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html"
})
export class ItemsComponent implements OnInit {
    items: Array<Item>;

    constructor(private itemService: ItemService) { }

    ngOnInit(): void {
        this.items = this.itemService.getItems();

        const rootView = getRootView();
        const classList = new ClassList(rootView.className);

        classList.add("ns-dark");
        classList.add("ns-root");
        classList.add("ns-ios");
        classList.add("ns-portrait");
        rootView.className = classList.get();

        console.log(getRootView().className + "!");
    }
}
