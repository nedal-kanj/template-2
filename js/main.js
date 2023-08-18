$(document).ready(function(){
    // chang background header
    $(window).on('scroll',function(){
        if($(window).scrollTop() > 10){
            $('.home .header').css({'backgroundColor': '#80d0c7'})
        }else{
            $('.home .header').css({'backgroundColor': 'transparent'})
        }
    })
    // ##########################
    // hover on dropdown
    $('.icon-drop , .dropsown-1').on({
        mouseenter: function(){$('.dropdown-1').animate({'top':'35px', 'opacity': '1', },200).show()},
        mouseleave: function(){$('.dropdown-1').animate({'top':'65px', 'opacity': '0', },200).hide(0)}
    })
    // ##########################
    // animate icon bar
    $('.bar-icon').on('click',function(){
        var bar1 = $(".bar-icon .bar-1")
        var bar2 = $(".bar-icon .bar-2")
        var bar3 = $(".bar-icon .bar-3")
        if($(".bar-icon").hasClass('collapsed')){
            bar3.animate({"opacity":"1"},function(){bar3.css({"transform":"translateY(-8px)",'rotate':"0deg"})})
            bar3.animate({"opacity":"1"},function(){bar3.css({"transform":"translateY(0px)"})})
            bar2.animate({"width":"30px"},function(){bar2.css({"opacity":"1"})})
            bar1.animate({"width":"30px"},function(){bar1.css({'rotate':"0deg","transform":"translateY(8px)"})})
            bar1.animate({"width":"30px"},function(){bar1.css({"transform":"translateY(0px)"})});
        }
        else{
            bar1.animate({"width":"30px"},function(){bar1.css({"transform":"translateY(8px)"})});
            bar1.animate({"width":"30px"},function(){bar1.css({'rotate':"45deg","transform":"translateY(-4px)"})})
            bar2.animate({"width":"30px"},function(){bar2.css({"opacity":"0"})})
            bar3.animate({"opacity":"1"},function(){bar3.css({"transform":"translateY(-8px)"})})
            bar3.animate({"opacity":"1"},function(){bar3.css({"transform":"translateY(4px)",'rotate':"-45deg"})})
        }
    })
    // ##########################
    // transition topic list
    $(".group-2,.group-3,.group-4,.group-5").fadeOut()
    $('.list-topics ul li').on('click', function(e){
        $(this).addClass("border-bottom")
        $(this).siblings().removeClass("border-bottom")
        var myBoxTarget = $(this).children().data('topics')
        $(myBoxTarget).siblings('.all-group').fadeOut(100)
        $(myBoxTarget).delay(300)
        $(myBoxTarget).fadeIn(100)
    })
    // ##########################
    // animation how it work section
    $(window).on("scroll",function(){
        var offste1 = $(".how-it-work").offset().top;
        var myAfter1 = $('.how-it-work .i-1');
        var myAfter2 = $('.how-it-work .i-2');
        var myAfter3 = $('.how-it-work .i-3');
        var myHeight = $(window).scrollTop() - offste1 + 100;
        $('.how-it-work .info .span').css({'height': myHeight})
        if($(window).scrollTop() > offste1 -100){
            myAfter1.addClass("my-after")
            if($(window).scrollTop() > offste1 + 150){
                myAfter2.addClass("my-after")
            }else{
                myAfter2.removeClass("my-after")
            }
            if($(window).scrollTop() > offste1 + 400){
                myAfter3.addClass("my-after")
            }else{
                myAfter3.removeClass("my-after")
            }
        }else{myAfter1.removeClass("my-after")}
    })
    // ##########################
    //collapse on Questions section
    $('.btn-toggle-1').parent().siblings().children('.btn-toggle').siblings().slideUp(200)
    $('.btn-toggle-1').addClass("active-2")
    $('.btn-toggle').on('click',function(){
        $(this).addClass("active-2")
        $(this).siblings().slideDown(200)
        $(this).parent().siblings().children('.btn-toggle').removeClass('active-2')
        $(this).parent().siblings().children('.btn-toggle').siblings().slideUp(200)
    })
    // ##########################
    // cahnge active links at scrolling 
    $(window).on('scroll',function(){
        if($(window).scrollTop()> $('#home').offset().top - 1){
            $(".my-list a").removeClass('active-color-text')
            $('.my-list a[href="#home"]').addClass("active-color-text")
        }
        if($(window).scrollTop()> $('#browos').offset().top - 1){
            $(".my-list a").removeClass('active-color-text')
            $('.my-list a[href="#browos"]').addClass("active-color-text")
        }
        if($(window).scrollTop()> $('#work').offset().top - 1){
            $(".my-list a").removeClass('active-color-text')
            $('.my-list a[href="#work"]').addClass("active-color-text")
        }
        if($(window).scrollTop()> $('#FAQS').offset().top - 1){
            $(".my-list a").removeClass('active-color-text')
            $('.my-list a[href="#FAQS"]').addClass("active-color-text")
        }
        if($(window).scrollTop()> $('#contact').offset().top - 1){
            $(".my-list a").removeClass('active-color-text')
            $('.my-list a[href="#contact"]').addClass("active-color-text")
        }
    })
        // ##########################
        // trnsition form on contact
        $(".part-form input, .part-form textarea").on({
            focus: function(){ $(this).siblings().css({'top': '30px','fontSize':'14px',"color":'#717275'})},
            blur: function(){ $(this).siblings().css({'top': '39px','fontSize':'16px',"color":'#000'})}
        })
})