'use strict';

$(document).ready(function() {
var message = $('#message');
var submit = $('button');
var messageList = $('#messageList')
$('form').submit(function(e) {
		e.preventDefault();
		var newMessage = message.val();
		$.post(
			'http://tiyfe.herokuapp.com/collections/noel',
			{chatInput: newMessage},
			function(result) {
				console.log(result._id);
				messageList.append('<div>'+result.chatInput+'</div>');
			},
			'json'
		);
		message.val("");
})

function load() {$.get(
		'http://tiyfe.herokuapp.com/collections/noel',
		function(response) {
			response.reverse();
			for(var i=0; i<response.length; i++) {
				messageList.append('<div>'+response[i].chatInput+'</div>');
			}
		},
		'json'
	);
}
setInterval(function() {
	messageList.html('');
	load()
}, 2000);

})