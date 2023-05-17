import { Component ,Input,OnInit,AfterViewInit,OnDestroy, AfterContentChecked} from '@angular/core';
import { Subject } from 'rxjs';


@Component({
  selector: 'lib-table-com',
  templateUrl: './table-com.component.html',
  styleUrls: ['./table-com.component.css']
  
})


export class TableComComponent implements OnInit,AfterViewInit,OnDestroy{

  dtOptions: DataTables.Settings = {};

  dtTrigger:Subject<any> = new Subject<any>();

  @Input() fileDetails:any
  @Input() fileData:any
  @Input() listData:any
  sortProperty: string = 'id';
  sortOrder = 1;
  alldata:any=[];

 
  constructor(){

  }

  ngOnInit(): void {
    console.log("ngoninit")
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true,
      lengthMenu:[5,10,15]
      
    };
    this.alldata=this.listData
    //this.dtTrigger.subscribe()
    this.dtTrigger.next(null)
    console.log("init called other")
  };
    
  ngAfterViewInit(): void {
    this.dtTrigger.next(null)
    console.log("after view init")
  }
  
  // ngAfterContentChecked(): void {
  //   this.dtTrigger.unsubscribe()
  // }
  ngOnDestroy(): void {

    console.log("fyrh")
    this.dtTrigger.unsubscribe()
    // this.dtTrigger.next(null)
   
  }
  // rerender(): void {
      
      
  //       this.alldata.destroy();
        
  //       this.dtTrigger.next(this.dtOptions);
  //       this.alldata=this.listData
      
  //   }
}
