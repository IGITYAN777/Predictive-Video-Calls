var x = 0;

function changebackgroundcolor1() {
  ++x;
  if(x%2 == 1){
      document.getElementById('TextShow').style.display = "none";
  }else{
    document.getElementById('TextShow').style.display = "block";
  }
}
