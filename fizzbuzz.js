$(document).ready(function() {
    $("#sendButton").click(function() {
	$('.result').text('Result: ');
	var inp = $('#inp').val();
    	$.ajax({
        	url: "https://fizzbuzzdon.herokuapp.com/fizzbuzz?input="+inp,
		dataType: 'JSON'
    	}).then(function(data) {
		for(var i=0; i<data.length; i++){
			$('.result').append(data[i]).append(",");
		}
    	});
    });
});