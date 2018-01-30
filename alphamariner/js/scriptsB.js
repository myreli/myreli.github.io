    //Wild Bezinho former god of js appears
    
     $(".cert-fields").on("click",".remove", function(){
        row = this.closest(".row");
        outras = $(row).siblings();
        row.remove();
        for (i = 2; i < outras.length; i++) {
            console.log(outras[i]);
            input = $(outras[i]).find(".form-control");
            input.attr('name', "campo_" + (i-1));
            input.attr('id', (i-1));
        }
    });
    $(document).ready(function(){
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1; //January is 0!
        var yyyy = today.getFullYear()
        dd = dd<10? "0" + dd: "" + dd;
        mm = mm<10? "0" + mm: "" + mm;
        $("#hoje").val( dd + "/" + mm + "/" + yyyy);
    });
    $("#addCampo").click( function(){
        
        input = $("#formAdd :input");
        certificadosCampo = $("#certificado .form-control");
        form = $("#certificado");
        botao =  $(".row .secondary")
        novoCampo = `   <div class="row">
                            <div class="form-group col-md-10 col-xs-10">
                                   <label for="`+ (certificadosCampo.length -1) +`">`+ input.val() +`:</label>
                                   <input class='form-control' type='text' name='campo_`+(certificadosCampo.length-1) +`' id='`+ (certificadosCampo.length-1) +`'>    
                            </div>
                            <div class='col-md-2 col-xs-2'> 
                            <button class="btn btn-danger marginzin remove"  data-valor=`+ (certificadosCampo.length -1)  +`>Remover</button>
                            </div>
                        </div>`
        botao.remove()
        form.append(novoCampo);
        form.append(botao);        
        input.val("");


    });
    $("#fecha").click( function(){
        
        input = $("#formAdd :input");
        input.val("");

    });
   