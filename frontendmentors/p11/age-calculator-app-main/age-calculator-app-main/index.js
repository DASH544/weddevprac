const valid1 = document.getElementById("invalid");
const valid2 = document.getElementById("invalid2");
const valid3 = document.getElementById("invalid3");
const bday = document.getElementById("day");
const bmonth = document.getElementById("month");
const byear = document.getElementById("year");
const agedays = document.getElementById("days");
const agemonth = document.getElementById("months");
const ageyear = document.getElementById("years");
const btn = document.getElementById("mysubmit");


function calc() {
    
      let birthday = `${bmonth.value}/${bday.value}/${byear.value}`;
      let birthdayObj = new Date(birthday);
      let ageDiffMill = Date.now() - birthdayObj;
      let ageDate = new Date(ageDiffMill);
      let ageYears = ageDate.getFullYear() - 1970;
      let ageMonth = ageDate.getMonth();
      let ageDay = ageDate.getDay();
      // DISPLAYING EVERYTHING
      agedays.textContent = ageDay;
      agemonth.textContent = ageMonth;
      ageyear.textContent = ageYears;
   
}
