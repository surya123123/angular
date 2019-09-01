import { Component, OnInit ,Input, Output,EventEmitter} from '@angular/core';
import { EmployeeService } from '../employee.service';
/*import { EventEmitter } from 'events';*/



@Component({
  selector: 'app-test',
  templateUrl:'./test.component.html',
             
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  public name="surya";
  public message="learning angular";
  public name1="";
  public displayName="true";
  public color="red";
  public colors=["red","blue","green","yellow"];
  @Input() public parentData;
  @Output() public childEvent=new EventEmitter();
  public siteUrl=window.location.href;
  public myId="testId";
  public successClass="text-success";
  public hasError=false;
  public isSpecial=true;
  public highlightColor="blue";
  public greeting="";
  public greeting1="";
  public messagesClasses={
    "text-success":!this.hasError,
    "text-danger":this.hasError,
    "text-special":this.isSpecial
    
  }
  public titleStyles={
    color:"yellow",
    fontStyle:"italic"
  }
  greet()
  {
   return "hello  "+this.name;
  }
 

  

  onClick(){
    console.log('welcome to suryarao');
    this.greeting="welcome to suryarao";
    
  }
  logMessage(value){
    console.log(value);
  }
  fireEvent(){
    this.childEvent.emit('hey surya rao? how are you');
  }
  public person={
    "firstName":"surya",
    "lastName":"yenneti"
  }
  public date=new Date();
  /*public employees=[
    {"id":1,"name":"rao","age":27},
    {"id":2,"name":"surya","age":28},
    {"id":3,"name":"yenneti","age":29}

  ];*/
  employees;
    

  constructor(private _employeeService: EmployeeService) { }

  ngOnInit() {
    /*this.employees=this._employeeService.getEmployees();*/
    this._employeeService.getEmployees().subscribe(data=>this.employees=data);
  
  }

}
