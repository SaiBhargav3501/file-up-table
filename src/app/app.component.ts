import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fileup-table';
  inputFile:any
  error?:string
  data:any=[]
 alldata:any
 ipdata:any;

 datafiles:any
  initialfile?:File
  onFileUploaded(file: any) {
    this.initialfile=file
  }

  // onclickbutton(){
  //   if (this.initialfile==null){
  //     this.error="add the file"
  //   }else{
  //     let type
  //   let name
  //   let size
  //   let lastmod
    
  //   type=this.initialfile?.type
  //   name=this.initialfile?.name
  //   size=this.initialfile?.size
  //   lastmod=this.initialfile?.lastModified
  //   let obj={
  //     "name":name,
  //     "type":type,
  //     "size":size,
  //     "lastModified":lastmod

  //   }
    
  //   this.data.push(obj)
  //   this.initialfile=undefined
    
  //   }
    
    
  // }
}
