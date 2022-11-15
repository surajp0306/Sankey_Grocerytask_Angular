import { Component, OnInit,Input } from '@angular/core';
// import { Lists } from '../Lists';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
// export class ListComponent implements OnInit {
  
//   constructor() { 
//   }

//   ngOnInit(): void {
//   }
  
//   }
export class ListComponent {
  // @Input() URL: string; 
  title = "Grocery app";
  list:any[]=[];
  // item!: string;
  addTask(item:string, quantity:string, url:string)
  

  {
    
    this.list.push({id:this.list.length,name:item})
    this.list.push({id:this.list.length,name:quantity})
    this.list.push({id:this.list.length,URL:url})
    console.warn(this.list);
  }
  removeTask(id:number)
  {
    // console.warn(id);
    this.list=this.list.filter(item=>item.id!==id);
   }


}

 

