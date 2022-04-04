import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { RegistrationServiceService } from 'src/app/registration-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  formData: any
  constructor(private registrationService: RegistrationServiceService, private router: Router) { }

  submitData(data: any) {
    console.log(data)
    // console.log(this.checkoutForm.value)
    this.registrationService.signup(data).subscribe((data: any) => {
      console.log(data)

    })
    this.router.navigateByUrl('home')


  }

  ngOnInit(): void {
    this.formData = new FormGroup({
      name: new FormControl(""),
      email: new FormControl(""),
      password: new FormControl("")
    })
  }


}
