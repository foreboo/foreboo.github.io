{ 'use strict'
    const getParam = () => {
        let paramObject = new Object();
        const paramString = window.location.search.replace("?", "");
        let param = paramString.split('&');
        for(let i = 0; i < param.length; i++) {
            const element = param[i].split('=');
            paramObject[decodeURIComponent(element[0])] = decodeURIComponent(element[1]);
        }
        return paramObject;
    };
    const loadPage = () => {
        console.log(getParam().page);
        const url = window.location.host + (getParam().page === void(0) ? "/HTML/topPage.html" : getParam().page);
        console.log(url);
        fetch(location.protocol + "//" + url)
        .then(response => {
            return response.text();
        })
        .then(data => {
            document.querySelector("#mainContentsArea").innerHTML = data;
        })
        .catch(error => {
            console.log("error");
        });
        //return HTMLdata;
    };
    loadPage();
}