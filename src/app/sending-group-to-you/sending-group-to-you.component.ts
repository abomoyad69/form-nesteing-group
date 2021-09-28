import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sending-group-to-you',
  templateUrl: './sending-group-to-you.component.html',
  styleUrls: ['./sending-group-to-you.component.css']
})
export class SendingGroupToYouComponent implements OnInit {
  @Input() copyGroup: FormGroup;
  constructor() { }

  ngOnInit(): void {
    console.log(this.copyGroup.value)
  }

  get groupControls(): FormArray{
    return this.copyGroup.get('VALUES') as FormArray;
  }

}
