import {ChangeDetectorRef, Component, Inject, OnInit} from "@angular/core";
import {RouterExtensions} from "nativescript-angular/router";
import {Leader} from "../shared/models/leader";
import {LeaderService} from "../services/leader.service";
import {DrawerPage} from "../shared/drawer/drawer.page";

@Component({
    selector: 'app-about',
    moduleId: module.id,
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css']
})
export class AboutComponent extends DrawerPage implements OnInit {

    leaders: Array<Leader> = [];
    leadersErrMess: string;
    constructor(private routerExtensions: RouterExtensions,
                @Inject('BaseURL') private BaseURL,
                private changeDetectorRef:ChangeDetectorRef,
                private leaderService: LeaderService) {
        super(changeDetectorRef);
    }

    ngOnInit(): void {
        this.leaderService.getPromotions()
            .subscribe(leaders => this.leaders = leaders,
                errmess => this.leadersErrMess = <any>errmess );
    }
}