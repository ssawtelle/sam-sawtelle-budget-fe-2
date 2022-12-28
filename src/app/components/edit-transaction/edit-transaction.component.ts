import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TransferState } from '@angular/platform-browser';
import { Transaction } from 'src/Data/transaction';

@Component({
  selector: 'app-edit-transaction',
  templateUrl: './edit-transaction.component.html',
  styleUrls: ['./edit-transaction.component.css']
})
export class EditTransactionComponent implements OnInit {
  public transaction: Transaction = new Transaction(0, 0, new Date, '', '')
  @Output() apply: EventEmitter<Transaction> = new EventEmitter

constructor() { }

ngOnInit(): void {
  
}

updateId(id: number): void {
  this.transaction.id = id
}
updateCharge(charge: number): void {
  this.transaction.charge = charge
}
updateDestination(destination: string): void {
  this.transaction.destination = destination
}
updateDate(date: Date): void {
  this.transaction.date = date
}
updateBudget(budget: string): void {
  this.transaction.budget = budget
}

onSubmit(): void {
  console.log('Clicked Submit')
  this.apply.emit(this.transaction)
}

}
