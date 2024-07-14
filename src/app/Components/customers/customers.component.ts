import { Component, OnInit } from '@angular/core';
import { Customers } from 'src/app/Models/customers';
import { Transactions } from 'src/app/Models/transactions';
import { CustomersService } from 'src/app/Services/customers.service';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  tableCustomers: Customers | any;
  tableTransactions: Transactions | any;
  searchItem: string = '';
  chart: any = [];

  constructor(
    private _customersService: CustomersService
  ) { }

  ngOnInit(): void {
    this.getCustomers();
    this.getTransactions();
    this.getAmount()
  }

  getCustomers() {
    this._customersService.onGetCustomers().subscribe({
      next: (res) => {
        console.log(res);
        this.tableCustomers = res;
      }, error: (err) => {

      }, complete: () => {
      }
    })
  }
  getTransactions() {
    this._customersService.onGetTransactions().subscribe({
      next: (res) => {
        console.log(res);
        this.tableTransactions = res;
      }, error: (err) => {

      }, complete: () => {
      }
    })
  }

  getAmount() {
    this._customersService.onGetTransactions().subscribe({
      next: (res) => {
        console.log(res);
        this.tableTransactions = res;
      }, error: (err) => {
        console.log(err);

      }, complete: () => {
        this.chart = new Chart('canvas', {
          type: 'doughnut',
          data: {
            labels: [
              'amount',
            ],
            datasets: [{
              label: 'My First Dataset',
              data: [this.tableTransactions?.amount],
              backgroundColor: [
                'rgb(14,56,47)',
                'rgb(239,155,40)',
                'rgb(100,65,23)'
              ],
              hoverOffset: 4
            }]
          }
        })
      }
    })
  }
}
