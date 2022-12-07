export class ExpenseEntry {
    id: number = 0;
    item: string = "";
    amount: number = 0;
    category: string = "";
    location: string = "";
    spendOn: Date = new Date();
    createdOn: Date = new Date();
}
