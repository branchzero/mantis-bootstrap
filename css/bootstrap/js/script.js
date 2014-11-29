jQuery(function($){
	$(document).ready(function(){

		$('table').css({
			'border-spacing' : '1px',
			'border-collapse' : 'inherit'
		});

		$('table.hide').removeClass('hide').css('width', '100%');
		$('.navbar-fixed-top').next().children('a').remove();
//		$('.navbar-fixed-top').next().css('margin-top', $('.navbar-fixed-top').height() + 10 + 'px');
		$('.announcement-header').css({
//			'position' : 'fixed',
//			'top' : '100px',
//		'display ' : 'block'
		});

		//$('.menu').parent().parent().parent().remove();
		$('#banner').remove();
		$('.info-bar').remove();
		$('.main-menu').remove();
		$('#footer').remove();

		$('.login-info-left').html('');
		
		var width = '';
/*		$.each( $('textarea'), function(k, elm){
			width = $(elm).parent().width() + 'px';
			$(elm).css('width', width);
		});*/
		$('table').addClass('table table-striped');
		$('table textarea').css('width', '95%');
/*
		$.each( $('input[type="text"]'), function(k, elm){
			width = $(elm).parent().width() + 'px';
			$(elm).css('width', width);
		});*/
		$('#action-group-issues-div, div.section-container, div.form-container, div.table-container').css('border', '0');
		$('div.form-container .radio, div.form-container .checkbox, div.form-container .select, div.form-container .textarea, div.form-container .input, div.form-container .file, .display-value').css('margin', '0em 4em');
		$('input[type="text"]').css('width', '60%');
		$('div.form-container .textarea, div.form-container .input, .display-value').css('width', '40%');
		//$('div').removeClass('table-container');
		//$('div').removeClass('form-container');
		

		$('.button').addClass('btn btn-inverse').removeClass('button').css('display', 'inline-block');
		$('.button-small').addClass('btn btn-mini btn-inverse').removeClass('button').css('display', 'inline-block');

		$('form').addClass('form form-horizontal');

		$('input[id="ufile[]"]').css('width', 'inherit').attr('size', '100');

		$('input.small, input[name="dest_bug_id"]').css('width', '50px');

		$('input[name="search"]').css('width', '150px');

		$('a#history').css('text-decoration', 'none');

		$('#history').find('table').css({
			'border-spacing' : '0px',
			'border-collapse' : 'inherit'
		});

		$("td:contains('New relationship')").next().attr('width', '85%');
		$("td.category:contains('Note')").attr('width', '15%').next().attr('width', '85%');

		$('#filter_open').find('a').css({
			'color' : 'blue'
//			'font-weight' : 'bold'
		});

		$('img[src*="images/down.gif"]').after('<i class="icon-chevron-down"></i>');
		$('img[src*="images/down.gif"]').remove();
		$('img[src*="images/up.gif"]').after('<i class="icon-chevron-up"></i>');
		$('img[src*="images/up.gif"]').remove();

		$('.arrow').css('padding', '0px');
		$('#filter_open, #filter_closed').css('border', '0px');

		$('ul').css('zoom', '1');

		$('select.small').addClass('span2').removeClass('small');

		//	Replace all link in bracket by a button
		$('.bracket-link').addClass('btn btn-inverse btn-mini').find('a').css('color', 'white');

		//	Remove bracket of link in bracket
		var txt = '';
		$.each( $('.bracket-link'), function(k, elm){
			txt = $(elm).html().replace('[', '').replace(']', '').replace(']', '');
			
			$(elm).html( $.trim( txt ));
		});

		//	Resize the calendar button 
		$('input[src*="calendar-img.gif"]').css('width', '20px');
		
		//	Wrap the content with the class container-fluid
		$('#content').addClass('container-fluid');
		$('#content').wrapInner('<div class="row"><div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main"></div></div>');
		$('#manage-menu').prependTo('.row');
		$('#manage-menu').addClass('col-sm-3 col-md-2 sidebar');
		$('#manage-menu').removeAttr('id');
		$('#summary-menu').prependTo('.row');
		$('#summary-menu').addClass('col-sm-3 col-md-2 sidebar');
		$('#summary-menu').attr('id','sm-menu');
		$('.menu li span').parent().addClass('active');
		$('.menu .active span').wrapInner('<a></a>');
		$('.menu .active span a').unwrap();
		$('.menu').addClass('nav nav-sidebar');
	
		$('#sm-menu .menu li:has(a)').siblings().addClass('active').wrapInner('<a></a>');
		$('.width100').removeClass('width100');
		$('div.timeline').css('border', '0px');
		$('table').css('border', '0px');


		
	});
});