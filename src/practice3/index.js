export const getPoetry = () => {
    const promise = new Promise(function(resolve, reject) {
        const handler = function () {
            if (this.readyState !== 4) {
                return;
            }
            if (this.status === 200) {
                console.log(this.status);
                console.log(this.responseText);
                resolve(this.response);
            } else {
                reject(new Error(this.statusText));
            }
        }

        const client = new XMLHttpRequest();
        client.open("GET", "https://v1.jinrishici.com/all.json", true);
        client.onreadystatechange = handler;
        client.responseType = "json";
        client.setRequestHeader("Accept", "application/json");
        client.send();
    });

    promise.then(function (value) {
        console.log(value);
        return "1";
        // success
    }, function (error) {
        console.log(error)
        // failure
        return "2";
    });
}


