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

  getAll() {
    return this.afs.collection<Advertisement>(this.collectionName).valueChanges();
  }

  delete(id: string) {
    return this.afs.collection<Advertisement>(this.collectionName).doc(id).delete();
  }

  getById(id: string) {
    return this.afs.collection<Advertisement>(this.collectionName).doc(id).valueChanges();
  }
}
