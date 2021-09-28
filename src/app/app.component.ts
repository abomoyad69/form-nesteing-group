import { Component, OnInit } from '@angular/core';
import { AbstractControl, Form, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  originalGroup:FormGroup;
  title = 'form-nesteing-group';

  constructor(private fb: FormBuilder){
    this.initGroup();
  }

  ngOnInit(){

  }

  get VALUES(): FormArray{// questions
    return this.originalGroup.get('VALUES') as FormArray;
  }

  get ANSWERS(): FormGroup{// answers
    return this.VALUES.at(0) as FormGroup;
  }

  initGroup(){
    this.originalGroup = this.fb.group({
      Title: ['ayy lmao', Validators.required],
      NumOfQ: [0, Validators.required],
      VALUES: this.fb.array([
        this.fb.group({
          id:[1, Validators.required],
          name:['q1', Validators.required],
          code:['', [Validators.required, this.codeNameValidator(1)]],
          value: [1, Validators.required],
          answers: [
            this.fb.array([
              this.fb.group({
                desc:['ayy', Validators.required],
                id:['answer'+1, Validators.required],
                value:[1, Validators.required]
              })
            ])
          ]
        })
      ])
    })
  }

  addValue(){

    let length = this.VALUES.length + 1;
    let q = 'name' + length;
    let c = '';
    let tempGroup = this.fb.group({
      id:[length, Validators.required],
      name:[q, Validators.required],
      code:[c, [Validators.required, this.codeNameValidator(length)]],
      value: [length, Validators.required],
      answers: [
        this.fb.array([
          this.fb.group({
            desc:['ayy' + length, Validators.required],
            id:['answer'+ length, Validators.required],
            value:[length, Validators.required]
          })
        ])
      ]
    });
    this.VALUES.push(tempGroup);
  }

  PrintValue(){
    console.log(this.originalGroup.value);
  }

  removeValue(index){
    this.VALUES.removeAt(index);
  }




  codeNameValidator = (id)=>(control: AbstractControl): any => {
    if(!control.value)
    return;

    if(!this.isCodeUnique(control.value,id))
    return {error:'businessNameNotUnique'};

    return null;
  }

  isCodeUnique(value, id){
    console.log(this.VALUES.value);
    if(this.VALUES.length > 1)
      return !this.VALUES.value.filter(item=> item.id != id).map(code=> code.code).includes(value);
    return true;
  }
}
