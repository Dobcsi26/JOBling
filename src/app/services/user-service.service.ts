import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Job_seeker } from '../models/job_seeker';
import { Job_offer } from '../models/job_offer';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  collectionNameSeeker = 'Job_seeker';
  collectionNameAdvertier = 'Job_offer';

  constructor(private afs: AngularFirestore) { }

  // CRUD (Create, Read, Update, Delete)

  createSeeker(userS: Job_seeker) {
    return this.afs.collection<Job_seeker>(this.collectionNameSeeker).doc(userS.id).set(userS);
  }

  createAdvertiser(userA: Job_offer) {
    return this.afs.collection<Job_offer>(this.collectionNameAdvertier).doc(userA.id).set(userA);
  }

}
