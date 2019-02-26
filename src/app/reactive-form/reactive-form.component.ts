import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray} from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

genders = ['male', 'female'];
signupForm: FormGroup;
forbiddenUserNames = ["Daniel", "Bob"]

  constructor() { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl('UserName', [Validators.required, this.forbiddenNames.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails)
      }),
      'gender': new FormControl ('male'),
      'hobbies': new FormArray([])
    });
    // this.signupForm.valueChanges.subscribe(
    //   (value) => console.log(value)
    // )
    this.signupForm.statusChanges.subscribe(
      (status) => console.log(status)
    );
    // this.signupForm.setValue({
    //   'userData': {
    //     'username': "Danil",
    //     'email': "some@dsd.com"
    //   },
    //   'gender': 'male',
    //   'hobbies': []
    // });
    this.signupForm.patchValue({
      'userData': {
        
        'email': "not@dsd.com"
      }
    });
  }

  onSubmit(){
    console.log(this.signupForm)
  }

  onAddHobby(){
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
}

  forbiddenNames(control: FormControl): {[s: string]: boolean} {
    if (this.forbiddenUserNames.indexOf(control.value) !== -1){
      return {"NameIsForbidden": true};
    }
    return null; 
  }


    forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
      const promise = new Promise<any>((resolve,reject) => {
        setTimeout(() => {
          if (control.value === "test@test.com") {
            resolve({'emailIsForbidden': true})
          } else {
            resolve(null);
          }
        }, 1500)
      })
      return promise; 
    }

} 
