$(document).ready(function() {

    $(".rotate").textrotator({
        animation: "fade",
        separator: ",",
        speed: 1500
    });

    $(".accordion").accordion({
        firstChildExpand: true,
        multiExpand: true
    });

});
