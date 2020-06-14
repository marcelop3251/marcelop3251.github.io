(function (){

$(".fundo").hide();
$(".infomacao").hide();
$(".fundo").css("z-index",99999);

$("#informacao1").click(showModal);
$("#informacao2").click(showModal);
$("#informacao3").click(showModal);
$("#informacao4").click(showModal);
$("#informacao5").click(showModal);
$("#informacao6").click(showModal);


})()

function showModal(){
	var id = $(this).attr('id');
	var numero = id.substring(id.length -1, id.length);
	$("#myModal" + numero).modal();
}