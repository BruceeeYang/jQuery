$(document).ready(function () {
    $("button").text("Get Price").css("background-color","#65BF48").width("200px").height("30px").css("border", "1px solid #65BF48").css("border-radius","2px").css("color","black").css("font-weight","bold").css("line-height","30px").css("text-align","center").css("box-sizing","border-box").css("font-size","20px").css("padding","0px");
    $('button').on('click',function(){
        var amount = $(this).closest('.vacation').data("price");
        var price = $('<p>From $'+amount+'</p>');
        $(this).closest('.vacation').append(price.clone());
        $("p").css("background-color","#7fa0e8").css("border","1px solid #7fa0e8").width("200px").height("30px").css("border-radius","2px").css("color","black").css("font-weight","bold").css("line-height","30px").css("text-align","center").css("box-sizing","border-box").css("margin-top","0px");
        $(this).remove();
        
    });
});

