let btn1 = document.querySelector('.btn1');
let btn2 = document.querySelector('.btn2');
let btn3 = document.querySelector('.btn3');



btn1.addEventListener('click', function() {
// 클릭했을 때 문장을 실행시켜줘.
  document.querySelector('.slide-list').style.transform = 'translateX(0)';
  //querySelector html을 가져오겠다. style은 일종의 css 능력이다.
})

btn2.addEventListener('click', function() {
  // 클릭했을 때 문장을 실행시켜줘.
    document.querySelector('.slide-list').style.transform = 'translateX(-100vw)';
    //querySelector html을 가져오겠다. style은 일종의 css 능력이다.
  })

btn3.addEventListener('click', function() {
    // 클릭했을 때 문장을 실행시켜줘.
    document.querySelector('.slide-list').style.transform = 'translateX(-200vw)';
    //querySelector html을 가져오겠다. style은 일종의 css 능력이다.
  })

// 여기서의 원리는 그러니깐 붙어있는 그림 세장이 있는데, 이걸 한쪽 방향으로 돌린다고 생각하면 된다.


$(function () {
  $(".sub").css({display: "none"});
  
  $(".lnb-menu-list li, .drop-down").hover(function () {
    // hover시 서브 메뉴가 보이게
    $(".sub").stop().slideDown(500);
  }, function() {
    $(".sub").stop().slideUp(500);
    // hover되지 않았을 경우 서브 메뉴가 보이게
  });

  $(".drop-down > li").hover(function () {
    let i = $(this).index();
    $(".lnb-menu-list li").find("a").eq(i).addClass("on");
  }, function() {
    let i = $(this).index();
    $(".lnb-menu-list li").find("a").eq(i).removeClass("on");
  })
})