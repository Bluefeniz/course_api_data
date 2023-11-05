import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { FormGroup, FormBuilder } from '@angular/forms';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  checkoutForm: FormGroup | any;

  constructor(private dataService: DataService, private formBuilder: FormBuilder) {
    this.checkoutForm = this.formBuilder.group({
      userName: '',
      password: ''
    });
  }

  

  

  onSubmit() {
    const userName = this.checkoutForm.get('userName').value;
    const password = this.checkoutForm.get('password').value;
    console.log("UserName as: " + userName + " Password: " + password); // Stampa il valore inserito dall'utente
  }
  
  ngOnInit(): void {
    LoginComponent.constructor(this.formBuilder)
    console.log("loginOnInit")
    this.dataService.getUser()
    this.checkoutForm = this.formBuilder.group({
      userName: '',
      password: ''
    });
  }

 

}
