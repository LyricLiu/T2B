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
    var camelot = false;


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
        onstatechange: function() {
            if ($('#slider_moral_BOG').attr('value') >= 0) {
                $('#p').show();
                $('#n').hide();
            } else {
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
        onstatechange: function() {}
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

    $('#status_camelot_BOG').selectize({
        sortField: 'text'
    });

    $('#status_camelot_BOD').selectize({
        sortField: 'text'
    });

    //choose era, change the status dropdown box
    $('#modern_BOG').click(function() {
        $('#camelot_BOG').prop('checked', false);
        $('#camelot_BOD').prop('checked', false);
        $('#modern_BOD').prop('checked', true);
        camelot = false;
        $('#modern_input_BOG').show();
        $('#modern_input_BOD').show();
        $('#camelot_input_BOG').hide();
        $('#camelot_input_BOD').hide();
    });

    $('#camelot_BOG').click(function() {
        $('#modern_BOG').prop('checked', false);
        $('#camelot_BOD').prop('checked', true);
        $('#modern_BOD').prop('checked', false);
        camelot = true;
        $('#modern_input_BOG').hide();
        $('#modern_input_BOD').hide();
        $('#camelot_input_BOG').show();
        $('#camelot_input_BOD').show();
    });

    $('#modern_BOD').click(function() {
        $('#camelot_BOD').prop('checked', false);
        $('#camelot_BOG').prop('checked', false);
        $('#modern_BOG').prop('checked', true);
        camelot = false;
        $('#modern_input_BOG').show();
        $('#modern_input_BOD').show();
        $('#camelot_input_BOG').hide();
        $('#camelot_input_BOD').hide();
    });

    $('#camelot_BOD').click(function() {
        $('#modern_BOD').prop('checked', false);
        $('#camelot_BOG').prop('checked', true);
        $('#modern_BOG').prop('checked', false);
        camelot = true;
        $('#modern_input_BOG').hide();
        $('#modern_input_BOD').hide();
        $('#camelot_input_BOG').show();
        $('#camelot_input_BOD').show();
    });

    //button control 

    $('#create_story').click(function() {
        $('#homepage').hide();
        $('#design_character').show();
    });

    $('#generate_character_button').click(function() {
        $('#design_character').hide();
        $('#generate_character').show();
    });

    $('#confirm_character_button').click(function() {
        $('#generate_character').hide();
        $('#design_personality').show();

        if ($('#slider_moral_BOG').attr('value') < 0 || $('#slider_moral_BOG').attr('value') == 0) {
            $('#negative_BOG').show();
        } else {
            $('#positive_BOG').show();
        }

        if ($('#slider_moral_BOD').attr('value') < 0) {
            $('#negative_BOD').show();
        } else {
            $('#positive_BOD').show();
        }

        $('#BOG_moral_value').text($('#slider_moral_BOG').attr('value'));
        $('#BOD_moral_value').text($('#slider_moral_BOD').attr('value'));
    });

    $('#generate_cards_button').click(function() {
        $('#design_personality').hide();
        $('#generate_cards').show();

        if (camelot == true) {
            $('.card_modern').hide();
            $('.card_camelot').show();
            $('#battle').show();
            $('#BOGproposal').hide();
        } else {
            $('.card_modern').show();
            $('.card_camelot').hide();
            $('#battle').hide();
        }

        if (skin_BOG == 0) {
            $('.BOG-skin0').show();
        } else if (skin_BOG == 1) {
            $('.BOG-skin1').show();
        } else {
            $('.BOG-skin2').show();
        }

        if (skin_BOD == 0) {
            $('.BOD-skin0').show();
        } else if (skin_BOD == 1) {
            $('.BOD-skin1').show();
        } else {
            $('.BOD-skin2').show();
        }

        if ($('#slider_handsome_BOD').attr('value') > 0){
            $('#love_first').show();
            if($('#slider_moral_BOD').attr('value') < 2){
                $('#seduction').show();
            }
        }

        if(($('#slider_moral_BOD').attr('value') <=0) && ($('#slider_moral_BOD').attr('value') <=0)){
            $('#happy_alone').show();
        }

        if(($('#status_camelot_BOD').attr('value') == 'king')||($('#status_camelot_BOG').attr('value') == 'king')||($('#status_BOG').attr('value') == 'billionaire')||($('#status_BOD').attr('value') == 'billionaire')||($('#status_BOD').attr('value') == 'ceo')){
            $('#temptation_wealth').show();
            $('#fear_poverty').show();
        }

    })

    //select skin
    $('#white_BOG').click(function() {
        $('#white_BOG').css('border-bottom', '2px solid #d74276');
        $('#yellow_BOG').css('border-bottom', '');
        $('#black_BOG').css('border-bottom', '');
    })

    $('#yellow_BOG').click(function() {
        $('#yellow_BOG').css('border-bottom', '2px solid #d74276');
        $('#white_BOG').css('border-bottom', '');
        $('#black_BOG').css('border-bottom', '');
        skin_BOG = 1;
    })

    $('#black_BOG').click(function() {
        $('#black_BOG').css('border-bottom', '2px solid #d74276');
        $('#white_BOG').css('border-bottom', '');
        $('#yellow_BOG').css('border-bottom', '');
        skin_BOG = 2;
    })

    $('#white_BOD').click(function() {
        $('#white_BOD').css('border-bottom', '2px solid #d74276');
        $('#yellow_BOD').css('border-bottom', '');
        $('#black_BOD').css('border-bottom', '');
    })

    $('#yellow_BOD').click(function() {
        $('#yellow_BOD').css('border-bottom', '2px solid #d74276');
        $('#white_BOD').css('border-bottom', '');
        $('#black_BOD').css('border-bottom', '');
        skin_BOD = 1;
    })

    $('#black_BOD').click(function() {
        $('#black_BOD').css('border-bottom', '2px solid #d74276');
        $('#white_BOD').css('border-bottom', '');
        $('#yellow_BOD').css('border-bottom', '');
        skin_BOD = 2;
    })


    //Generate character

    $('#generate_character_button').click(function() {
        if (camelot == false) {
            if (($('#status_BOG').attr('value') == 'teacher') || ($('#status_BOG').attr('value') == 'clerk') || ($('#status_BOG').attr('value') == 'sale')) {
                cloth_BOG = 1;
            } else if (($('#status_BOG').attr('value') == 'entrepreneur') || ($('#status_BOG').attr('value') == 'billionaire')) {
                cloth_BOG = 2;
            } else if (($('#status_BOG').attr('value') == 'manager') || ($('#status_BOG').attr('value') == 'ceo') || ($('#status_BOG').attr('value') == 'politician')) {
                cloth_BOG = 3;
            } else if ($('#status_BOG').attr('value') == 'actor') {
                cloth_BOG = 4;
            } else if (($('#status_BOG').attr('value') == 'gangster') || ($('#status_BOG').attr('value') == 'rock')) {
                cloth_BOG = 5;
            } else if (($('#status_BOG').attr('value') == 'coach') || ($('#status_BOG').attr('value') == 'athlete') || ($('#status_BOG').attr('value') == 'fitness')) {
                cloth_BOG = 6;
            } else if ($('#status_BOG').attr('value') == 'waiter') {
                cloth_BOG = 7;
            } else {
                cloth_BOG = 0;
            }

            if (($('#status_BOD').attr('value') == 'teacher') || ($('#status_BOD').attr('value') == 'clerk') || ($('#status_BOD').attr('value') == 'sale')) {
                cloth_BOD = 1;
            } else if (($('#status_BOD').attr('value') == 'entrepreneur') || ($('#status_BOD').attr('value') == 'billionaire')) {
                cloth_BOD = 2;
            } else if (($('#status_BOD').attr('value') == 'manager') || ($('#status_BOD').attr('value') == 'ceo')) {
                cloth_BOD = 3;
            } else if ($('#status_BOD').attr('value') == 'actor') {
                cloth_BOD = 4;
            } else if (($('#status_BOD').attr('value') == 'rock') || ($('#status_BOD').attr('value') == 'gangster')) {
                cloth_BOD = 5;
            } else if (($('#status_BOD').attr('value') == 'coach') || ($('#status_BOD').attr('value') == 'athlete') || ($('#status_BOD').attr('value') == 'fitness')) {
                cloth_BOD = 6;
            } else if ($('#status_BOD').attr('value') == 'waiter') {
                cloth_BOD = 7;
            } else {
                cloth_BOD = 0;
            }

            if ($('#slider_handsome_BOG').attr('value') < 0 || $('#slider_handsome_BOG').attr('value') == 0) {
                hair_BOG = 1;
            }

            if ($('#slider_handsome_BOD').attr('value') < 0) {
                hair_BOD = 1;
            }

            //display & hide generated character image

            if (hair_BOG == 1) {
                $('.BOG-hair1').show();
                $('.BOG-hair0').hide();
            } else {
                $('.BOG-hair1').hide();
                $('.BOG-hair0').show();
            }

            if (hair_BOD == 1) {
                $('.BOD-hair1').show();
                $('.BOD-hair0').hide();
            } else {
                $('.BOD-hair1').hide();
                $('.BOD-hair0').show();
            }

            if (cloth_BOG == 0) {
                $('.BOG-cloth0').show();
            } else if (cloth_BOG == 1) {
                $('.BOG-cloth1').show();
            } else if (cloth_BOG == 2) {
                $('.BOG-cloth2').show();
            } else if (cloth_BOG == 3) {
                $('.BOG-cloth3').show();
            } else if (cloth_BOG == 4) {
                $('.BOG-cloth4').show();
            } else if (cloth_BOG == 5) {
                $('.BOG-cloth5').show();
            } else if (cloth_BOG == 6) {
                if (skin_BOG == 0) {
                    $('.BOG-cloth6-0').show();
                } else if (skin_BOG == 1) {
                    $('.BOG-cloth6-1').show();
                } else {
                    $('.BOG-cloth6-2').show();
                }
            } else if (cloth_BOG == 7) {
                $('.BOG-cloth7').show();
            }

            if (cloth_BOD == 0) {
                $('.BOD-cloth0').show();
            } else if (cloth_BOD == 1) {
                $('.BOD-cloth1').show();
            } else if (cloth_BOD == 2) {
                $('.BOD-cloth2').show();
            } else if (cloth_BOD == 3) {
                $('.BOD-cloth3').show();
            } else if (cloth_BOD == 4) {
                $('.BOD-cloth4').show();
            } else if (cloth_BOD == 5) {
                $('.BOD-cloth5').show();
            } else if (cloth_BOD == 6) {
                if (skin_BOD == 0) {
                    $('.BOD-cloth6-0').show();
                } else if (skin_BOD == 1) {
                    $('.BOD-cloth6-1').show();
                } else {
                    $('.BOD-cloth6-2').show();
                }
            } else if (cloth_BOD == 7) {
                $('.BOD-cloth7').show();
            }

            if (skin_BOG == 0) {
                $('.BOG-skin0').show();
            } else if (skin_BOG == 1) {
                $('.BOG-skin1').show();
            } else {
                $('.BOG-skin2').show();
            }

            if (skin_BOD == 0) {
                $('.BOD-skin0').show();
            } else if (skin_BOD == 1) {
                $('.BOD-skin1').show();
            } else {
                $('.BOD-skin2').show();
            }

        } else {
            $('#generate_BOG_camelot').show();
            $('#generate_BOD_camelot').show();
            $('#generate_BOG_img').hide();
            $('#generate_BOD_img').hide();

            /* judge Camelot custome*/

            if ($('#status_camelot_BOG').attr('value') == 'king') {
                if (skin_BOG == 0) {
                    $('#BOG_camelot_image').attr('src', './img/character_camelot/BOG_king_white.png');
                } else if (skin_BOG == 1) {
                    $('#BOG_camelot_image').attr('src', './img/character_camelot/BOG_king_yellow.png');
                } else {
                    $('#BOG_camelot_image').attr('src', './img/character_camelot/BOG_king_black.png');
                }
            } else if ($('#status_camelot_BOG').attr('value') == 'bastard') {
                $('#BOG_camelot_image').css('width', '410px');
                $('#BOG_camelot_image').css('margin-top', '45px');
                if (skin_BOG == 0) {
                    $('#BOG_camelot_image').attr('src', './img/character_camelot/BOG_bastard_white.png');
                } else if (skin_BOG == 1) {
                    $('#BOG_camelot_image').attr('src', './img/character_camelot/BOG_bastard_yellow.png');
                } else {
                    $('#BOG_camelot_image').attr('src', './img/character_camelot/BOG_bastard_black.png');
                }
            } else if ($('#status_camelot_BOG').attr('value') == 'knight') {
                $('#BOD_camelot_image').css('margin-top', '25px');
                if (skin_BOG == 0) {
                    $('#BOG_camelot_image').attr('src', './img/character_camelot/BOG_knight_white.png');
                } else if (skin_BOG == 1) {
                    $('#BOG_camelot_image').attr('src', './img/character_camelot/BOG_knight_yellow.png');
                } else {
                    $('#BOG_camelot_image').attr('src', './img/character_camelot/BOG_knight_black.png');
                }
            } else if ($('#status_camelot_BOG').attr('value') == 'squire') {
                if (skin_BOG == 0) {
                    $('#BOG_camelot_image').attr('src', './img/character_camelot/BOG_squire_white.png');
                } else if (skin_BOG == 1) {
                    $('#BOG_camelot_image').attr('src', './img/character_camelot/BOG_squire_yellow.png');
                } else {
                    $('#BOG_camelot_image').attr('src', './img/character_camelot/BOG_squire_black.png');
                }
            }


            if ($('#status_camelot_BOD').attr('value') == 'king') {
                if (skin_BOD == 0) {
                    $('#BOD_camelot_image').attr('src', './img/character_camelot/BOD_king_white.png');
                } else if (skin_BOD == 1) {
                    $('#BOD_camelot_image').attr('src', './img/character_camelot/BOD_king_yellow.png');
                } else {
                    $('#BOD_camelot_image').attr('src', './img/character_camelot/BOD_king_black.png');
                }
            } else if ($('#status_camelot_BOD').attr('value') == 'bastard') {
                $('#BOD_camelot_image').css('width', '410px');
                $('#BOD_camelot_image').css('margin-top', '45px');
                if (skin_BOD == 0) {
                    $('#BOD_camelot_image').attr('src', './img/character_camelot/BOD_bastard_white.png');
                } else if (skin_BOD == 1) {
                    $('#BOD_camelot_image').attr('src', './img/character_camelot/BOD_bastard_yellow.png');
                } else {
                    $('#BOD_camelot_image').attr('src', './img/character_camelot/BOD_bastard_black.png');
                }
            } else if ($('#status_camelot_BOD').attr('value') == 'knight') {
                $('#BOD_camelot_image').css('width', '410px');
                $('#BOD_camelot_image').css('margin-top', '30px');
                if (skin_BOD == 0) {
                    $('#BOD_camelot_image').attr('src', './img/character_camelot/BOD_knight_white.png');
                } else if (skin_BOD == 1) {
                    $('#BOD_camelot_image').attr('src', './img/character_camelot/BOD_knight_yellow.png');
                } else {
                    $('#BOD_camelot_image').attr('src', './img/character_camelot/BOD_knight_black.png');
                }
            } else if ($('#status_camelot_BOD').attr('value') == 'squire') {
                $('#BOD_camelot_image').css('width', '410px');
                if (skin_BOD == 0) {
                    $('#BOD_camelot_image').attr('src', './img/character_camelot/BOD_squire_white.png');
                } else if (skin_BOD == 1) {
                    $('#BOD_camelot_image').attr('src', './img/character_camelot/BOD_squire_yellow.png');
                } else {
                    $('#BOD_camelot_image').attr('src', './img/character_camelot/BOD_squire_black.png');
                }
            }

        }

    })

    //table click
    $('.design_BOG td').toggle(
        function() {
            $(this).css('border', '2px solid #d74276');
        },
        function() {
            $(this).css('border', '2px solid #fbeff0');
        }
    )

    $('.design_BOD td').toggle(
        function() {
            $(this).css('border', '2px solid #d74276');
        },
        function() {
            $(this).css('border', '2px solid #fff');
        }
    )

    $('.show_violence').toggle(
        function() {
            $('#threat').show();
            $('#fear').show();
            $('#revenge').show();
            $('#violence').show();
        },
        function() {
            $('#threat').hide();
            $('#fear').hide();
            $('#revenge').hide();
            $('#violence').hide();
        }
    )

    $('.hide_violence').toggle(
        function() {
            $('#threat').hide();
            $('#fear').hide();
        },
        function(){
            $('#threat').show();
            $('#fear').show();
        }
    )

    $('.show_suspicion').toggle(
        function() {
            $('#suspicion').show();
        },
        function() {
            $('#suspicion').hide();
        }
    )

    $('.show_fear_poverty').toggle(
        function() {
            $('#fear_poverty').show();
        },
        function() {
            $('#fear_poverty').hide();
        }
    )

    $('.show_seduction').toggle(
        function() {
            $('#seduction').show();
        },
        function() {
            $('#seduction').hide();
        }
    )

    $('.show_temptation').toggle(
        function() {
            $('#temptation').show();
        },
        function() {
            $('#temptation').hide();
        }
    )

    $('.show_temptation_wealth').toggle(
        function() {
            $('#temptation_wealth').show();
            $('#temptation').show();
        },
        function() {
            $('#temptation_wealth').hide();
            $('#temptation').hide();
        }
    )

    $('.show_rescue').toggle(
        function() {
            $('#rescue').show();
        },
        function() {
            $('#rescue').hide();
        }
    )

    /* five part structure */

    var structure = '#opening';
    var opening;
    var disruption;
    var crisis;
    var choice;
    var consequence;

    $('#opening').click(function(){
        structure = '#opening';
        $('#opening p').hide();
        $('#disruption p').show();
        $('#crisis p').show();
        $('#choice p').show();
        $('#consequence p').show();
        $('#opening').css('border','3px solid #d74276');
        $('#disruption').css('border','');
        $('#crisis').css('border','');
        $('#choice').css('border','');
        $('#consequence').css('border','');

    })

    $('#disruption').click(function(){
        structure = '#disruption';
        $('#disruption p').hide();
        $('#opening p').show();
        $('#crisis p').show();
        $('#choice p').show();
        $('#consequence p').show();
        $('#disruption').css('border','3px solid #d74276');
        $('#opening').css('border','3px solid #fbeff0');
        $('#crisis').css('border','');
        $('#choice').css('border','');
        $('#consequence').css('border','');

    })

    $('#crisis').click(function(){
        structure = '#crisis';
        $('#crisis p').hide();
        $('#opening p').show();
        $('#disruption p').show();
        $('#choice p').show();
        $('#consequence p').show();
        $('#crisis').css('border','3px solid #d74276');
        $('#opening').css('border','3px solid #fbeff0');
        $('#disruption').css('border','');
        $('#choice').css('border','');
        $('#consequence').css('border','');

    })

    $('#choice').click(function(){
        structure = '#choice';
        $('#choice p').hide();
        $('#opening p').show();
        $('#disruption p').show();
        $('#crisis p').show();
        $('#consequence p').show();
        $('#choice').css('border','3px solid #d74276');
        $('#opening').css('border','3px solid #fbeff0');
        $('#disruption').css('border','');
        $('#crisis').css('border','');
        $('#consequence').css('border','');

    })

    $('#consequence').click(function(){
        structure = '#consequence';
        $('#consequence p').hide();
        $('#opening p').show();
        $('#disruption p').show();
        $('#crisis p').show();
        $('#choice p').show();
        $('#consequence').css('border','3px solid #d74276');
        $('#opening').css('border','3px solid #fbeff0');
        $('#disruption').css('border','');
        $('#crisis').css('border','');
        $('#choice').css('border','');

    })


    $('.card_drag').click(function(){
        if(structure=='#opening'){
            opening = $(this).attr('id');
        }else if(structure=='#disruption'){
            disruption = $(this).attr('id');
        }else if(structure=='#crisis'){
            crisis = $(this).attr('id');
        }else if(structure=='#choice'){
            choice = $(this).attr('id');
        }else if(structure=='#consequence'){
            consequence = $(this).attr('id');
        }

        var text = $(this).children('h4').text();
            $(structure + ' p').text(text);
            $(structure + ' p').show();
            $(structure + ' p').css('color','#d74276');
            $(structure + ' p').css('font-size','1.2em');
    })


})();