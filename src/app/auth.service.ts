import { Injectable } from '@angular/core';
import PocketBase from 'PocketBase';
import { BehaviorSubject } from 'rxjs';
import { UserModel } from './models/user-model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  private pb: PocketBase; // Dichiarare pb come proprietà della classe

  private userSubject: BehaviorSubject<UserModel | null> = new BehaviorSubject<UserModel | null>(null);
  user$ = this.userSubject.asObservable();

  async login(username: string, password: string) {
    const authData = await this.pb.collection('Admin').authWithPassword(username, password);
    this.userSubject.next({ isValid: this.pb.authStore.isValid, username: this.pb.authStore.model?.['email'] });
    console.log(authData);
    console.log(this.pb.authStore.isValid);
    console.log(this.pb.authStore.token);
    return true;
  }

  async logout() {
    this.pb.authStore.clear(); // Usa l'istanza di PocketBase esistente
  }      

  updateUserSubjet() {
    this.userSubject.next({ isValid: this.pb.authStore.isValid, username: this.pb.authStore.model?.['email'] }); // Usa l'istanza di PocketBase esistente
  }

  isLoggedIn(): boolean {
    return this.pb.authStore.isValid;
  }
  
  getID(): string {
    return this.pb.authStore.model?.['id'];
  }

  constructor() { 
    this.pb = new PocketBase('http://127.0.0.1:8090'); // Inizializzare pb nel costruttore
  } 
}
