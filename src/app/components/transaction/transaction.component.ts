import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Transaction } from 'src/Data/transaction';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  @Input() transaction: Transaction | null = null
  @Output() remove: EventEmitter<undefined> = new EventEmitter
  
  constructor() { 

  }

  ngOnInit(): void {

  }
  
  onDelete(): void {
    if (this.transaction === null) {
      console.log('no transaction')
    } else {
      
      this.remove.emit()
    }
  }
}
