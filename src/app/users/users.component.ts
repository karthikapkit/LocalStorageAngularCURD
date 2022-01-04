import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';



@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {



  registrationForm = new FormGroup({
    
    Employeeid : new FormControl(''),
    Employeename : new FormControl('null',[Validators.required,Validators.pattern('^[a-zA-Z \-\']+')]),
    Designation: new FormControl(''),
    Salary : new FormControl(null,[Validators.required,Validators.pattern(/^[1-9]\d*(\.\d+)?$/)]),
    Email : new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i)]),
    Mobile : new FormControl(null,[Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern(/^[6-9][0-9]{0,9}$/)]),
    Gender : new FormControl('',[Validators.required]),
    Qualification: new FormControl(''),  

  });


get Employeeid(){
  return this.registrationForm.get('Employeeid');
}
get Employeename(){
  return this.registrationForm.get('Employeename');
}

get Designation(){
  return this.registrationForm.get('Designation');
}

get Salary(){
  return this.registrationForm.get('Salary');
}
get Email(){
  return this.registrationForm.get('Email');
}
get Mobile(){
  return this.registrationForm.get('Mobile');
}
get Gender(){
  return this.registrationForm.get('Gender');
}
get Qualification(){
  return this.registrationForm.get('Qualification');
}
//,english:'',hindi:'',telugu:',














  lstUsers:any = [];
  newLstUser:any = [];
  newLstUser1:any = [];

  user_info:any = {
    Employeeid:'',Employeename:'',Designation:'',Salary:'',Email:'',Mobile:'',Gender:'',Qualification:'',



  }

  constructor() { }

  ngOnInit(){
    this.newLstUser = JSON.parse(localStorage.getItem('$key') || '') ;
    this.newLstUser1 = JSON.parse(localStorage.getItem('$key') || '') ;

  }


  doAddUser(){
    // console.log('user_info', this.user_info);
    if(this.user_info){
        this.newLstUser.push(this.user_info);
        localStorage.setItem('$key',JSON.stringify(this.newLstUser));
        this.user_info= {};   
        window.location.reload();
        console.log(this.user_info);       
    }
  }

  doDelate(index:any){
    if(index > -1 ){
      this.newLstUser.splice(index,1);
      localStorage.setItem('$key',JSON.stringify(this.lstUsers));

    }
  }

  doDelateAll(){
    localStorage.clear();
    
      window.location.reload();
  
  }
 
  doUpdate(index:any){   
    if(index > -1 ){
     
    
  console.log(index);
      
      // console.log(JSON.parse(localStorage.getItem('$key') || ''));
      // this.registrationForm.controls['Employeeid'].setValue(this.Employeeid);
    
  
    }
  }
 




}
