import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PaginatorModule } from 'primeng/paginator';
import { MultiSelectModule } from 'primeng/multiselect';
import { RadioButtonModule } from 'primeng/radiobutton';
let primengComponent=[
  TableModule,
  PaginatorModule,
  ButtonModule,
  InputTextModule,
  MultiSelectModule,
  RadioButtonModule 
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  
   
  ...primengComponent
    
  ], exports: [
  
  
  ...primengComponent
  ]
})
export class PrimeNgcomponentsModule { }
