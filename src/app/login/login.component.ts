import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable, interval } from 'rxjs';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit{

  loginForm!: FormGroup;
  errorMessage: any;
  isLoginFailed: any;

  constructor(private dataService: DataService) {}

  
  ngOnInit(): void {
    console.log("loginOnInit");
    this.loginForm = new FormGroup({ //crea controllo sul form username
      username: new FormControl('flaviofrancardi@libero.it', Validators.required), //, Validators.email]), //assegna i valori iniziali
      password: new FormControl('', Validators.required)                        //oppure null
    })
  }
      // Qui puoi gestire i dati ricevuti

  
  onSubmit() {
    var userNameValue = this.loginForm.get('username')?.value; 
    var password = this.loginForm.get('password')?.value;
    console.log(userNameValue); // stampa il valore del campo username
    //console.log(this.loginForm); // stampa tutto il form group
    this.dataService.postAuthentication(userNameValue, password).subscribe(anyValue => {
      console.log(anyValue);
    });
    
    
  }
}  
