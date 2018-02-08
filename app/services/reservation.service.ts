import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {CouchbaseService} from "./couchbase.service";

@Injectable()
export class ReservationService {

    reservations: Array<number>;
    docId: string = "reservations";
    constructor(private couchbaseService: CouchbaseService) {
        this.reservations = [];

        let doc = this.couchbaseService.getDocument(this.docId);
        if( doc == null) {
            this.couchbaseService.createDocument({"reservations": []}, this.docId);
        }
        else {
            this.reservations = doc.reservations;
        }
    }

    addReservation(fields: any): boolean {
        this.reservations.push(fields);
        this.couchbaseService.updateDocument(this.docId, {"reservations": this.reservations});
        return true;
    }
}