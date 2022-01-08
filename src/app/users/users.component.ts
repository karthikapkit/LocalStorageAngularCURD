import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  Validators,
  FormControl,
  FormGroup,
} from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  registrationForm = new FormGroup({
    Employeeid: new FormControl(''),
    Employeename: new FormControl('null', [
      Validators.required,
      Validators.pattern("^[a-zA-Z -']+"),
    ]),
    Designation: new FormControl(''),
    Salary: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^[1-9]\d*(\.\d+)?$/),
    ]),
    Email: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i),
    ]),
    Mobile: new FormControl(null, [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(10),
      Validators.pattern(/^[6-9][0-9]{0,9}$/),
    ]),
    Gender: new FormControl('', [Validators.required]),
    Qualification: new FormControl(''),
  });

  get Employeeid() {
    return this.registrationForm.get('Employeeid');
  }
  get Employeename() {
    return this.registrationForm.get('Employeename');
  }

  get Designation() {
    return this.registrationForm.get('Designation');
  }

  get Salary() {
    return this.registrationForm.get('Salary');
  }
  get Email() {
    return this.registrationForm.get('Email');
  }
  get Mobile() {
    return this.registrationForm.get('Mobile');
  }
  get Gender() {
    return this.registrationForm.get('Gender');
  }
  get Qualification() {
    return this.registrationForm.get('Qualification');
  }
  //,english:'',hindi:'',telugu:',

  lstUsers: any = [];
  newLstUser: any = [];

  user_info: any = {
    Employeeid: '',
    Employeename: '',
    Designation: '',
    Salary: '',
    Email: '',
    Mobile: '',
    Gender: '',
    Qualification: '',
  };

  constructor() {}

  ngOnInit() {
    this.newLstUser = JSON.parse(localStorage.getItem('$key') || '');
  }

  doAddUser() {
    // console.log('user_info', this.user_info);
    if (this.user_info) {
      this.newLstUser.push(this.user_info);
      localStorage.setItem('$key', JSON.stringify(this.newLstUser));
      this.user_info = {};
      window.location.reload();
      console.log(this.user_info);
    }
  }

  doDelate(index: any) {
    if (index > -1) {
      this.newLstUser.splice(index, 1);
      localStorage.setItem('$key', JSON.stringify(this.lstUsers));
    }
  }

  doDelateAll() {
    localStorage.clear();
    window.location.reload();
  }

  isShown: boolean = false; // hidden by default
  isHidedn: boolean = true; // show by default
  edit() {
    this.isShown = !this.isShown;
    this.isHidedn = !this.isHidedn;
  }

  userUp: any = [];

  doUpdate(index: any) {
    this.userUp.splice(0);
    if (index > -1) {
      if (this.newLstUser[index]) {
        this.userUp.push(this.newLstUser[index]);
        localStorage.setItem('$key', JSON.stringify(this.userUp));

        console.log(this.newLstUser[index]);
        this.user_info = {
          Employeeid: this.userUp[0].Employeeid,
          Employeename: this.userUp[0].Employeename,
          Designation: this.userUp[0].Designation,
          Salary: this.userUp[0].Salary,
          Email: this.userUp[0].Email,
          Mobile: this.userUp[0].Mobile,
          Gender: this.userUp[0].Gender,
          Qualification: this.userUp[0].Qualification,
        };
        // this.newLstUser.splice(index,1);
        // localStorage.setItem('$key',JSON.stringify(this.lstUsers));
        console.log(this.userUp[0].Employeeid);
      }
    }
  }

  doReplace(index: any) {
    this.newLstUser.splice(index, 1);
    localStorage.setItem('$key', JSON.stringify(this.lstUsers));
    if (this.user_info) {
      this.newLstUser.push(this.user_info);
      localStorage.setItem('$key', JSON.stringify(this.newLstUser));
      this.user_info = {};
      window.location.reload();
      console.log(this.user_info);
    }
  }

  cancel() {
    window.location.reload();
  }
}
