import { Component, OnInit, Inject } from '@angular/core';
import { Dish } from '../shared/models/dish';
import { DishService } from '../services/dish.service';

@Component({
    selector: 'app-menu',
    moduleId: module.id,
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
    dishes: Dish[];

    errMess: string;

    constructor(private dishService: DishService,
                @Inject('BaseURL') private BaseURL) { }

    ngOnInit() {
        this.dishService.getDishes()
            .subscribe(dishes => this.dishes = dishes,
                errmess => this.errMess = <any>errmess);
    }

}