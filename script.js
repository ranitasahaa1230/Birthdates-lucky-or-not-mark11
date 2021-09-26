const dateOfBirth=document.querySelector('#date-of-birth');
const luckyNumber=document.querySelector('#lucky-number');
// const submitBtn=document.querySelector('#submit');
const outputEl=document.querySelector('#output');
let form = document.querySelector('#form');


form.addEventListener('submit', birthdayLucky);

function birthdayLucky(e){
    e.preventDefault();
    
    const dob=dateOfBirth.value;
    const luckyNo=luckyNumber.value;
    const sum=birthdaySum(dob);
    // console.log(sum);
    if(luckyNo && dob){
        compareValue(sum,luckyNo);
    }else{
        outputEl.innerText="Please enter both the fields!😡"
    }

}

function birthdaySum(dob){
    dob=dob.replaceAll("-","");
    let sum=0;
    for(let i=0;i<dob.length;i++){
        sum=sum+Number(dob.charAt(i));
    }
        return sum;

}
function compareValue(add,luckyNumbers){
    // console.log(sum,luckyNo);
    if(add%luckyNumbers===0){
        outputEl.innerText="Hurray! Your birthday is lucky! 🤩🎉"
    }else{
        outputEl.innerText="Oops!!Your birthday is not a lucky number! 😕"
    }
}


