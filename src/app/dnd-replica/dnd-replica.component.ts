import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dnd-replica',
  templateUrl: './dnd-replica.component.html',
  styleUrls: ['./dnd-replica.component.css']
})
export class DndReplicaComponent implements OnInit {
  @Input() copyForm: FormGroup;
  constructor() { }

  ngOnInit(): void {
    console.log(this.copyForm.value);
  }

  get groupControls(): FormArray{
    console.log('::::',this.copyForm.get('answers').value);
    return this.copyForm.get('answers') as FormArray;
  }

}
