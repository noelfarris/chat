(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

$(document).ready(function () {
	var message = $('#message');
	var submit = $('button');
	var messageList = $('#messageList');
	$('form').submit(function (e) {
		e.preventDefault();
		var newMessage = message.val();
		$.post('http://tiyfe.herokuapp.com/collections/noel', { chatInput: newMessage }, function (result) {
			console.log(result._id);
			messageList.append('<div>' + result.chatInput + '</div>');
		}, 'json');
		message.val("");
	});

	function load() {
		$.get('http://tiyfe.herokuapp.com/collections/noel', function (response) {
			response.reverse();
			for (var i = 0; i < response.length; i++) {
				messageList.append('<div>' + response[i].chatInput + '</div>');
			}
		}, 'json');
	}
	setInterval(function () {
		messageList.html('');
		load();
	}, 2000);
});

},{}]},{},[1])


//# sourceMappingURL=bundle.js.map