import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TransactionComponent } from './components/transaction/transaction.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { EditTransactionComponent } from './components/edit-transaction/edit-transaction.component';

@NgModule({
    declarations: [
        AppComponent,
        TransactionComponent,
        TransactionsComponent,
        EditTransactionComponent,

    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        
    ]
})
export class AppModule { }
