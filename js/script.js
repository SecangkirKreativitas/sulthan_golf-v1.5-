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

//script untuk button gambar pada tampilan order
var a;
function show_hide1(){
	if(a==1){
		document.getElementById("text1").style.display="inline";
		return a=0;
	}else{
		document.getElementById("text1").style.display="none";
		return a=1;
	}

}

let usersSection = document.querySelector(".text2");
function show_hide2(){
	//if(a==1){
		//document.getElementById("text3").style.display="inline";
		//return a=0;
	//}else{
		//document.getElementById("text3").style.display="none";
		//return a=1;
	//}

	usersSection.classList.toggle("hide")

}

let imgSection = document.querySelector(".img");
function show_hide3(){
	//if(a==1){
		//document.getElementById("img").style.display="inline";
		//return a=0;
	//}else{
		//document.getElementById("img").style.display="none";
		//return a=1;
	//}

	imgSection.classList.toggle("hide")
}
