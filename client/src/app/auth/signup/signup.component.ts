import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, NgForm } from "@angular/forms";
import { AuthService } from "../auth.service";

@Component({
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"]
})
export class SignupComponent {

  constructor(public authService: AuthService) {}

  // signupForm: FormGroup;

  // ngOnInit() {
  //   this.signupForm = new FormGroup({
  //     'email': new FormControl(null),
  //     'password': new FormControl(null)
  //   });
  // }

  onSignup(form:NgForm) {
    if (form.invalid) {
      return;
    }
    this.authService.createUser(form.value.email, form.value.password);
  }
}
