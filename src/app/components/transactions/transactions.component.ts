import { Component } from '@angular/core';
import { Transaction } from 'src/Data/transaction';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent {
  public transactions: Transaction[] = [
    new Transaction(0, 25, new Date, 'Walgreens', ''),
    new Transaction(1, 40, new Date, 'Hennepin Electric', 'Utilities')

  ]

constructor() { }

ngOnInit(): void {

  }

  deleteTransactionById(id: number): void {
    console.log('deleteMemoById ' + id)
    const index = this.transactions.findIndex(transaction => transaction.id === id)
    this.transactions.splice(index, 1)
  }

  addTransaction(transaction: Transaction): void {
    this.transactions.push(transaction)
  }
}
