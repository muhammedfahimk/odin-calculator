// function addNum(num) {
//     output.value += num

// }

// function clearDisplay() {
//     output.value = ''
// }

// function delValue() {
//     output.value = output.value.slice(0, -1)

// }


// let firstNumber = '';
// let secondNumber = '';
// let currentOperator = '';
// let result = '';


// function setOperator(op){
//         currentop=output.value +=op

// }


function displaydata(n){
    output.value += n;

}

function cleardisplay(n){
    output.value = ""
}

function deletedisplay(n){
    output.value = output.value.slice(0,-1);
}


function result()
{
    if(output.value.includes('+'))
    {
        r=[];
        a=output.value;
        r=a.split('+')
        output.value=parseInt(r[0]) + parseInt(r[1])
    }

    else if(output.value.includes('-'))
    {
        r=[];
        a=output.value;
        r=a.split('-')
        output.value=parseInt(r[0]) - parseInt(r[1])
    }

    else if(output.value.includes('*'))
    {
        r=[];
        a=output.value;
        r=a.split('*')
        output.value=parseInt(r[0]) * parseInt(r[1])
    }

    else if(output.value.includes('/'))
    {
        r=[];
        a=output.value;
        r=a.split('/')
        output.value=parseInt(r[0]) / parseInt(r[1])
    }
}