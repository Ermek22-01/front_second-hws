const som = document.querySelector("#som")
const usd = document.querySelector("#usd")
const euro = document.querySelector("#euro")

const convert = (elem, target, target2) => {
    elem.addEventListener("input", () => {
        const request = new XMLHttpRequest()
        request.open("GET", "data.json")
        request.setRequestHeader("Content-Type", "application/json")
        request.send()
        request.addEventListener("load", () => {
            const data = JSON.parse (request.response)
            if (elem === som) {
                target.value = (elem.value / data.usd).toFixed(2)
                target2.value = (elem.value / data.euro).toFixed(2)
            }else if (elem === usd) {
                target.value = (elem.value * data.usd).toFixed(2)
                target2.value = (target.value / data.euro).toFixed(2)
            }else if (elem === euro) {
                target.value = (elem.value * data.euro).toFixed(2)
                target2.value = (target.value / data.usd).toFixed(2)
            }




            elem.value === "" && (target.value = "")
            elem.value === "" && (target2.value = "")

        })
    })
}

convert(som, usd, euro)
convert(usd, som, euro)
convert(euro, som, usd)
