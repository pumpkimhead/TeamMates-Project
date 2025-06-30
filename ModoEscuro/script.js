function alterar(){
    let form = document.getElementsByName('cori')
    if(form[0].checked) {
        document.body.style.background = "#010709"
        document.body.style.color = "#2BDEFD"

    }else if(form[1].checked) {
        document.body.style.background = "white"
        document.body.style.color = "black"
        document.body.style.button.background = "black"
    }
    
}
console.log("Aoba");