$(document).ready(function(){
	/*$('p').animate({
		padding: '20px',
		fontSize: '30px'
	},2000);*/

	$('#bio > div').hide();
	$('#bio h3').click(function(){
		$(this).next().animate({
			'height':'toggle'
		},'slow','swing');
	});

	/*
	$('#navigation li').hover(function(){

		$(this).animate({paddingLeft: '+=15px'},200);
	},function(){

		$(this).animate({paddingLeft: '-=15px'},200);
	});*/
	$("#hideButton").click(function(){
		$('#disclaimer').animate({
			opacity: 'hide',
			height:'hide'
		},'slow');
	});
	$('p:first').toggle(
		function(){
		$(this).animate({'height':'+=150px'},1000,'linear')},
		function(){
		$(this).animate({'height':'-=150px'},1000,'swing');}
	);

	$('<div id="navigation_blob"></div>').css({
		width:0,
		height:$('#navigation li:first a').height() + 10
				}).appendTo('#navigation');
	$('#navigation a').hover(function(){
		$('#navigation_blob').animate({
			width:$(this).width()+10,
			left:$(this).position().left
		},{
			duration:'slow',
			easing:'swing',
			queue:false
		})
	}
		,function(){
			$('#navigation_blob').animate({
				width: $(this).width()+10,
				left:$(this).position().left
			},{
				duriation:'slow',
				easing:'swing',
				queue:false
			}).animate({
				left:$('#navigation li:first a').position().left
			},'fast');
		});
});
