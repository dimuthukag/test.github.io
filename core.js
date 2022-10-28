import { applyFont, applyTextDecoration, applyBoxDecoration } from "./style.js";

export class Layout {
    constructor({ header, main, footer }) {
        this.header = header;
        this.main = main;
        this.footer = footer;
        this.arg = arguments;
    }
}

export class Header {
    constructor({ leading, title, trailing }) {
        this.leading = leading;
        this.title = title;
        this.trailing = trailing;
        this.arg = arguments;

        this.element = document.createElement('header');
        this.element.setAttribute('style', 'width:100vw;height:10vh;background-color:#4120A9;');
        console.log(this.title.element);
        this.element.appendChild(this.title.element);
        this.width = 100;
        this.height = 50;
        this.bgColor = 'blue';
    }
}

export class AppTitle {
    constructor({ text, font, textDecoration, boxDecoration }) {
        //Required param
        if (text == undefined) {
            console.log("Error: No text data.");
        } else if (text != undefined) {
            this.text = text;
            this.element = document.createElement("h1");
            this.element.innerHTML = this.text;
        }

        if (font != undefined) {
            this.font = font;
            this.element = applyFont(this.element, this.font);
        }
        if (textDecoration != undefined){
            this.textDecoration = textDecoration;
            this.element = applyTextDecoration(this.element, this.textDecoration);
        }
        if (boxDecoration != undefined){
            this.boxDecoration = boxDecoration;
            this.element = applyBoxDecoration(this.element, this.boxDecoration);
        }
    }
}