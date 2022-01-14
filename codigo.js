




function displaySum(){
    let primerNum = Number(document.getElementById('primerNum').innerHTML)
    let segundoNum = Number(document.getElementById('segundoNum').innerHTML)

    let tolal = primerNum + segundoNum;
    document.getElementById("respuesta").innerHTML = `  ${primerNum} + ${segundoNum}, equals to  ${total} ` ;

}

document