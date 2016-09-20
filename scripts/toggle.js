$(document).ready(function() {

	$('#a1').click(function(e) {
		$('#drop-content1').slideDown('slow', function() {
			$(this).stop(true);
		});
	});

	$('#a1').click(function() {

		$('#drop-content1').hide('slow', function() {
		});
	});

	//2
	$('#a2').click(function() {
		$('#drop-content2').slideDown('slow', function() {
			$(this).stop(true);
		});
	});

	$('#a2').click(function() {
		$('#drop-content2').hide('slow', function() {
		});
	});

	//3
	$('#a3').click(function() {
		$('#drop-content3').slideDown('slow', function() {
			$(this).stop(true);
		});
	});

	$('#a3').click(function() {
		$('#drop-content3').hide('slow', function() {
		});
	});

	//4
	$('#a4').click(function() {
		$('#drop-content4').slideDown('slow', function() {
			$(this).stop(true);
		});
	});

	$('#a4').click(function() {
		$('#drop-content4').hide('slow', function() {
		});
	});

	//5
	$('#a5').click(function() {
		$('#drop-content5').slideDown('slow', function() {
			$(this).stop(true);
		});
	});

	$('#a5').click(function() {
		$('#drop-content5').hide('slow', function() {
		});
	});

	//6
	$('#a6').click(function() {
		$('#drop-content6').slideDown('slow', function() {
			$(this).stop(true);
		});
	});

	$('#a6').click(function() {
		$('#drop-content6').hide('fast', function() {
		});
	});
});