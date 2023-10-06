const unitSelect = document.getElementById('temp_diff');
const tempInp    = document.getElementById('temp');
const resultBox  = document.getElementById('result_box')
const calculateTemp=()=>{

    const valueTemp = tempInp.value
    const valueUnit = unitSelect.value
    var result;

    if(valueTemp){ 

        if (valueUnit =='fah'){
            result = ((valueTemp-32)*(5/9)).toFixed(2)
            resultBox.innerHTML= `= ${result} °Celsius`

        }

        else{
            result = ((valueTemp*1.8)+32).toFixed(2);
            resultBox.innerHTML= `= ${result} °Fahrenheit `
        }
    }

    else{
        resultBox.innerHTML= 'Enter the value to calculate'
    }
}

unitSelect.addEventListener('change',()=>{
    resultBox.innerHTML=''
})
tempInp.addEventListener('change',()=>{
    resultBox.innerHTML=''
})

