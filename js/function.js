// ブラウザサイズを自動で取得してiOS対策
$(document).ready(function () {
    var hSize = $(window).height();
    $(".full").height(hSize); // ブラウザの縦のサイズを取得
  });
  $(window).resize(function () { // ページをリサイズした時の処理
    var hSize = $(window).height();
    $(".full").height(hSize); // ブラウザの縦のサイズを取得
  });