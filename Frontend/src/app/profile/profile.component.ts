import { Component,OnInit } from '@angular/core';
import { WitzService } from '../Services/witz.service';
import { AuthService } from '../Services/auth.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']

})
export class ProfileComponent implements OnInit {

  witz={
    jokeText:'',
    rating: '0',
    count:'0',
    idUser:'',
    createdAt: new Date(),
    updatedAt: new Date(),
  }
  userData: any;
  constructor(private _witz: WitzService,private _auth:AuthService) { }

  ngOnInit(): void {
    this.userData = this._auth.getDataFromToken();

}
submit(){

 this.witz.idUser = this.userData.username;

this._witz.create( this.witz ).subscribe({
  next: (res)=>{
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500
    })
  },
  error: (error)=>{
    Swal.fire({
      position: 'top-end',
      icon: 'error',
      title: 'Please try again!!',
      showConfirmButton: false,
      timer: 1500
    })

  }
})

}
}
