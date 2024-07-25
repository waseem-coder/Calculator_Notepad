let inputBox = document.getElementById('inputBox')
let buttons = document.querySelectorAll('button')
let string = ''



buttons.forEach(element =>{
    element.addEventListener('click', (b)=>{
        if(b.target.innerText == '='){
            string = string.replaceAll('x', '*').replaceAll('÷', '/').replaceAll('%', '/100');
            string = String(eval(string))
            inputBox.value = string;
        }
        else if(b.target.innerText == 'CE'){
            string = ''
            inputBox.value = string;
        }
        else if(b.target.value == 'del' || b.target.classList.contains('del_icon')){
            string = string.substring(0, string.length-1)
            inputBox.value = string;
        }
        else{
            string += b.target.innerText
            inputBox.value = string;
        }
    })
})
