export default class News {
    constructor(id, title, importance, date, mainPart,text,files) {
        this.id = id;
        this.title = title;
        this.importance = importance;
        this.date = date;
        this.mainPart = mainPart;
        this.text = text;
        this.files = files;
    }
}
