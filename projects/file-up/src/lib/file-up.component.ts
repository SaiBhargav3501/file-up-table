
import { Component,Input,Output,EventEmitter } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';

@Component({
  selector: 'lib-file-up',
  template: `
  <div>
    <label >{{labelname}}</label>
    <input type="file" (change)="onFileSelected($event)"  [accept]="accept" />
   </div>
   <!-- <input type="search" [(ngModel)]="filtertext" placeholder="search for file"/> -->
    <lib-table-com [fileDetails]="opFile" [fileData]="totaldata" [listData]="filteredStudents"></lib-table-com>
    
  `,
  styles: [
  ]
})
export class FileUpComponent {
  encoding:any;
  _filtertext:string=''
  @Input() schema:any
  @Input() accept:any
  @Input() labelname:any
  @Output() fileUploaded = new EventEmitter<File>();
  base64code:any
  opFile?:File|any;
  totaldata:any
  hexadecimalContent?: string;
  alldata:any=[]
  id:any=this.alldata.length
  filteredStudents:any[]=this.alldata

  
  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    this.fileUploaded.emit(file);
    this.opFile=file
    console.log(this.schema)
    this.convertthefile()
  }

  onEncodingSelected(event:any){
    this.encoding = event.target.value;
  }

  


  convertTobase64(file:File){
    const observable=new Observable((subscriber:Subscriber<any>)=>{
      this.readFile(file,subscriber)
    })
    observable.subscribe((d) => {
      console.log(d)
      this.base64code = d
      this.totaldata=d
    })
  }

  readFile(file: File, subscriber: Subscriber<any>) {
    const filereader = new FileReader();
    filereader.readAsDataURL(file);
    filereader.onload = () => {
      subscriber.next(filereader.result);
      subscriber.complete();
    };
    filereader.onerror = (error) => {
      subscriber.error(error);
      subscriber.complete();
    };
  }


  convertFileToHexadecimal() {
    const reader = new FileReader();
    reader.onload = () => {
      const fileContent:any = reader.result?.toString();
      // this.hexadecimalContent = this.toHexadecimal(fileContent);
      const byteNumbers = new Array(fileContent.length);
      // const byteNumbers = new Array(byteCharacters.length);
  for (let i = 0; i < fileContent.length; i++) {
    byteNumbers[i] = fileContent.charCodeAt(i);
  }
  const byteArray = new Uint8Array(byteNumbers);
  
  // Use the byteArray as needed
  console.log(byteArray);
  this.totaldata=byteArray
      
    };

    

     reader.readAsBinaryString(this.opFile);
  }

  // toHexadecimal(content: String): String|any {
  //   let hexadecimal = '';
  //   for (let i = 0; i < content.length; i++) {
  //     hexadecimal += content.charCodeAt(i).toString(16);
  //   }
  //   this.totaldata=hexadecimal
  //   console.log( hexadecimal);
  // }
  convertthefile(){
    if (this.schema==="base64"){
      this.convertTobase64(this.opFile)
    }else{
      this.convertFileToHexadecimal()
    }
    this.pushdata()
  }

  pushdata(){

    setTimeout(() => {
      this.alldata.push({"file":this.opFile,"content":this.totaldata,"id":this.id+1})
    console.log(this.alldata)
    }, 2500);
    this.id=this.alldata.length
    
  }

   // filotering the text 

   get filtertext(){
    return this._filtertext

  }
  set filtertext(value:string){
    this._filtertext=value
    this.filteredStudents=this.filterFileByName(value)
  }
  filterFileByName(filterterm:string){
    if (this.alldata.length===0 || this.filtertext===""){
      return this.alldata
     }else{
      const users=[]
      for  (const user of this.alldata){
        console.log(user.file.name)
        if ((user.file.name).toLowerCase().includes(filterterm)){
  
          users.push(user)

  
        }
  
      }
      return users
     }

  }

}
