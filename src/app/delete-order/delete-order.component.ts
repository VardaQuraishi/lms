import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-delete-order',
  templateUrl: './delete-order.component.html',
  styleUrls: ['./delete-order.component.css']
})
export class DeleteOrderComponent implements OnInit {

  orders: any[];

  constructor() {
    this.orders =[]
   }

  ngOnInit(): void {
    axios.get('http://localhost:3000/users/getorders', {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,',
      }
    }).then((res: any)=> {
      if (res.data.success) {
        this.orders = res.data.rec;
      }
      else {
        this.orders = [{
          name: 'No Order Found',
          endDate: 'N/A',
          endTime: 'N/A',
          _id: null
        }]
      }
    })


  }

  handleDelete(event: Event, id: any) {
    event.preventDefault();
    if (!id) {
      alert('Cannot Delete')
    }
    else {

      axios.delete('http://localhost:3000/users/deleteorder/' + String(id))
        .then( res => {
          if (res.data.success) {
            axios.get('http://localhost:3000/users/getorder', {
              headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
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
        })
    }
  }
}
