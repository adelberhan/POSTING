import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { IUser } from '../model/user.model';
import { delay, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuthenticatedUser$:Observable<boolean>
  isAuthenticatedUserWithDelay$:Observable<boolean>
  private userCollection: AngularFirestoreCollection<IUser>;
  constructor(private auth: AngularFireAuth, private db: AngularFirestore) {
    this.userCollection = db.collection('users');
    this.isAuthenticatedUser$= auth.user.pipe(
      map(user => !!user) // Convert user to boolean
    )
    this.isAuthenticatedUserWithDelay$ = this.isAuthenticatedUser$.pipe(
      delay(2000)
    )

  }
  public async createUser(userDetails: IUser) {
    if (!userDetails.password) {
      throw new Error('Password is required');
    }
    const userCred = await this.auth.createUserWithEmailAndPassword(
      userDetails.email,
      userDetails.password
    );
    this.userCollection.doc(userCred.user?.uid).set({
      name: userDetails.name,
      email: userDetails.email,
      age: userDetails.age,
      phone_number: userDetails.phone_number,
    });
    userCred.user?.updateProfile({
      displayName: userDetails.name,
    });
  }
}
