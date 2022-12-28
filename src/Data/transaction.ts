import { DatePipe } from "@angular/common"

export class Transaction {
    public id: number = 0
    public charge: number = +10
    public date: Date = new Date
    public destination: string = 'destination'
    public budget: null | string = 'budget'
    
    constructor(id: number, charge: number, date: Date, destination: string, budget: null | string) {
        this.id = id
        this.charge = charge
        this.date = new Date
        this.destination = destination
        this.budget = budget
    }
}