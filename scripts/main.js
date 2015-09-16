'use strict';

$(document).ready(function() {
var message = $('#message');
var submit = $('button');
var messageList = $('#messageList')
var userName = window.prompt('Enter your username');


$('form').submit(function(e) {
		e.preventDefault();
		var newMessage = message.val();
		$.post(
			'http://tiyfe.herokuapp.com/collections/noel',
			{chatInput: newMessage, UN: userName},
			function(result) {
				console.log(result._id);
				messageList.append('<div>'+result.UN+ ": " + result.chatInput+'</div>');
			},
			'json'
		);
		message.val("");
})

// function load() {
// 	$.get(
// 		'http://tiyfe.herokuapp.com/collections/noel',
// 		function(response) {
// 			response.reverse();
// 			for(var i=0; i<response.length; i++) {
// 				messageList.append('<div>'+response[i].UN+ ": " +response[i].chatInput+'</div>');
// 			}
// 		},
// 		'json'
// 	);
// }
setInterval(function() {
$.get('http://tiyfe.herokuapp.com/collections/noel', function(data) {
    messageList.html('');
    data.reverse();
    data.forEach(function(chat) {
    	
        messageList.append('<div>'+chat.UN+ ": " +chat.chatInput+'</div');
    });    
},
     'json');

}, 500);

})