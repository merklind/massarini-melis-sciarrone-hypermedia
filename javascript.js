console.log("Ciao Teo")

function getData () {
    return new Promise((resolve, reject) => {
        resolve({
            nome: "matteo"
        });
    });
}

getData().then(val => console.log(val)).catch(err => console.error(err));
