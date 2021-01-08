$(function(){
   
    function page_titleFlash() {
        $("#home-page").click(function() {
            $(".homepage__name").css({color:' #4f8fe4'});
            $(".homepage__name").animate({color:'white'},1000);
            $(".homepage__position").css({color:' #4f8fe4'});
            $(".homepage__position").animate({color:'white'},1000);
            
        })
        $("#resume-page").click(function() {
            $(".page__title:contains('RESUME')").css({color:' #4f8fe4'});
            $(".page__title:contains('RESUME')").animate({color:'white'},1000);
        })
        $("#skill-page").click(function() {
            $(".page__title:contains('SKILLS')").css({color:' #4f8fe4'});
            $(".page__title:contains('SKILLS')").animate({color:'white'},1000);
        })
        $("#blog-page").click(function() {
            $(".page__title:contains('GALLERY')").css({color:' #4f8fe4'});
            $(".page__title:contains('GALLERY')").animate({color:'white'},1000);
        })
        $("#contact-page").click(function() {
            $(".page__title:contains('CONTACT')").css({color:' #4f8fe4'});
            $(".page__title:contains('CONTACT')").animate({color:'white'},1000);
        })
    }

    function home_logoFlash() {
        // 使用background-color渐变色记得引用另一个jquery库
        $('.linkedin-background').animate({backgroundColor:'white',opacity:'1'},2000);
        $('.git-background').animate({backgroundColor:'white',opacity:'1'},2000);

        $(".homepage__name").animate({color:'white'},1000);
        $(".homepage__position").animate({color:'white'},1000);
    }
    $('.navbar__item[href=HOME]').click(function() {
        $('.linkedin-background').css({backgroundColor:'#3b5998',opacity:'0.4'});
        $('.git-background').css({backgroundColor:'black',opacity:'0.4'});
        $('.linkedin-background').animate({backgroundColor:'white',opacity:'1'},2000);
        $('.git-background').animate({backgroundColor:'white',opacity:'1'},2000);
    })
    $('.navbar__item[href!=HOME]').click(function() {
        $('.linkedin-background').css({backgroundColor:'#3b5998',opacity:'0.4'});
        $('.git-background').css({backgroundColor:'black',opacity:'0.4'});
    })
    
    
    function resume_skillFlash() {
        $('#resume-page').click(function() {
            $('.bar').css({width:'0%'});
            $('#web75').animate({width:'85%'},1000)
            $('#graphic80').animate({width:'75%'},1000)
        })
        $('#resume-page').click(function() {
            $('#html85').animate({width:'85%'},1000)
            $('#css80').animate({width:'80%'},1000)
            $('#js70').animate({width:'85%'},1000)
            $('#py80').animate({width:'90%'},1000)
            $('#java70').animate({width:'76%'},1000)
            $('.skill__title').animate({opacity:'1'},800);
        })
        $('.navbar__item:not(#resume-page)').click(function() {
            $('.skill__title').css({opacity:'0'});
        })
    }

    function skill_listTitle(){
    // 选中前面的class，在用‘:not(#skill-page)’来排除掉不想要的class
    $('.navbar__item:not(#skill-page)').click(function() {
        $('#skill-list').animate({opacity:'0'});
        $('.serviceItem__name').animate({opacity:'0'});
    })
    $('#skill-page').click(function()  {
        $('#skill-list').animate({opacity:'1'},1000);
        $('.serviceItem__name').animate({opacity:'1'},2000);

    })
    }

    function skill_listHover(){
        $('.serviceItem__name').mouseover(function() {
            $(this).animate({opacity:'0.7'});
            // $(this).css({opacity:'0.7'});
            // $(this).css({width:'30px'})
        })
        $('.serviceItem__name').mouseout(function() {
            $(this).animate({opacity:'1'});
        })
    }

    function blog_toTheTop() {


    }

    page_titleFlash();
    home_logoFlash();
    resume_skillFlash();
    skill_listTitle();
    skill_listHover();
    blog_toTheTop();
})