import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import  { MatFormFieldModule } from '@angular/material/form-field'
import  { MatInputModule } from '@angular/material/input'
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SendingGroupToYouComponent } from './sending-group-to-you/sending-group-to-you.component'
import {MatButtonModule} from '@angular/material/button';
import { DndReplicaComponent } from './dnd-replica/dnd-replica.component';

@NgModule({
  declarations: [
    AppComponent,
    SendingGroupToYouComponent,
    DndReplicaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule
  ],
  exports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
