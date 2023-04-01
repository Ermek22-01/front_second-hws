// const som = document.querySelector("#som")
// const usd = document.querySelector("#usd")
// const euro = document.querySelector("#euro")
//
//
// const convert = (elem, target, target2) => {
//     elem.addEventListener("input", () => {
//         fetch('data.json')
//             .then((response => response.json())
//             .then(data => {
//             if (elem === som) {
//                 target.value = (elem.value / data.usd).toFixed(2)
//                 target2.value = (elem.value / data.euro).toFixed(2)
//             } else if (elem === usd) {
//                 target.value = (elem.value * data.usd).toFixed(2)
//                 target2.value = (target.value / data.euro).toFixed(2)
//             } else if (elem === euro) {
//                 target.value = (elem.value * data.euro).toFixed(2)
//                 target2.value = (target.value / data.usd).toFixed(2)
//             }
//             elem.value === "" && (target.value = "")
//             elem.value === "" && (target2.value = "")
//         })
//     )})
// }
//
// convert(som, usd, euro)
// convert(usd, som, euro)
// convert(euro, som, usd)

const som = document.querySelector("#som");
const usd = document.querySelector("#usd");
const eur = document.getElementById("euro");

const convert = (elem, target, target2) => {
    elem.addEventListener("input", () => {
        fetch("data.json")
            .then(response => response.json())
            .then(data => {
                if (elem === som) {
                    target.value = (elem.value / data.usd).toFixed(2);
                    target2.value = (elem.value / data.eur).toFixed(2);
                } else if (elem === usd) {
                    target.value = (elem.value * data.usd).toFixed(2);
                    target2.value = (elem.value * data.usd / data.eur).toFixed(2);
                } else if (elem === eur) {
                    target.value = (elem.value * data.eur).toFixed(2);
                    target2.value = (elem.value * data.eur / data.usd).toFixed(2);
                }
                elem.value === "" && (target.value = "");
                elem.value === "" && (target2.value = "");
            })
            .catch(error => console.log(error));
    });
};

convert(som, usd, eur);
convert(usd, som, eur);
convert(eur, som , usd);