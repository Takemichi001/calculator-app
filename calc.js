

function add (valor){
    document.getElementById('display').value += valor;
}
function reset (){
    document.getElementById('display').value = '';
}

function calculate(){
    const displayValue= document.getElementById('display').value;
    const result= eval(displayValue);
    document.getElementById('display').value = result
}

function del (){
    const displayValue= document.getElementById('display').value;
    document.getElementById('display').value = displayValue.substring(0, displayValue.length - 1);
}


const themeInputs = document.querySelectorAll('input[name="theme"]');

themeInputs.forEach(input => {
    input.addEventListener('change', () => {
        document.body.className = `theme${input.id.replace('theme', '')}`;
    });
});
