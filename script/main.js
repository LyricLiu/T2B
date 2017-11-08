(function() {
    //0 white; 1 yellow; 2 black
    var skin_BOG = 0;
    var skin_BOD = 0;
    var handsome_BOG = 0;
    var handsome_BOD = 0;
    //0 white T-shirt; 1 white shirt; 2 white shirt with jacket; 
    //3 professional; 4 actor; 5 musician; 6 exercise; 7 superman.
    var cloth_BOG = 0;
    var cloth_BOD = 0;
    //0 handsome haircut 
    var hair_BOG = 0;
    var hair_BOD = 0;


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

    //button control 

    $('#create_story').click(function(){
        $('#homepage').hide();
        $('#design_character').show();
    });

    $('#generate_character_button').click(function(){
        $('#design_character').hide();
        $('#generate_character').show();
    });


    //select skin
     $('#white_BOG').click(function(){
        $('#white_BOG').css('border-bottom','2px solid #d74276');
        $('#yellow_BOG').css('border-bottom','');
        $('#black_BOG').css('border-bottom','');
     })

     $('#yellow_BOG').click(function(){
        $('#yellow_BOG').css('border-bottom','2px solid #d74276');
        $('#white_BOG').css('border-bottom','');
        $('#black_BOG').css('border-bottom','');
        skin_BOG = 1;
     })

     $('#black_BOG').click(function(){
        $('#black_BOG').css('border-bottom','2px solid #d74276');
        $('#white_BOG').css('border-bottom','');
        $('#yellow_BOG').css('border-bottom','');
        skin_BOG = 2;
     })

     $('#white_BOD').click(function(){
        $('#white_BOD').css('border-bottom','2px solid #d74276');
        $('#yellow_BOD').css('border-bottom','');
        $('#black_BOD').css('border-bottom','');
     })

     $('#yellow_BOD').click(function(){
        $('#yellow_BOD').css('border-bottom','2px solid #d74276');
        $('#white_BOD').css('border-bottom','');
        $('#black_BOD').css('border-bottom','');
        skin_BOD = 1;
     })

     $('#black_BOD').click(function(){
        $('#black_BOD').css('border-bottom','2px solid #d74276');
        $('#white_BOD').css('border-bottom','');
        $('#yellow_BOD').css('border-bottom','');
        skin_BOD = 2;
     })


    //Generate character

    $('#generate_character_button').click(function(){
        if (($('#status_BOG').attr('value')=='clerk')||($('#status_BOG').attr('value')=='sale')){
            cloth_BOG = 1;
        }else if($('#status_BOG').attr('value')=='waiter'){
            cloth_BOG = 2;
        }else if(($('#status_BOG').attr('value')=='manager')||($('#status_BOG').attr('value')=='politician')){
            cloth_BOG = 3;
        }else if($('#status_BOG').attr('value')=='gangster'){
            cloth_BOG = 5;
        }else if($('#status_BOG').attr('value')=='coach'){
            cloth_BOG = 6;
        }else{
            cloth_BOG = 0;
        }

        if($('#status_BOD').attr('value')=='clerk'){
            cloth_BOD = 1;
        }else if(($('#status_BOD').attr('value')=='entrepreneur')||($('#status_BOD').attr('value')=='billionaire')){
            cloth_BOD = 2;
        }else if(($('#status_BOD').attr('value')=='ceo')||($('#status_BOD').attr('value')=='politician')){
            cloth_BOD = 3;
        }else if($('#status_BOD').attr('value')=='actor'){
            cloth_BOD = 4;
        }else if($('#status_BOD').attr('value')=='rock'){
            cloth_BOD = 5;
        }else if(($('#status_BOD').attr('value')=='athlete')||($('#status_BOD').attr('value')=='fitness')){
            cloth_BOD = 6;
        }else if($('#status_BOD').attr('value')=='superman'){
            cloth_BOD = 7;
        }else{
            cloth_BOD = 0;
        }

        if($('#slider_handsome_BOG').attr('value')<0 || $('#slider_handsome_BOG').attr('value')==0){
            hair_BOG = 1;
        }

        if($('#slider_handsome_BOD').attr('value')<0){
            hair_BOD = 1;
        }

        //display & hide generated character image

        if(hair_BOG == 1){
            $('.BOG-hair1').show();
            $('.BOG-hair0').hide();
        }else{
            $('.BOG-hair1').hide();
            $('.BOG-hair0').show();
        }

        if(hair_BOD == 1){
            $('.BOD-hair1').show();
            $('.BOD-hair0').hide();
        }else{
            $('.BOD-hair1').hide();
            $('.BOD-hair0').show();
        }

        if(cloth_BOG == 0){
            $('.BOG-cloth0').show();
        }else if(cloth_BOG == 1){
            $('.BOG-cloth1').show();
        }else if(cloth_BOG == 2){
            $('.BOG-cloth2').show();
        }else if(cloth_BOG == 3){
            $('.BOG-cloth3').show();
        }else if(cloth_BOG == 4){
            $('.BOG-cloth4').show();
        }else if(cloth_BOG == 5){
            $('.BOG-cloth5').show();
        }else if(cloth_BOG == 6){
            if(skin_BOG == 0){
                $('.BOG-cloth6-0').show();
            }else if(skin_BOG == 1){
                $('.BOG-cloth6-1').show();
            }else{
                $('.BOG-cloth6-2').show();
            }
        }

        if(cloth_BOD == 0){
            $('.BOD-cloth0').show();
        }else if(cloth_BOD == 1){
            $('.BOD-cloth1').show();
        }else if(cloth_BOD == 2){
            $('.BOD-cloth2').show();
        }else if(cloth_BOD == 3){
            $('.BOD-cloth3').show();
        }else if(cloth_BOD == 4){
            $('.BOD-cloth4').show();
        }else if(cloth_BOD == 5){
            $('.BOD-cloth5').show();
        }else if(cloth_BOD == 6){
            if(skin_BOD == 0){
                $('.BOD-cloth6-0').show();
            }else if(skin_BOD == 1){
                $('.BOD-cloth6-1').show();
            }else{
                $('.BOD-cloth6-2').show();
            }
        }else if(cloth_BOD == 7){
            $('.BOD-cloth7').show();
        }

        if(skin_BOG == 0){
            $('.BOG-skin0').show();
        }else if(skin_BOG ==1){
            $('.BOG-skin1').show();
        }else{
            $('.BOG-skin2').show();
        }

        if(skin_BOD == 0){
            $('.BOD-skin0').show();
        }else if(skin_BOD ==1){
            $('.BOD-skin1').show();
        }else{
            $('.BOD-skin2').show();
        }

    })





})();