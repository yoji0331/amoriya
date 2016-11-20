var data = {"id":"us-east-1:946d8701-75ad-4dbb-826a-86b3ea8fe5acA"};
var url = 'https://ogl172l04a.execute-api.us-east-1.amazonaws.com/api';

$(function(){
	$.ajax({
		type: 'POST',
		url: url,
		data: JSON.stringify(data),
		success: function(res){
			for(var i=0;i<res.Items.length;i++){
				console.log(res.Items[i]);
			}
		},
		contentType: "application/json"
	});
});
