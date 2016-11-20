var data = {"id":"us-east-1:946d8701-75ad-4dbb-826a-86b3ea8fe5acA"};
var url = 'https://ogl172l04a.execute-api.us-east-1.amazonaws.com/api';

$(function(){
	$.ajax({
		type: 'POST',
		url: url,
		data: JSON.stringify(data),
		success: function(res){
			document.write(
				'<div id="header">' + 
			'<a class="title">~青森屋~</a>'+
		'</div>'+
		'<div id="center">'+
			'<div class="content">'+
				'<h1>青森屋 思い出</h1>'+
			'</div>');
			for(var i=0;i<res.Items.length;i++){
				console.log(res.Items[i]);
				write(res.Items[i]);
				applyCSS(document,"css/style.css");
			}
		},
		contentType: "application/json"
	});
});

/* レスポンスから表示するHTMLの作成 */

function write(data){
	/* アクティビティかどうかを判別 */
	if(data.activity == "-"){
		/* 写真の表示 */
		var url = data.path;
		document.write(
			'<div id="single">'+
				'<div id="pic">'+
			 		'<img src="' + url + '" class="test1" align=left>'+
		 		'</div>'+
	 		'</div><div class="clear"></div>');
	} else {
		/* 写真と説明を表示 */
		var url = data.path;
		var des = data.description;
		document.write(
			'<div id="single">'+
				'<div id="pic">'+
			 		'<img src="' + url + '" class="test1" align=left>'+
		 		'</div>');
		document.write(
				'<div id="text">'+
				'<p class="test2">'+ des + '</p>' +
	 		'</div>'+'<div class="clear"></div>');
	};
};


function applyCSS(doc, cssfile, overwrite)
{
  if (typeof overwrite == "undefined")
    overwrite = 0;      // デフォルト:CSSの追加

  // 既存のCSSを削除
  if (overwrite && doc.styleSheets.length >= 1) {
    var links = doc.getElementsByTagName("link");
    for (var i = 0 ; i < links.length ; i++) {
      if (links[i].rel == "stylesheet")
        links[i].parentNode.removeChild(links[i]);
    }
  }

  // CSS追加
  if (document.all) {
    doc.createStyleSheet(cssfile);
  } else {
    var link = doc.createElement("link");
    link.rel = "stylesheet";
    link.href = cssfile;
    link.type = "text/css"
    doc.getElementsByTagName('head')[0].appendChild(link);
  }
}