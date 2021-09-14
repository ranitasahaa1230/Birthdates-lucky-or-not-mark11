const dateOfBirth=document.querySelector('#date-of-birth');
const luckyNumber=document.querySelector('#lucky-number');
const submitBtn=document.querySelector('#check-number');
const outputEl=document.querySelector('#output');

submitBtn.addEventListener('click', birthdayLucky);

function birthdayLucky(){
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
        outputEl.innerText="Yayyy! Your birthday is lucky!🤩🎉"
    }else{
        outputEl.innerText="OOps! Your birthday is unlucky!😕"
    }
}


