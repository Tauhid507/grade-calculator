const aB= document.getElementById('obtained-grade');
    aB.innerText='A+';
    aB.style.color='#292';
    aB.style.fontWeight='bold';
    aB.style.fontSize='20px';

function grade(txt){
  const obtainedGrade=document.getElementById('obtained-grade');
  obtainedGrade.innerText=txt;
  obtainedGrade.style.color='#292';
  obtainedGrade.style.fontWeight='bold';
  obtainedGrade.style.fontSize='20px';
}