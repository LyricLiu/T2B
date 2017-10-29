(function() {

    var a = 1;

    $(document).ready(function() {


        //console.log($('#slider_moral').attr('value'));
    });

    $('#slider_moral_BOG').jRange({
        from: -5.0,
        to: 5.0,
        step: 1,
        scale: [-5.0, -3.0, -1.0, 1.0, 3.0, 5.0],
        format: '%s',
        width: 300,
        showLabels: true,
        snap: true,
        theme: "theme-blue",
        onstatechange: function(){
        	if($('#slider_moral_BOG').attr('value')>=0){
        		$('#p').show();
        		$('#n').hide();
        	}else{
        		$('#n').show();
        		$('#p').hide();
        	}
        }
    });

    $('#slider_handsome_BOG').jRange({
        from: -5.0,
        to: 5.0,
        step: 1,
        scale: [-5.0, -3.0, -1.0, 1.0, 3.0, 5.0],
        format: '%s',
        width: 300,
        showLabels: true,
        snap: true,
        theme: "theme-blue",
        onstatechange: function(){
        }
    });

    $('#slider_moral_BOD').jRange({
        from: -5.0,
        to: 5.0,
        step: 1,
        scale: [-5.0, -3.0, -1.0, 1.0, 3.0, 5.0],
        format: '%s',
        width: 300,
        showLabels: true,
        snap: true,
        theme: "theme-green",
    });

    $('#slider_handsome_BOD').jRange({
        from: -5.0,
        to: 5.0,
        step: 1,
        scale: [-5.0, -3.0, -1.0, 1.0, 3.0, 5.0],
        format: '%s',
        width: 300,
        showLabels: true,
        snap: true,
        theme: "theme-green",
    });

    $('#status_BOG').selectize({
    	sortField: 'text'
	});

	$('#status_BOD').selectize({
    	sortField: 'text'
	});





})();