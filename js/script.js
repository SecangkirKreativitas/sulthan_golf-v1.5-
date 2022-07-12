// event pada saat link di klik
$('.page-scroll').on('click', function(e){

	// ambil isi href
	var tujuan = $(this).attr('href');
	// tangkap elemen ybs
	var elemenTujuan = $(tujuan);

	$('html,body').animate({
		scrollTop: elemenTujuan.offset().top - 50
	}, 1250, 'easeInOutExpo');

	e.preventDefault();

});


var MainImg = document.getElementById('MainImg');
var smallimg = document.getElementsByClassName('small-img');


smallimg[0].onclick = function(){
	MainImg.src = smallimg[0].src;
}

smallimg[1].onclick = function(){
	MainImg.src = smallimg[1].src;
}

smallimg[2].onclick = function(){
	MainImg.src = smallimg[2].src;
}

smallimg[3].onclick = function(){
	MainImg.src = smallimg[3].src;
}