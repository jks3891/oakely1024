AOS.init();

// 선글라스 페이지 카테고리
function CategoryBorder() {
  $(".sunglass-page__category ul li").first().addClass("active");

  $(".sunglass-page__category ul li").click(function () {
    let $this = $(this);

    $(".sunglass-page__category ul li").removeClass("active");
    $this.addClass("active");
  });
}

CategoryBorder();

// 상품 배열
function ProdArrange() {
  $(".suglass-page__filter-line .pc-filter").first().addClass("active");

  $(".suglass-page__filter-line .pc-filter").click(function () {
    let $this = $(this);

    $(".suglass-page__filter-line .pc-filter").removeClass("active");
    $this.addClass("active");
  });

  // 	pc 화면 4단 보기
  $(".suglass-page__filter-line .pc-step-view").click(function () {
    let $this = $(this);

    let has = $(".suglass-page__prod ul").hasClass("active");

    if (has) {
      $(".suglass-page__prod ul").removeClass("active");
      $(".suglass-page__filter-line .pc-step-view").removeClass("active");
      $(".suglass-page__bottom").removeClass("active");
    } else {
      $(".suglass-page__prod ul").addClass("active");
      $(".suglass-page__filter-line .pc-step-view").addClass("active");
      $(".suglass-page__bottom").addClass("active");
    }
  });

  // 	모바일 화면 3단 보기
  $(".suglass-page__filter-line .mobile-step-view").click(function () {
    let $this = $(this);

    let has = $(".suglass-page__prod ul").hasClass("active");

    if (has) {
      $(".suglass-page__prod ul").removeClass("active");
      $(".suglass-page__filter-line .mobile-step-view").removeClass("active");
    } else {
      $(".suglass-page__prod ul").addClass("active");
      $(".suglass-page__filter-line .mobile-step-view").addClass("active");
    }
  });
}

ProdArrange();

// 필터창 보여지기
function ShowFilter() {
  $(".pc-icon-filter").click(function () {
    let $this = $(this);

    let has = $this.hasClass("active");

    if (has) {
      $(".pc-icon-filter").removeClass("active");
      $(".suglass-filter").stop().slideUp(500);
    } else {
      $(".pc-icon-filter").addClass("active");
      $(".suglass-filter").stop().slideDown(500);
    }
  });

  $(".filter-btn2").click(function () {
    $(".pc-icon-filter").removeClass("active");
    $(".suglass-filter").stop().slideUp(500);
  });

  $(".filter-btn1").click(function () {
    $(".filter-check").removeClass("active");
  });
}

ShowFilter();

// 모바일 필터창 보여지기
function ShowFilter__Mobile() {
  $(".mobile-icon-filter").click(function () {
    let $this = $(this);

    let has = $this.hasClass("active");

    if (has) {
      $(".mobile-icon-filter").removeClass("active");
      $(".mobile-suglass-filter").stop().slideUp(500);
    } else {
      $(".mobile-icon-filter").addClass("active");
      $(".mobile-suglass-filter").stop().slideDown(500);
    }
  });

  $(".filter__close-btn").click(function () {
    $(".filter-check").removeClass("active");
    $(".mobile-icon-filter").removeClass("active");
    $(".mobile-suglass-filter").stop().slideUp(500);
  });
  $(".filter-btn2").click(function () {
    $(".mobile-suglass-filter .icon-filter").removeClass("active");
    $(".mobile-icon-filter").removeClass("active");
    $(".mobile-suglass-filter").stop().slideUp(500);
  });
}

ShowFilter__Mobile();

// 모바일 상품 배열
function ProdArrange__Mobile() {
  $(".mobile-suglass-filter__top p").first().addClass("active");
  $(".mobile-suglass-filter__top p").click(function () {
    let $this = $(this);

    $(".mobile-suglass-filter__top p").removeClass("active");
    $this.addClass("active");
  });
}

ProdArrange__Mobile();

// 모바일 카테고리
function ProdCategory__Mobile(no) {
  $(".filter-category").first().addClass("active");
  $(".filter-category").click(function () {
    let $this = $(this);

    $(".filter-category").removeClass("active");
    $this.addClass("active");
  });

  $(".filter-category-ctn").first().addClass("active");
  $(`.filter-category-${no}`).click(function () {
    $(".filter-category-ctn").removeClass("active");
    $(`.filter-category-ctn-${no}`).addClass("active");
  });
}

ProdCategory__Mobile();
ProdCategory__Mobile(1);
ProdCategory__Mobile(2);
ProdCategory__Mobile(3);
ProdCategory__Mobile(4);
ProdCategory__Mobile(5);

// 상품 스와이퍼 슬라이드
function ProdSwiper() {
  const swiper = new Swiper(".suglass-page .swiper", {
    loop: true,
    speed: 500,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}

ProdSwiper();

// 필터창 체크박스
function FilterCheck() {
  $(".filter-check").click(function () {
    let $this = $(this);

    let has = $this.hasClass("active");

    if (has) {
      $this.removeClass("active");
    } else {
      $this.addClass("active");
    }
  });
}

FilterCheck();

// 상품 페이지 바텀 클릭
function PageBottom() {
  $(".suglass-page__bottom p").first().addClass("active");
  $(".suglass-page__bottom p").click(function () {
    let $this = $(this);

    $(".suglass-page__bottom p").removeClass("active");
    $this.addClass("active");
  });

  $(".bottom-arrow-prev").click(function () {
    let $current = $(".suglass-page__bottom p.active");
    let $prev = $current.prev("p"); // 이전 p 태그 찾기

    if ($prev.length > 0) {
      $current.removeClass("active");
      $prev.addClass("active");
    }
  });

  // 다음 화살표 클릭 시 다음 p 태그로 active 클래스 이동
  $(".bottom-arrow-next").click(function () {
    let $current = $(".suglass-page__bottom p.active");
    let $next = $current.next("p"); // 다음 p 태그 찾기

    if ($next.length > 0) {
      $current.removeClass("active");
      $next.addClass("active");
    }
  });
}

PageBottom();

// 상품 페이지 하트
function HeartColor() {
  $(".icon-heart").click(function () {
    let $this = $(this);

    let has = $this.hasClass("active");

    if (has) {
      $this.removeClass("active");
    } else {
      $this.addClass("active");
    }
  });
}

HeartColor();