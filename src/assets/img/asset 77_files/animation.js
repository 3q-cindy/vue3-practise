$(function () {
    var elements = document.querySelectorAll( '.upper' );
    var words = [];

    $.each( elements , function( i , val ){

        var sentence = this.textContent;
        words[i] = sentence.split(' '); // 取得した文字列を単語単位に分割している

        this.innerHTML = null;

        $.each( words[i] , function( j , val ){

            var word = document.createElement('span');
            word.className = 'word'; // 分割した単語の要素にcssのクラスを.wordとして追加
            elements[i].appendChild(word);

            words[i][j] = val.split(''); // 単語単位に分割した文字列を文字単位に分割

            $.each( words[i][j] , function( k , val ){

                var string = document.createElement('span');
                string.className = 'string'; // 分割した文字の要素にcssのクラスを.stringとして追加
                string.innerHTML = words[i][j][k];

                word.appendChild(string);

            });

        });

    });
});
$(function () {
    var elements = document.querySelectorAll( '.lower' );
    var words = [];

    $.each( elements , function( i , val ){

        var sentence = this.textContent;
        words[i] = sentence.split(' '); // 取得した文字列を単語単位に分割している

        this.innerHTML = null;

        $.each( words[i] , function( j , val ){

            var word = document.createElement('span');
            word.className = 'word'; // 分割した単語の要素にcssのクラスを.wordとして追加
            elements[i].appendChild(word);

            words[i][j] = val.split(''); // 単語単位に分割した文字列を文字単位に分割

            $.each( words[i][j] , function( k , val ){

                var string = document.createElement('span');
                string.className = 'string'; // 分割した文字の要素にcssのクラスを.stringとして追加
                string.innerHTML = words[i][j][k];

                word.appendChild(string);

            });

        });

    });
});

$(function () {
/* 読み込み完了 */
$(window).on('load', stopload);

/* 10秒経ったら強制的にローディング画面を非表示にする */
setTimeout('stopload()',10000);

/* ローディング画面を非表示にする処理 */
    function stopload(){
        $('#loader-bg').delay(900).fadeOut(800);
    }
});


$(window).on('load',function(){
    var i=0;
    setTimeout(function(){
        setInterval(function(){
            $('.upper .string').eq(i).addClass('fade_up_en');
            i++;
            if(i >= $('.upper .string').length){
                i=0;
            }
        },70);
    },1000);

});
$(window).on('load',function(){
    var i=0;
    setTimeout(function(){
        setInterval(function(){
            $('.lower .string').eq(i).addClass('fade_up_en');
            i++;
            if(i>=$('.lower .string').length) i=0;
        },70);
    },1000);
});
$(window).on('load',function(){

    setTimeout(function(){
        $("h2.main_title_en__anime").addClass("fade_up_en02");
    },800);
    setTimeout(function(){
        $(".main_title_ja").addClass("fade_up_ja");
    },800);


    //メインビジュアル
    setTimeout(function(){
        $("img.main_img__anime").addClass("main_visual_shrink");
    },200);
    setTimeout(function(){
        $(".main_visual__img__anime__wrap").addClass("main_visual__img__anime__wrap__anime");
    },400);

    setTimeout(function(){
        $(".scroll_more__anime img").addClass("scroll_more__anime__active");
    },300);

});



