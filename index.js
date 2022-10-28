import { AppTitle, Header, Layout } from "./core.js";
import { BoxDecoration, Font, FontWeight, Margin, Symmetric, TextAlign, TextDecoration, TextTransform } from "./style.js";

export let HomeScreen = new Layout({
    header: new Header({
        title: new AppTitle({
            text: "My App",
            font: new Font({
                family: "Arial",
                size: 5,
                weight: FontWeight.bold
            }),
            textDecoration: new TextDecoration({
                color: "white",
                transform: TextTransform.uppercase,
                align: TextAlign.center,
            }),
            boxDecoration: new BoxDecoration({
                margin: new Margin({
                    symmetric: new Symmetric({
                        horizontalValue:2,
                        verticalValue:20
                    })
                })
            })
        })
    })
})

