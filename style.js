export const FontStyle = {
    normal: "normal",
    italic: "italic",
    oblique: "oblique"
}

export const FontWeight = {
    lighter: "lighter",
    normal: "normal",
    bold: "bold",
    bolder: "bolder"
}

export const FontVariant = {
    normal: "normal",
    smallCaps: "small-caps"
}

export class Font {
    constructor({ family, size, style, weight, variant }) {
        this.family = family;
        this.size = size;
        this.style = style;
        this.weight = weight;
        this.variant = variant;
        this.arg = arguments;
    }
}

export function applyFont(element, fontProp) {
    if (Object.keys(fontProp.arg[0]).length == 0) {
        console.log("No prop. Error:") // change this later
    } else if (Object.keys(fontProp.arg[0]).length > 0) {
        let style = element.getAttribute("style");
        style = (style) ? style : "";
        for (const prop in fontProp.arg[0]) {
            if (prop == 'family') {
                style = style + "font-" + prop + ":\"" + fontProp.arg[0][prop] + "\";";
                continue;
            }
            if (prop == 'size') {
                style = style + "font-" + prop + ":" + fontProp.arg[0][prop] + "vh ;";
                continue;
            }
            if (prop == 'color') {
                style = style + prop + ":" + fontProp.arg[0][prop] + ";";
                continue;
            }
            style = style + "font-" + prop + ":" + fontProp.arg[0][prop] + ";";
        }
        element.setAttribute("style", style);
    }
    return element;
}

export const TextAlign = {
    center: "center",
    left: "left",
    right: "right"
}

export const VerticalAlign = {
    baseline: "baseline",
    textTop: "text-top",
    textBottom: "text-bottom",
    sub: "sub",
    super: "super"
}

export const TextTransform = {
    uppercase: "uppercase",
    lowercase: "lowercase",
    capitalize: "capitalize"
}

export class TextDecoration {
    constructor({ color, align, transform }) {
        this.color = color;
        this.align = align;
        this.transform = transform;
        this.arg = arguments;
    }
}

export function applyTextDecoration(element, textDecoration) {
    if (Object.keys(textDecoration.arg[0]).length > 0) {
        let style = element.getAttribute("style");
        style = (style) ? style : "";
        for (const prop in textDecoration.arg[0]) {
            if (prop == 'color') {
                style = style + prop + ":" + textDecoration.arg[0][prop] + ";";
                continue;
            }
            style = style + "text-" + prop + ":" + textDecoration.arg[0][prop] + ";";
        }
        element.setAttribute("style", style);
    }
    return element;
}

export class Symmetric{
    constructor({horizontalValue, verticalValue}){
        if(horizontalValue!=undefined){
            this.horizontalValue = horizontalValue;
        }
        if(verticalValue!=undefined){
            this.verticalValue = verticalValue;
        }
    }
}

export class Margin {
    constructor({ top, right, bottom, left, symmetric}) {
        if(top!=undefined){
            this.top = top;
        }else if(top==undefined){
            this.top = 0;
        }

        if(right!=undefined){
            this.right = right;
        }else if(right==undefined){
            this.right = 0;
        }

        if(bottom!=undefined){
            this.bottom = bottom;
        }else if(bottom==undefined){
            this.bottom = 0;
        }

        if(left!=undefined){
            this.left = left;
        }else if(left==undefined){
            this.left = 0;
        }

        if(symmetric!=undefined){
            this.symmetric = symmetric;
        }else if(symmetric==undefined){
            this.symmetric = null;
        }
    }
}

export class BoxDecoration {
    constructor({ color, margin, padding, border }) {
        this.color = color;
        this.arg = arguments;
    }
}

export function applyBoxDecoration(element, boxDecoration) {
    if (Object.keys(boxDecoration.arg[0]).length > 0) {
        let style = element.getAttribute("style");
        style = (style) ? style : "";
        for (const prop in boxDecoration.arg[0]) {
            if (prop == 'color') {
                style = style + "background-" + prop + ":" + boxDecoration.arg[0][prop] + ";";
                continue;
            }else if(prop == 'margin'){
                let margin = (boxDecoration.arg[0][prop].symmetric)? boxDecoration.arg[0][prop].symmetric.horizontalValue + "vh " + boxDecoration.arg[0][prop].symmetric.verticalValue + "vw" : boxDecoration.arg[0][prop].top + "vh " + boxDecoration.arg[0][prop].right + "vw " + boxDecoration.arg[0][prop].bottom + "vh " + boxDecoration.arg[0][prop].left + "vw " ;
                
                style = style + prop + ":" + margin + ";";
            }
        }
        element.setAttribute("style", style);
    }
    return element;
}