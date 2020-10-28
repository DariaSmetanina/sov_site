export default class Notification {
    constructor(id, organization, importance, date, text) {
        this.id = id;
        this.organization=organization;
        this.importance=importance;
        this.date = date;
        this.text = text;
    }
}
