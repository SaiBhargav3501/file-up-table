import { NgModule } from '@angular/core';
import { FileUpComponent } from './file-up.component';
import { TableComComponent } from './table-com/table-com.component';
import { DataTablesModule } from 'angular-datatables';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http"


@NgModule({
  declarations: [
    FileUpComponent,
    TableComComponent
  ],
  imports: [
    DataTablesModule,
    CommonModule,
    BrowserModule,
    HttpClientModule

  ],
  exports: [
    FileUpComponent
  ]
})
export class FileUpModule { }
