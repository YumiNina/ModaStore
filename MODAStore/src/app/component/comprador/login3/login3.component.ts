import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../../services/auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UserInterface } from 'src/app/models/user-interface';
import { isError } from 'util';
import { loginCompradorInterface } from 'src/app/models/logincomprador-interface';

@Component({
  selector: 'app-login',
  templateUrl: './login3.component.html',
  styleUrls: ['./login3.component.css']
})
export class Login3Component implements OnInit {


  constructor(public authService: AuthService, public router: Router) { }
public Comprador: loginCompradorInterface = {
  ci: '',
  password: ''
};


  ngOnInit() {
  }
  public isError= false;

OnLogin3( form: NgForm)

{ if (form.valid){
return this.authService.login3comprador(this.Comprador.ci,this.Comprador.password)
  .subscribe (data => { 
    this.authService.setComprador(data.Comprador)
    const token = data.id;
   this.authService.setToken(token);
   this.router.navigate(['/comprador'])
},
    error => {
      return this.onIsError();
    }
  );
}
else {
 return this.onIsError();
}
}
onIsError():void {
  this.isError = true;
  setTimeout(() => {
    this.isError = false;
  }, 4000);
}


}