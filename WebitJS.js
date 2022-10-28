export default function renderApp(layout){
    if( Object.keys(layout.arg[0]).length==0){
        return null;
    }else{
        if(layout.header!=undefined){
            renderHeaderSection(layout.header);
        }
        if(layout.main!=undefined){
            renderMainSection(layout.main);
        }
        if(layout.footer!=undefined){
            renderFooterSection(layout.header);
        }           
    }
}

function renderHeaderSection(headerSection){
    document.body.appendChild(headerSection.element);
}

function renderMainSection(mainSection){
    console.log(mainSection);
}

function renderFooterSection(footerSection){
    console.log(footerSection);
}