$(document).ready(function() {

    $('#lighting-candle').click(function() {
        $(".candle").toggleClass("candle-after-active");
        $(".candleFlame").toggleClass("candleFlame-active");
        $(".numberCandle1").toggleClass("numberCandle1-after-active");
        $(".numberCandle2").toggleClass("numberCandle2-after-active");
        $(".numberFlame").toggleClass("numberFlame-active");
    });

    $('#turn-on-music').click(function() {
        $('.audio').addClass("audio-active");
        document.getElementById('audio').play();
    });

    $('#turn-off-music').click(function() {
        $('.audio').removeClass("audio-active");
        document.getElementById('audio').load();
    });

});