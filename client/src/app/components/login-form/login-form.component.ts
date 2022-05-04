import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LoginModel } from '../../types';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  @Input() model: LoginModel = { email: '', password: '' };
  @Output() login = new EventEmitter<LoginModel>();
}
