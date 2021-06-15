import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-confirm-order',
  templateUrl: './confirm-order.component.html',
  styleUrls: ['./confirm-order.component.css']
})
export class ConfirmOrderComponent implements OnInit {
  orders: any[];
  data: FormData;
  orderName: string;
  customerName: string;

  constructor() { 
    this.orders = [];
    this.data = new FormData();
    this.orderName = '';
    this.customerName= '';
  }

  ngOnInit(): void {
    axios.get('http://localhost:3000/users/getorders', {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,',
      }
    }).then((res: any) => {
      if (res.data.success) {
        this.orders = res.data.rec;
      }
      else {
        this.orders = [{
          name: 'No Record Found',
          enddate: 'N/A',
          endtime: 'N/A',
          _id: null
        }]
      }
    })
  }

  orderConfirm(event: any){
    const order = event.target.orders[0]
    this.data.append('order', order);
    this.orderName = order.name
  }

  handleSubmit(event: Event, id: any) {
    event.preventDefault();
    if(!id){
      alert('Cannot Submit')
    }
    else {
      this.data.append('customername', this.customertName);
      this.data.append('order_id', String(id));
      this.data.append('submitted_at', new Date(Date.now()).toDateString());
      this.data.append('ordername', this.orderName);
      axios.post('http://localhost:3000/users/confirmorder', this.data, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,',
        }
      })
        .then(res => console.log(res))
    }
  }

}
