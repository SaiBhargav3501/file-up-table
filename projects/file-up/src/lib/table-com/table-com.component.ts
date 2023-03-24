import { Component ,Input,Output,OnInit,Directive,ViewChild,AfterViewInit,OnDestroy} from '@angular/core';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'lib-table-com',
  templateUrl: './table-com.component.html',
  styleUrls: ['./table-com.component.css']
  
})


export class TableComComponent implements OnInit,OnDestroy,AfterViewInit{

  //@ViewChild(DataTableDirective)
  dtOptions: DataTables.Settings = {};
   $:any
   jQuery: any;
//dtTrigger:any
   
   dtTrigger:Subject<any> = new Subject<any>();
  // ngAfterViewInit():void{
  //  this.$('eaxmple').DataTable()
  // }

   
   

  @Input() fileDetails:any
  @Input() fileData:any
  @Input() listData:any
  sortProperty: string = 'id';
  sortOrder = 1;
  alldata:any

  _filtertext:string=''
 

  ngOnInit(): void {

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true,
      lengthMenu:[5,10,15]
      
    };
    this.alldata=this.listData
    this.dtTrigger.next(null)
     

   }
    
   

  
  logData(){
    console.log(this.listData.sort())
    console.log(this.fileData)
  }

  get filtertext(){
    return this._filtertext

  }
  set filtertext(value:string){
    this._filtertext=value
    //this.filteredStudents=this.filterstudentBygender(value)
  }


//   sortBy(property: string) {
//     this.sortOrder = property === this.sortProperty ? (this.sortOrder * -1) : 1;
//     this.sortProperty = property;
//     this.listData = [...this.listData.sort((a: any, b: any) => {
//         // sort comparison function
//         let result = 0;
//         if (a[property] < b[property]) {
//             result = -1;
//         }
//         if (a[property] > b[property]) {
//             result = 1;
//         }
//         return result * this.sortOrder;
//     })];
// }

// sortIcon(property: string) {
//   if (property === this.sortProperty) {
//       return this.sortOrder === 1 ? '☝️' : '👇';
//   }
//   return '';
// }

ngAfterViewInit(): void {
  this.dtTrigger.next(null);
  console.log("after view init")
}

// rerender(): void {
    
     
//       this.alldata.destroy();
      
//       this.dtTrigger.next(this.dtOptions);
//       this.alldata=this.listData
    
//   }


sortBy(field: string) {
  console.log(field)
  this.listData.sort((a:any, b:any) => {
    if (a[field] < b[field]) {
      return -1;
    } else if (a[field] > b[field]) {
      return 1;
    } else {
      return 0;
    }
  });
  console.log(this.listData)
}

ngOnDestroy(): void {
  console.log("fyrh")
}



  
}
