const $logout = document.getElementById("logout");
const $newRegist = document.getElementById("newRegist");

$logout.addEventListener('click', function(){
    alert('로그아웃 하시겠습니까?');
});

$newRegist.addEventListener('click', function(){
    alert('현재 페이지를 벗어나면 저장되지 않습니다. 새로운 프로젝트를 등록하시겠습니까?');
})

$newRegist.addEventListener('mouseover', function(){
    document.querySelector("#newRegist").style.backgroundColor = "#F97C02";
});

$newRegist.addEventListener('mouseout', function(){
    document.querySelector("#newRegist").style.backgroundColor = "#fca652";
});

