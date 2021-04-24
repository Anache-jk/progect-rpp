let dab = 1;
let mw, mh, minw,minh;
            
        (function($) {
    var options;
    $.fn.mySimpleImg = function(params){
        $(this).click(function(){
            if(dab==1){
            console.log("on");
            mw = $(this).css('maxWidth');
            mh = $(this).css('maxHeight');
            minw = $(this).css('mimWidth');
            minh = $(this).css('maxWidth');
            $(this).css({
                 'max-width': '50%',
                'max-height': '80%',
                'position': 'fixed',
                'left': '27%',
                'top': '19%',
                'z-index': '100',
                'display': 'block',
                'cursor' : 'zoom-out',
            });
            $('#TB_overlay').css('display', 'block');
            $("body").css("overflow-y","hidden");
            dab = 0;
        }
        else{
            console.log("off")
            $(this).css({
            'max-width': `${mw}`,
            'max-height': `${mh}`,
            'position': 'relative',
            'top':'0',
            'left': '0',
            'z-index': '10',
            'display': 'flex',
            'cursor' : 'zoom-in',
            }); 
            $('#TB_overlay').css('display', 'none');
            $("body").css("overflow-y","visible");
            dab = 1;
    }    
    });
}
return this ;
})(jQuery);
$('.siz').mySimpleImg();