document.getElementById('btn1').addEventListener('click',function(){
  //get subject innerText
  const bangla=allSub('one') ;
  const english=allSub('tow');
  const math=allSub('three');
  const ict=allSub('four');
  const biology=allSub('five');
  const physic=allSub('six');
  const chemistry=allSub('seven');
   ///Add list item 
  const bang=listItem('Bangla',bangla);
  const eng=listItem('English',english);
  const mat=listItem('Math',math);
  const it=listItem('ICT',ict);
  const bio=listItem('Biology',biology);
  const phy=listItem('Phycis',physic);
  const chem=listItem('Chemistry',chemistry);

  //Get error handeling 3 numric number
  if(bangla >100 || english >100 || math>100 || ict>100 ||biology>100 ||physic>100 ||chemistry>100){
    alert('Enter A valid number')
  }
  else{
    const mark=bangla+english+math+ict+biology+physic+chemistry;
    const obtainedMark=document.getElementById('obtained');
    obtainedMark.innerText=mark;
    //percentage 
    const converted=parseInt(mark)
    const percentage=converted/500*100;
    const obtainedPercentage=document.getElementById('obtained-percentage');
    obtainedPercentage.innerText=percentage;

     ///Grade
   if(percentage >=85){
    grade('A+');
   }
   else if(percentage >=75){
    grade('A');
   }
   else if(percentage >=60){
    grade('B')
   }
   else if(percentage >=40){
    grade('D')
   }
   else{
   const f= document.getElementById('obtained-grade');
   f.innerText='F'
    f.style.color='red';
    f.style.fontWeight='bold';
    f.style.fontSize='20px';
   }
   ///remark
   if(bangla >40 &&english>40 &&math>40 &&ict>40 &&biology>40 &&physic>40 &&chemistry>40){
     document.getElementById('remark').innerHTML=`<span style="color:#292;font-weight:bold; font-size:30px;">PASS</span>`
   }
   else{
    document.getElementById('remark').innerHTML=`<span style="color:red;font-weight:bold; font-size:30px;">FAIL</span>`
   }
 
  }
})
///Get Input Value
function allSub(sub){
 const book =document.getElementById('book-'+ sub);
 const bookText=book.value;
 const subject=parseFloat(bookText);
 book.value='';
 return subject;
}
///Create List Item
function listItem(name,sub){
  const ol=document.getElementById('ol')
  const li=document.createElement('li');
  li.style.color='white';
  li.style.fontWeight='bold';
  li.innerText=`${name}:${sub}`;
  ol.appendChild(li);
}

function grade(txt){
  const obtainedGrade=document.getElementById('obtained-grade');
  obtainedGrade.innerText=txt;
  obtainedGrade.style.color='#292';
  obtainedGrade.style.fontWeight='bold';
  obtainedGrade.style.fontSize='20px';
}    