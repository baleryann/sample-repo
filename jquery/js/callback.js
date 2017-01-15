window.onload = function(){

$.ajax ({
	type: "GET",
	url: "json/tweets.json",
	success: function (data){
		console.log(data);


		$.ajax ({
	type: "GET",
	url: "json/friends.json",
	success: function (data){
		console.log(data);


		$.ajax ({
	type: "GET",
	url: "json/videos.json",
	success: function (data){
		console.log(data);
	},

	error:  function (jqXHR, textStatus, error){
		console.log(error);
	}



});


	},

	error:  function (jqXHR, textStatus, error){
		console.log(error);
	}



});
	},

	error:  function (jqXHR, textStatus, error){
		console.log(error);
	}



});

};
