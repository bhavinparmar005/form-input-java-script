let form=document.getElementById('main_form');

// let full =document.getElementById('full_name').value

// console.log(form);



form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let name=document.getElementById('full_name').value;
    console.log(`FULL NAME IS :- ${name.toUpperCase()}`);

    let familyMember =document.getElementById('famaliy_member').value;

    console.log(`FAMILY MEMBER IS :- ${familyMember}`);

    let number = document.getElementById('phone_number').value;

    console.log(`PHONE NUMBER:- ${number}`);

    let income=document.getElementById('income').value;
    console.log(`INCOME IS :- ${income}`);

});