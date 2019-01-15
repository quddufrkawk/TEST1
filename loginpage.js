alert("!");

$('.tabs .tab').click(function(){
    if ($(this).hasClass('signin')) {
        $('.tabs .tab').removeClass('active');
        $(this).addClass('active');
        $('.cont').hide();
        $('.signin-cont').show();
    } 
    if ($(this).hasClass('signup')) {
        $('.tabs .tab').removeClass('active');
        $(this).addClass('active');
        $('.cont').hide();
        $('.signup-cont').show();
    }
});

$('.container .bg').mousemove(function(e){
    var amountMovedX = (e.pageX * -1 / 30);
    var amountMovedY = (e.pageY * -1 / 9);
    $(this).css('background-position', amountMovedX + 'px ' + amountMovedY + 'px');
});

$('.checkbox').click(function()
{
    alert("브라우저를 닫더라도 로그인이 계속 유지될 수 있습니다","/n",
    "로그인 유지 기능을 사용할 경우 다음 로그아웃 전 까지는 로그인이 유지됩니다.","/n",
    "단, PC방, 학교, 도서관 등 공공장소에서 이용 시 개인정보가 유출될 가능성이 있으니 꼭 로그아웃을 해주세요.");
});
