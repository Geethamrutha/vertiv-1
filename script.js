function loadiFrame(url) {
    let x = document.createElement("IFRAME");
    x.setAttribute("src", url);
    x.setAttribute("style", "position:fixed; top:0; left:0; bottom:0; right:0; width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden; z-index:99;");
    document.body.appendChild(x);
}


async function grabData() {
    let data = await fetch("properties.json")
        .then(response => {
            return response.json()
        })
        .then(data => {
            data.innerText = JSON.stringify(data, null, 2);
            console.log(JSON.parse(data.innerText));
            let jsonData = JSON.parse(data.innerText);
            let url = jsonData.url
            let link = document.getElementById('receiver')
            link.src = url
            return jsonData;
        })
}
