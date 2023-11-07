import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { FormGroup, FormBuilder, FormControl, Form, Validators } from '@angular/forms';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit{

  
  loginForm!: FormGroup;
  errorMessage: any;
  isLoginFailed: any;

  constructor() {}

  
  ngOnInit(): void {
    console.log("loginOnInit");
    this.loginForm = new FormGroup({
      username: new FormControl('flaviofrancardi@libero.it', Validators.required), //, Validators.email]),
      password: new FormControl('ciucci', Validators.required)
    })
  }
      // Qui puoi gestire i dati ricevuti

  
  onSubmit() {
    //const userNameValue = this.formGroup.get('username')?.value;
    console.log(this.loginForm)
  }
}  
