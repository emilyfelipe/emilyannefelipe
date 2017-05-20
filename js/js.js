// JavaScript Document

// Responsive Nav Menu
 $(document).ready(function() {
 $('.btn-close').fadeOut(200);
 var open = false;

 $('.button a').on('click',function() {
 if(open === false) {
 $('.overlay, .btn-close').fadeIn(200);
 $('nav ul li, .btn-open').fadeOut(200);
 open = true;
 } else {
 $('.overlay, .btn-close').fadeOut(200);
 $('nav ul li, .btn-open').fadeIn(200);
 open = false;
 }
 });
 $('.overlay').on('mouseup', function(){
 $('.overlay, .btn-close').fadeOut(200);
 $('nav ul li, .btn-open').fadeIn(200);
 open = false;
 });
 $('.wrap').on('mouseup', function(){
 return false;
 });
});

// Google Analytics
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-99597049-1', 'auto');
  ga('send', 'pageview');
