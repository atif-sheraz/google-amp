function cardnumber(inputtxt)
{
  var cardno = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
  if(inputtxt.value.match(cardno))
        {
      return true;
        }
      else
        {
        alert("Not a valid Visa credit card number!");
        return false;
        }
}
window.addEventListener('load', focus);
function focus(){
  alert('start');
  window.document.body.addEventListener('load', function(){alert(document.getElementsByTagName('body').length)}); 
  alert('stop');
}
