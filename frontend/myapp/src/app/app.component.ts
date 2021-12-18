import { Component, IterableDiffers } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todo List with Angular';
  list: Array<any>=[];

   addTask(item:string)
   {
     this.list.push({id:this.list.length,name:item, is_Editable: false})
     console.warn(this.list);

   }
   RemoveTask(id:number){
      console.warn(id);
      this.list=this.list.filter(item=>item.id!==id);
   }
data=10;
UpdateTask(){
  //console.warn(this.list);
     // this.list=this.list.update(data);
      this.data=Math.floor(Math.random()*10);
}
UpdateTask1(item : any){
  console.log(item);
  item.is_Editable =true; 
}

}

