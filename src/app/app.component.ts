import { Component } from '@angular/core';
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

  ngOnInit() {
    this.getUsers();
  }

}
