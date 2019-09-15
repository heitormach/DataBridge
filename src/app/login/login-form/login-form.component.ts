import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from 'src/app/form-default/base-form/base-form.component';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginService } from 'src/app/core/services/login.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent extends BaseFormComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private loginServ: LoginService
  ) {
    super();
  }

  ngOnInit() {
    this.formulario = this.fb.group({
      usuario: [null, Validators.required],
      senha: [null, Validators.required]
    });
  }

  onSubmit() {

  }

}
