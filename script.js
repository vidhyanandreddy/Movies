function showSidebar(){
    const sidebar= document.querySelector('.sidebar')
    sidebar.style.display='flex'
}
function hideSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}
$(window).on('load',function(){
    $(".loader").fadeOut(2000);
    $("main,footer").fadeIn(4000);
});
