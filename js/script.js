/*function exp() {

  var xhr= new XMLHttpRequest();
  var msg = document.getElementById('message').value + "\n";

  //document.getElementById('area').value += msg;
  document.getElementById('message').value = "";

  //Request Configuration
  xhr.open("post","http://localhost:3000/");
  xhr.setRequestHeader( 'Content-Type', 'application/x-www-form-urlencoded' );

  var data = encodeURIComponent(msg);
// データをリクエスト ボディに含めて送信する
  xhr.send(data);
}
*/