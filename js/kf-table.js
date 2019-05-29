$(function(){
    // 如果ie9以下，用js翻转
    if(navigator.appName == "Microsoft Internet Explorer"&&parseInt(navigator.appVersion.split(";")[1].replace(/[ ]/g, "").replace("MSIE",""))<10){
        $('.kf-table-left-flip').css({'display':'none'});
        $('#vertical').css({'display':'black'});
        $('.fixed-bg-wrap').css({'top':'0'});
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
    var verticalOpts = [{'width':0},{'width':'370px'}];
    turn($('#vertical'),180,verticalOpts);
    /*弹框*/
    $('.kf-table-btn-animate-wrap').on('click', function(){
        $('.mark').css({'display':'block'});
        $('.mark-content-wrap').css({'display':'block'});
    });
    $('.mark-close-btn').on('click', function(){
        $('.mark').css({'display':'none'});
        $('.mark-content-wrap').css({'display':'none'});
    });
    /*滚动*/
    $(document).on('scroll', function(){
        var scrollHeight = $(document).scrollTop();
        console.log("滚动",scrollHeight);
        if(scrollHeight>900){
            $('.fixed-bg-wrap').css({'top':'0'});
        }else {
            $('.fixed-bg-wrap').css({'top':'500px'});
        }
    })
})