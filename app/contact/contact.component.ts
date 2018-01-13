import {Component, OnInit} from "@angular/core";
import {RouterExtensions} from "nativescript-angular/router";

@Component({
    selector: 'app-contact',
    moduleId: module.id,
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

    constructor( private routerExtensions: RouterExtensions) {}

    ngOnInit(): void {
    }

    goBack(): void {
        this.routerExtensions.back();
    }

}