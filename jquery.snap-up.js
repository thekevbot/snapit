$(document).ready(function(){
    if ($('.snap-btn').length){
        $('body').append('<style>.snap-up{width:100%;height:100%;position:fixed;top:0;left:0;z-index:9999;visibility:hidden;pointer-events:none;background-color:rgba(255,252,0,.6)}.snap-up div{display:inline-block;padding:16px;position:absolute;top:50%;left:50%;transform:translate(-50%,-25%);border-radius:17.5%;background-color:white;opacity:0;transition:all 0.2s ease-in-out}.snap-up div img{height:100%}.snap-up.show{visibility:visible;pointer-events:auto}.snap-up.show div{opacity:1;transform:translate(-50%,-50%)}</style>')
    }
    $('.snap-btn').each(function(){
        var user = $(this).data('user'),
            size = $(this).data('size'),
            type = $(this).data('type').toUpperCase(),
            code = 'https://feelinsonice.appspot.com/web/deeplink/snapcode?username=' + user + '&size=' + size + '&type=' + type;
        var el = $('<div class="snap-up"><div><img src="' + code + '"></div></div>');
        $('body').append(el)
        $(this).click(function(){
            el.toggleClass('show');
        })
        $(el).click(function(){
            $(this).toggleClass('show');
        })
    })
})
