$(() => {
    const $menuBtn = $(".menu-button");
    const $menuList = $("#menu-list");
    
    $menuBtn.on("click", function(event) {
        event.preventDefault();
        $menuList.toggleClass("display");
    })
    
    const $item = $("#menu-list a");

    $item.each(function() {
        $(this).on("click", function(event) {
            event.preventDefault();
            $menuList.removeClass("display");
            
        })
    })
})