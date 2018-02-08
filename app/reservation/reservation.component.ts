import {Component, OnInit, ChangeDetectorRef, ViewContainerRef} from '@angular/core';
import { DrawerPage } from '../shared/drawer/drawer.page';
import { TextField } from 'ui/text-field';
import { Switch } from 'ui/switch';
import { Validators, FormBuilder, FormGroup} from '@angular/forms';
import {ModalDialogOptions, ModalDialogService} from "nativescript-angular";
import {ReservationModalComponent} from "../reservationmodal/reservationmodal.component";
import { Animation, AnimationDefinition } from "ui/animation";
import {View} from "tns-core-modules/ui/core/view";
import {Page} from "tns-core-modules/ui/page";
import * as enums from "ui/enums";
import {ReservationService} from "../services/reservation.service";
@Component({
    selector: 'app-reservation',
    moduleId: module.id,
    templateUrl: './reservation.component.html'
})
export class ReservationComponent extends DrawerPage implements OnInit {

    reservation: FormGroup;
    content: View;
    formSubmitted:boolean = false;

    constructor(private changeDetectorRef: ChangeDetectorRef,
                private page: Page,
                private reservationService: ReservationService,
                private formBuilder: FormBuilder,private modalService: ModalDialogService,
                private vcRef: ViewContainerRef) {
        super(changeDetectorRef);

        this.reservation = this.formBuilder.group({
            guests: 3,
            smoking: false,
            dateTime: [new Date(), Validators.required]
        });
    }

    ngOnInit() {
    }

    onSmokingChecked(args) {
        let smokingSwitch = <Switch>args.object;
        if (smokingSwitch.checked) {
            this.reservation.patchValue({ smoking: true });
        }
        else {
            this.reservation.patchValue({ smoking: false });
        }
    }

    onGuestChange(args) {
        let textField = <TextField>args.object;

        this.reservation.patchValue({ guests: textField.text});
    }

    onDateTimeChange(args) {
        let textField = <TextField>args.object;

        this.reservation.patchValue({ dateTime: textField.text});
    }

    onSubmit() {
        console.log(JSON.stringify(this.reservation.value));
        this.content = <View>this.page.getViewById<View>("content");
        this.animateDiv(this.content, 0,0,0.2).then(() => {
            this.reservationService.addReservation(this.reservation.value);
            this.formSubmitted = true;
            this.animateDiv(this.content,1,1,1).then(() => {
            }).catch((e) => {
                console.log(e.message);
            });
        })
        .catch((e) => {
            console.log(e.message);
        });
    }

    animateDiv(contentView:View, scaleX: number, scaleY: number, opacity: number):Promise<any> {

        let definitions = new Array<AnimationDefinition>();
        let a1: AnimationDefinition = {
            target: contentView,
            scale: { x: scaleX, y: scaleY },
            opacity: opacity,
            duration: 500,
            curve: enums.AnimationCurve.easeIn
        };
        definitions.push(a1);

        let animationSet = new Animation(definitions);

        return animationSet.play();
    }



    createModalView(args) {

        let options: ModalDialogOptions = {
            viewContainerRef: this.vcRef,
            context: args,
            fullscreen: false
        };

        this.modalService.showModal(ReservationModalComponent, options)
            .then((result: any) => {
                if (args === "guest") {
                    this.reservation.patchValue({guests: result});
                }
                else if (args === "date-time") {
                    this.reservation.patchValue({ dateTime: result});
                }
            });

    }
}