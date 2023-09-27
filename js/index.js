
const fixed = document.querySelector(".header_fixed");
const $bg_open = document.querySelectorAll(".header .header-container .header_s2 .s2_menu .s2_list")
const $hover = document.querySelectorAll(".header .header-container .header_s2 .s2_menu .s2_list>a")

const $slick_hover = document.querySelectorAll("#main_2 .slide1573 .slick .slide-item")

const $slick_hover_A = document.querySelectorAll("#main_2 .slide1573 .slick .slide-item a")


const $sublist = document.querySelectorAll(".header .header-container .header_s2 .s2_menu .sublist")

const up_down = document.querySelector(".btn_fixed .btn_side")


        // 슬릭 슬라이드
        $(".slick.content-slick").slick({
            slidesToShow:6,
            dots: false,
            arrows: true,
            ceterMode: true,
            autoplay: false,
            slidesToScroll: 1,
            autoplaySpeed: 0,
            draggable : false,
            infinite : false,
            initialSlide: 0,
            
        })
        $(".slick.menu-content-slick").slick({
            slidesToShow:6,
            dots: false,
            arrows: true,
            ceterMode: true,
            autoplay: false,
            slidesToScroll: 1,
            autoplaySpeed: 0,
            draggable : false,
            infinite : false,
            initialSlide: 0,
            prevArrow: $('#arrow_prev'),
            nextArrow: $('#arrow_next')
        })
        
        
        $('.slick.menu-content-slick').on('afterChange', function() {
            var dataId = $('.slick-current').attr("data-slick-index");    
            // console.log(dataId);
            if(dataId == 0){
                $("#arrow_prev").addClass("slick-disabled");
            }else if(dataId == 3){
                
                $("#arrow_next").addClass("slick-disabled");
            }else{
                $("#arrow_prev, #arrow_next").removeClass("slick-disabled");
            }
        });
        $('.slick.menu-content2-slick').on('afterChange', function() {
            var dataId = $('.slick-current').attr("data-slick-index");    
            // console.log(dataId);
            if(dataId == 0){
                $("#arrow_prev").addClass("slick-disabled");
            }else if(dataId == 3){
                
                $("#arrow_next").addClass("slick-disabled");
            }else{
                $("#arrow_prev, #arrow_next").removeClass("slick-disabled");
            }
        });
        
        $('button.slick-prev').click(function(e){
            let i = $(this)
            
        });
        $('button.slick-next').click(function(e){
            let i = $(this).index();
            
        });

        $bg_open.forEach((e,i) => {
            e.addEventListener("mouseover", function(){
                //    alert("open")
                fixed.classList.add("open")
                
                // $hover.classList.add("on")
                
                $sublist.forEach((ele) => {
                    ele.style.opacity = "1"
                    ele.style.transition = " all 1s 0.4s"
                })
                e.addEventListener("mouseout" , function(){
                    fixed.classList.remove("open")
                    $sublist.forEach((ele) => {
                        ele.style.opacity = "0"
                        // trs 걸려있어서 빠져나갈때도 느리게 빠져나감 그래서 초기화한것
                        ele.style.transition = ""
                
                    });
                    
                })
                
                

        })
    });
    
    
    


//kr과 ▼ 이미지를 click했을때 아래에 hs3_submenu가 다 나와줘야한다.
let lang = document.querySelector(".hs3_lang"); 
lang.addEventListener("click", function(){
    document.querySelector(".hs3_submenu").classList.toggle("on")
})


// 스크롤 이벤트
document.addEventListener("scroll", function(){
    
    // 스크롤 위치 알아보기 위해서 postion
    let postion = window.scrollY
    // console.log(postion)
    // 상단헤더 fixe bg-white
    if(postion >= 100){
            fixed.classList.add("on")
        }else{
                fixed.classList.remove("on")
            }
            
            //사이드 버튼 up_down
            up_down.classList.toggle("on")
            if(postion >= 300){
                up_down.style.transform = " scaleY(-1)"
            }else{
                up_down.style.transform = " scaleY(1)";
            }
            
        })


// 사이드 버튼 up_down 클릭이벤트
up_down.addEventListener("click", function(){
    let postion = window.scrollY
    
    if(postion >= 100){
        // 클릭시 최상단으로 이동
        window.scrollTo({
        top: 0,
        behavior: "smooth"
        });
    }else{
        // 클릭시 최하단으로 이동
        window.scrollTo({ 
        top: document.body.scrollHeight, 
        behavior: "smooth" 
        });
    }
    
    
})

//햄버거 버튼 클릭 이벤트
let ham_line = document.querySelector(".hamberger");
let ham_sub = document.querySelector(".hamberger_submenu");

ham_line.addEventListener("click", function() {
    ham_sub.classList.toggle("on");
    ham_line.classList.toggle("on");

    // 햄버거 메뉴가 활성화되면 스크롤을 없애고, 비활성화되면 스크롤을 복원
    if (document.body.style.overflow !== 'hidden') {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'scroll';
    }
});
