---
path: test code
date: 2019-09-13T07:38:14.241Z
title: test code
---
```
$(function () {
    //タブ
    //$('.tab-list02').tab();
    //SP時タブレスポンシブ時リスト化
    if (window.matchMedia('(max-width: 767px').matches) {
      $('.tab-list02').before('<div class="selected-item"><p>全て</p></di>');
      var display = $('.selected-item')
      var selectBox = $('.tab-list02');
      selectBox.hide();
      display.on('click', function () {
        selectBox.toggle();
      });
      selectBox.on('click', function () {
        selectBox.hide();
      });
      selectBox.children('li').children('a').on('click', function () {
        var selectItemText = $(this).text();
        $(display).children('p').text(selectItemText);
      });
    }
    $('.tab-list02 a').on('click', function(){
      alert($(this));
    });

  });
```
