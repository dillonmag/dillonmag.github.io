// http://stackoverflow.com/questions/2898740/iphone-safari-web-app-opens-links-in-new-window
$("a").click(function (event) {
    event.preventDefault();
    window.location = $(this).attr("href");
});