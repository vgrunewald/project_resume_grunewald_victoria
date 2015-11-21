$(document).ready(function() {

    $(".rotate").textrotator({
        animation: "flip",
        separator: ",",
        speed: 2000
    });

    $(".accordion").accordion({
        firstChildExpand: true,
        multiExpand: true
    });

});
