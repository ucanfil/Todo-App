//check off specific todos by clicking

$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//click on X to delete Todo

$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

//grabbing new todo text from input
	
$("input[type='text']").keypress(
	function(event){
		if (event.which === 13) {
			var todoText = $("input[type='text']").val();
			$("ul").append('<li><span><i class="fa fa-trash" aria-hidden="true"></i></span> ' + todoText + "</li>");
			todoText = $("input[type='text']").val("");
	}
	});

$(".fa-plus").on('click', function(){
	$('input[type="text"]').fadeToggle();
});