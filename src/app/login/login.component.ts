import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { FormGroup, FormBuilder } from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  checkoutForm: FormGroup;

  data = this.dataService.getUser("");

  constructor(private dataService: DataService, private formBuilder: FormBuilder) {
    this.checkoutForm = this.formBuilder.group({
      userName: '',
      password: ''
    });
  }

  onSubmit() {
    console.log("OnSUUUBMIT");
    const userName = this.checkoutForm.get('userName')?.value;
    console.log("FORM USERNAME: " +  userName);
    //quui parte la get di questo component
    this.dataService.getUser(userName).subscribe(
      (userData) => {
        console.log('Dati utente:', userData);
        console.log('userName: ', <string>userData.name, 'password: ', userData.password)
      },
      (error) => {
        console.error('Errore durante la richiesta:', error);
      }
    );

    const password = this.checkoutForm.get('password')?.value;
    console.log("FORM PASSWORD: " +  password);

    // this.dataService.getUser(password).subscribe(
    //   (userData) => {
    //     console.log('Dati utente:', userData);
    //   },
    //   (error) => {
    //     console.error('Errore durante la richiesta:', error);
    //   }
    // );

  }

  //   const myLoginObservable = new Observable(observer => {
  //     observer.next(userName);
  //     observer.next(password);
  //     observer.complete();
  //   });
  //   return myLoginObservable;
  //  };
  
  ngOnInit(): void {
    console.log("loginOnInit");
  }
      // Qui puoi gestire i dati ricevuti
}  
