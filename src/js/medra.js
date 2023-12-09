/* (c) inioHD 2021 | Medra Template by: https://iniohd.github.io | MIT License */
(function($){
    'use strict';

    $(document).ready(function(){
        //DOM loaded

        $("form#contact-form button[type='submit']").on("click", function(){
            var a, b, c, d, vMail, vName, vMsg, totalInvalid = 0;

            //Form's input element that is current receiving input data
            a = $(this);

            //Get all required form inputs
            b = $("form#contact-form input[required], form#contact-form textarea[required]");

            //Create the patterns that validate each input type
            vName = /([^A-Za-z0-9\-\_])/gi;
            vMail = /^([A-Za-z0-9\-\_\.]+)\@([A-Za-z0-9\_\-]+)\.([A-Za-z0-9\.]+)$/gi;
            vMsg = /[A-Za-z]/gi;

            b.each(function(){
                let inputName = ($(this).attr("id") || $(this).attr("name") || "").toLowerCase(),
                inputValue = $(this).val();

                if(inputName === "name"){
                    //Validate name input

                    if(inputValue.length < 3 || vName.test(inputValue)){
                        //The typed name is invalid (It luckly includes invalid character).

                        $(this)
                        .removeClass("border-success")
                        .addClass("border-danger");

                        totalInvalid++;
                    }else{
                        $(this)
                        .removeClass("border-danger")
                        .addClass("border-success");
                    }
                }else if(inputName === "email" || inputName === "mail"){
                    //Validate e-mail input

                    if(!vMail.test(inputValue)){
                        //The typed e-mail is invalid

                        $(this)
                        .removeClass("border-success")
                        .addClass("border-danger");

                        totalInvalid++;
                    }else{
                        $(this)
                        .removeClass("border-danger")
                        .addClass("border-success");
                    }
                }else if(inputName === "msg"){
                    //Validate Message textarea input

                    if(!vMsg.test(inputValue)){
                        //Contact textarea is invalid (luckly is empty)
                        
                        $(this)
                        .removeClass("border-success")
                        .addClass("border-danger");

                        totalInvalid++;
                    }else{
                        $(this)
                        .removeClass("border-danger")
                        .addClass("border-success");
                    }
                }
            });

            //Do we have at least one invalid input? If yes, return false.
            if(totalInvalid)
                return false;
        });
    });
})(jQuery)