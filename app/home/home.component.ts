
import { Dish } from '../shared/models/dish';
import { DishService } from '../services/dish.service';
import { Promotion } from '../shared/models/promotion';
import { PromotionService } from '../services/promotion.service';
import { Leader } from '../shared/models/leader';
import { LeaderService } from '../services/leader.service';
import { DrawerPage } from '../shared/drawer/drawer.page';
import {ChangeDetectorRef, Component, Inject, OnInit} from "@angular/core";

@Component({
    selector: 'app-home',
    moduleId: module.id,
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent extends DrawerPage implements OnInit {

    dish: Dish;
    promotion: Promotion;
    leader: Leader;
    dishErrMess: string;
    promoErrMess: string;
    leaderErrMess: string;

    constructor(private dishservice: DishService,
                private promotionservice: PromotionService,
                private leaderservice: LeaderService,
                private changeDetectorRef:ChangeDetectorRef,
                @Inject('BaseURL') private BaseURL) {
        super(changeDetectorRef);
    }

    ngOnInit() {
        this.dishservice.getFeaturedDish()
            .subscribe(dish => this.dish = dish,
                errmess => this.dishErrMess = <any>errmess );
        this.promotionservice.getFeaturedPromotion()
            .subscribe(promotion => this.promotion = promotion,
                errmess => this.promoErrMess = <any>errmess );
        this.leaderservice.getFeaturedLeader()
            .subscribe(leader => this.leader = leader,
                errmess => this.leaderErrMess = <any>errmess );
    }

}