export default class Account {
    constructor(id, organization, number,status, date, amount,text,files) {
        this.id = id;
        this.organization=organization;
        this.number = number;
        this.status=status;
        this.date = date;
        this.amount = amount;
        this.text = text;
        this.files = files;
    }
}
