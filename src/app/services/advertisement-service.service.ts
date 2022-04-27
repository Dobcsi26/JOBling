import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Advertisement } from '../models/advertisement';
 
@Injectable({
  providedIn: 'root'
})
export class AdvertisementServiceService {

  collectionName = 'advertisement';

  constructor(private afs: AngularFirestore) { }

  create(advertisement: Advertisement) {
    advertisement.id = this.afs.createId();
    return this.afs.collection<Advertisement>(this.collectionName).doc(advertisement.id).set(advertisement);
  }
}
