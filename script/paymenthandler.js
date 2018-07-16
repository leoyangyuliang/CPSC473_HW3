function submitHandler(){
  var title;
  if(document.getElementById('title_1').checked){
    title = document.getElementById('title_1').value;
  }
  if(document.getElementById('title_2').checked){
    title = document.getElementById('title_2').value;
  }
  var name  = document.getElementById('name').value;
  document.getElementById('sayThanks').innerHTML = 'Thanks for your payment, ' + title + name;
}
