export default class Mail {
    constructor(from, to, importance, subject, text) {
        this.from = from;
        this.to = to;
        this.importance=importance;
        this.subject = subject;
        this.text = text;
    }
}
