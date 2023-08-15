// JavaScript Document

$(document).ready(function() {
      // 設定圖片數組，放置要輪播的圖片路徑
      var images = [
        "images/train.jpg",
        "images/sunset.jpg",
		"images/watertop-sm.jpg",
      ];

      var currentIndex = 0; // 目前顯示的圖片索引

      // 更換圖片的函式
      function changeImage() {
        $("#my-image").fadeOut(1000,function() {
          // 在淡出動畫完成後更換圖片並淡入
          $(this).attr("src", images[currentIndex]);
          $(this).fadeIn(1000);
        });

        currentIndex = (currentIndex + 1) % images.length; // 取模計算下一張圖片的索引
      }

      // 每隔一段時間（這裡設定為5000毫秒，即5秒），調用changeImage函式來更換圖片
      setInterval(changeImage, 5000);

});

