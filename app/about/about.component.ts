import {Component, OnInit} from "@angular/core";
import {RouterExtensions} from "nativescript-angular/router";

@Component({
    selector: 'app-about',
    moduleId: module.id,
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

    constructor(private routerExtensions: RouterExtensions) {
    }

    ngOnInit(): void {
    }

    goBack(): void {
        this.routerExtensions.back();
    }
}