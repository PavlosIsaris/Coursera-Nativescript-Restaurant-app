import {Component, Inject, OnInit} from "@angular/core";
import {RouterExtensions} from "nativescript-angular/router";
import {Leader} from "../shared/models/leader";
import {LeaderService} from "../services/leader.service";

@Component({
    selector: 'app-about',
    moduleId: module.id,
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

    leaders: Array<Leader> = [];
    leadersErrMess: string;
    constructor(private routerExtensions: RouterExtensions,
                @Inject('BaseURL') private BaseURL,
                private leaderService: LeaderService) {
    }

    ngOnInit(): void {
        this.leaderService.getPromotions()
            .subscribe(leaders => this.leaders = leaders,
                errmess => this.leadersErrMess = <any>errmess );
    }

    goBack(): void {
        this.routerExtensions.back();
    }
}