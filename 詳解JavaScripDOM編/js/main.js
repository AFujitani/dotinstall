'use strict'

{
  document.querySelector('button').addEventListener('click', () => {
    const colors = document.querySelectorAll('input');
    let selectedColor;
    
    colors.forEach(color => {
      if(color.checked) {
        selectedColor = color.value;
      } 
    });
      
      if (typeof selectedColor === 'undefined') {
        alert('選択されていません');
        return;
      }
      
    const li = document.createElement('li');
    li.textContent = selectedColor;
    document.querySelector('ul').appendChild(li);
  });
}

{
//  function timeDown() {
//    var time = 10;
//    time -= 1;
//    console.log(time);
//  }
//  timeDown();
//  timeDown();
//  timeDown();

 var createTimer = function() {
   var time = 10;
   return function timeDown() {
       time -= 1;
       console.log(time);
   };
 };
 var timer = createTimer();
 timer();
 timer();
 timer();
 

}

{
// const li = document.createElement('li');
// li.textContent = 'time';
// document.querySelector('ul').appendChild(li);

const li = $('<li>').text('just added');
$('ul > li:eq(1)').before(li);


}
