$(function(){
    // 如果ie9以下，用js翻转
    if(navigator.appName == "Microsoft Internet Explorer"&&parseInt(navigator.appVersion.split(";")[1].replace(/[ ]/g, "").replace("MSIE",""))<10){
        $('.kf-table-left-flip').css({'display':'none'});
        $('#vertical').css({'display':'black'});
    }else {
        $('.kf-table-left-flip').css({'display':'block'});
        $('#vertical').css({'display':'none'});
    }
    //翻转
    var turn = function(target,time,opts){
        target.find('div.kf-table-left-item').hover(function(){
            $(this).find('img.prev-img').stop().animate(opts[0],time,function(){
                $(this).hide().next().show();
                $(this).next().animate(opts[1],time);
            });
        },function(){
            $(this).find('.kf-table-left-turn').animate(opts[0],time,function(){
                $(this).hide().prev().show();
                $(this).prev().animate(opts[1],time);
            });
        });
    }
    var verticalOpts = [{'width':0},{'width':'236'}];
    turn($('#vertical'),180,verticalOpts);
})