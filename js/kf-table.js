$(function(){
    //翻转
    var turn = function(target,time,opts){
        target.find('div.kf-table-left-item').hover(function(){
            $(this).find('img.prev-img').css({'height':'100%'});
            $(this).find('img.prev-img').stop().animate(opts[0],time,function(){
                $(this).hide().next().show();
                $(this).next().animate(opts[1],time);
            });
        },function(){
            $(this).find('.kf-table-left-turn').css({'height':'100%'});
            $(this).find('.kf-table-left-turn').animate(opts[0],time,function(){
                $(this).hide().prev().show();
                $(this).prev().animate(opts[1],time);
            });
        });
    }
    var verticalOpts = [{'width':0},{'width':'110%'}];
    turn($('#vertical'),180,verticalOpts);
})