import { Component, OnInit } from '@angular/core';
import axios from 'axios';
//import { timeStamp }  from 'console';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit {

  orderName: string = '';
  data: FormData;
  date: string;
  time: string;

  constructor() {
    this.data = new FormData();
    this.date = '';
    this.time = '';
   }

  ngOnInit(): void {
  }

  OrderAdd(event: any){
    const order = event.target.orders[0]
    this.data.append('order', order);
    this.orderName = order.name
  }

  handleSubmit(event: Event){
    event.preventDefault()
    this.data.append('date', this.date);
    this.data.append('time', this.time);
    console.log(this.data);

    axios.post('http://localhost:3000/users/upload', this.data, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
      }
    }).then((res: any )=>console.log(res))
  }

}
