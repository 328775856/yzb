        $(function(){                
                //logo引入
               // $('#float').fadeIn(1000).fadeOut(2000);
                //微信搜索栏
                var $searchBar = $('#searchBar'),
                $searchResult = $('#searchResult'),
                $searchText = $('#searchText'),
                $searchInput = $('#searchInput'),
                $searchClear = $('#searchClear'),
                $searchCancel = $('#searchCancel');

            function hideSearchResult(){
                $searchResult.hide();
                $searchInput.val('');
            }
            function cancelSearch(){
                hideSearchResult();
                $searchBar.removeClass('weui-search-bar_focusing');
                $searchText.show();
            }

            $searchText.on('click', function(){
                $searchBar.addClass('weui-search-bar_focusing');
                $searchInput.focus();
            });
            $searchInput
                .on('blur', function () {
                    if(!this.value.length) cancelSearch();
                })
                .on('input', function(){
                    if(this.value.length) {
                        $searchResult.show();
                    } else {
                        $searchResult.hide();
                    }
                })
            ;
            $searchClear.on('click', function(){
                hideSearchResult();
                $searchInput.focus();
            });
            $searchCancel.on('click', function(){
                cancelSearch();
                $searchInput.blur();
            });
            //panel切换
            $('.panel').eq(0).show().siblings('.panel').hide();
            $('.weui-navbar__item').on("click",function(){
                $(this).addClass('weui-bar__item_on').siblings('.weui-bar__item_on').removeClass('weui-bar__item_on');
                var $index=$(this).index();
                $('.panel').eq($index).show().siblings('.panel').hide();
                switch($index){
                    case 0:
                    changeImg(img);
                    break;
                    case 1:
                    changeImg(img2);
                    break;
                    case 2:
                    changeImg(img3);
                    panel3_fadeIn();
                    break;
                };
                $(document).scrollTop(0);
            });
            ////图片数组
            var img2=['1','2','3','4','5'];
            var img3=['bing','bing2','sugar'];
            var img=['hl','wx'];
            var imgs=['1-1','1-2','1-3','1-4','1-5','1-6','1-7','1-8','1-9'];
            var imgs2=['2-1','2-2','2-3','2-4','2-5','2-6','2-7','2-8','2-9'];
            var imgs3=['3-1','3-2','3-3','3-4','3-5','3-6','3-7','3-8','3-9'];
            var food=['1-1','1-2','1-3']
            var flag=true;
            //改变轮播图片
            function changeImg(num){
                var arr=num;
                var i=0;
                $('#swiper-container1 .swiper-wrapper').children('div').remove();
                $('#swiper-container1 .swiper-pagination').children('span').remove();
                for(;i<arr.length;i++){
                    $('#swiper-container1 .swiper-wrapper').append('<div class="swiper-slide weui-flex__items img"></div>');
                    $('#swiper-container1 .swiper-wrapper').find('div').eq(i).css('background-image','url(images/'+arr[i]+'.jpg)');
                    $('#swiper-container1 .swiper-pagination').append('<span class="swiper-pagination-bullet"></span>');   
                }; 
            };
                  //调用changeImg并初始化swiper-container1
            changeImg(img);       
                var mySwiper = new Swiper('#swiper-container1', {
                autoplay: 3000,//可选选项，自动滑动
                autoplayDisableOnInteraction : false,
                pagination:'.swiper-pagination',
                paginationClickable :false,
                speed:300,
                observer:true,//修改swiper自己或子元素时，自动初始化swiper  
            });

            //改变panel1中的图片
            function changeImg2(num){
                var arr=num;
                var i=0;
                for(;i<arr.length;i++){
                    $('#swiper-container2 .swiper-wrapper img').eq(i).attr('src','images/img/food/'+arr[i]+'.jpg');
                    var imgH=parseInt($('#swiper-container2 .swiper-wrapper img').eq(i).height());
                    var wH=parseInt($(window).height());
                    var minus=imgH-wH;
                    //alert(minus)
                    if(minus<0){
                         $('#swiper-container2 .swiper-wrapper img').eq(i).css({'margin-top':-minus/2+'px'});
                    }
                };
            };
            //阴影点击淡入
            $('#panel1 img').click(function(e){
                $('#dshow').css('opacity','1');
                $('#dshow').css('z-index','5000');
                if($('#dshow').hide()){
                    $('#dshow').show();
                    //判断是面板哪个部分被点击对应加载相应图片并初始化轮播组件                     
                    var index=$('#panel1 a').index();
                    var id=$(this).parent().attr('id');
                    switch(id){
                        case 'p1':
                        changeImg2(imgs);
                        startSwiper();
                        break;
                        case 'p2':
                        changeImg2(imgs2);
                        startSwiper();
                        break;
                        case 'p3':
                        changeImg2(imgs3);
                        startSwiper();
                        break;
                    };  
                    //alert(id)
                };    
                //淡出效果
                if($('#dshow').show()){
                    $('#dshow img').click(function(e){
                        $('#dshow').css('opacity','0');
                        $('#dshow').css('z-index','-1');
                    });
                };
            });
            //初始化swiper2
            var mySwiper2 = new Swiper('#swiper-container2', {
                        autoplay: !flag,//可选选项，自动滑动 
                        pagination: {
                            clickable :flag,
                        },
                        observer:true,
                        prevButton:'.swiper-button-prev',
                        nextButton:'.swiper-button-next',
                        onSlideChangeStart:function(swiper){

                        }
                    }); 
            function swiperInit(className){
                var swiper3 = new Swiper('.swiper-container'+className, {
                direction: 'vertical',
                slidesPerView: 'auto',
                observer:true,
                freeMode: true,
                zoom:true,
                });
            }
            function startSwiper(){
                swiperInit(1),swiperInit(2),swiperInit(3),swiperInit(4),swiperInit(5),swiperInit(6),swiperInit(7),swiperInit(8),swiperInit(9);
            }
            
            function panel3_fadeIn(){
                //启用滚动监听商品
                new WOW().init();
            };
        })