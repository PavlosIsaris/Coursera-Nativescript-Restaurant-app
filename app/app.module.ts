import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";


// Uncomment and add to NgModule imports if you need to use two-way binding
import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
import { NativeScriptHttpModule } from "nativescript-angular/http";

import { DishService } from './services/dish.service';
import { ProcessHTTPMsgService } from './services/process-httpmsg.service';

import { baseURL } from './shared/baseurl';
import {MenuComponent} from "./menu/menu.component";
import {DishdetailComponent} from "./dishdetail/dishdetail.component";
import {NativeScriptUISideDrawerModule} from "nativescript-telerik-ui/sidedrawer/angular";
import {DrawerComponent} from "./shared/drawer/drawer.component";
import {HomeComponent} from "./home/home.component";
import {LeaderService} from "./services/leader.service";
import {PromotionService} from "./services/promotion.service";
import {ContactComponent} from "./contact/contact.component";
import {AboutComponent} from "./about/about.component";
import {TNSFontIconModule} from "nativescript-ngx-fonticon";
import {FavoriteService} from "./services/favorite.service";
import {NativeScriptUIListViewModule} from "nativescript-telerik-ui/listview/angular";
import {FavoritesComponent} from "./favorites/favorites.component";
import {ReactiveFormsModule} from "@angular/forms";
import {ReservationComponent} from "./reservation/reservation.component";
import {ReservationModalComponent} from "./reservationmodal/reservationmodal.component";
import {CommentComponent} from "./comment/comment.component";
import {CouchbaseService} from "./services/couchbase.service";
import {ReservationService} from "./services/reservation.service";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptHttpModule,
        NativeScriptUISideDrawerModule,
        NativeScriptUIListViewModule,
        NativeScriptFormsModule,
        ReactiveFormsModule,
        TNSFontIconModule.forRoot({
            'fa': './fonts/font-awesome.min.css'
        })
    ],
    declarations: [
        AppComponent,
        MenuComponent,
        DishdetailComponent,
        DrawerComponent,
        HomeComponent,
        ContactComponent,
        AboutComponent,
        ReservationComponent,
        ReservationModalComponent,
        FavoritesComponent,
        CommentComponent
    ],
    entryComponents: [ReservationModalComponent, CommentComponent],
    providers: [
        {provide: 'BaseURL', useValue: baseURL},
        DishService,
        ProcessHTTPMsgService,
        PromotionService,
        LeaderService,
        FavoriteService,
        ReservationService,
        CouchbaseService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
