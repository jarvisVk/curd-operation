import { Component, OnInit  } from '@angular/core';
import { AppService } from './app.service';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
users: any;

 constructor(private dataservice: AppService){}

 getUsers(){
    this.dataservice.getUsers().subscribe(res => {
      console.log(res)
      this.users = res.results;
    });
  }

 idtodelete=0;

  //Delete Details
  deleteDetails(user){
    console.log(user);
    confirm()
    this.users = this.users.filter((us) => {
    return us.id !== user.id;
})
    // this.dataservice.deleteDetails(this.idtodelete).subscribe(res => {
    //   console.log(res)
    //   this.getUsers();
    // }); 
    
  };

  ngOnInit() {
    this.getUsers();
  }

}
