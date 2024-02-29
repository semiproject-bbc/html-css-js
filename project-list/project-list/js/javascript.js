// modal
const $shipment = document.querySelector('.shipment');
const $modal = document.querySelector('.modal');
const $closemodal = document.querySelector('.closebtn');

$shipment.addEventListener('click', function() {
    $modal.style.display = 'block';
});

$closemodal.addEventListener('click', function() {
    $modal.style.display = 'none';
});

// 입력
const $shipmentpush = document.querySelector('.shipmentpush');
const $shipmentvalue = document.getElementById('shipmentvalue');

$shipmentpush.addEventListener('click', function() {
    if($shipmentvalue.value == '') {
        alert('아무것도 입력하지 않았습니다.');
    }else {
        alert($shipmentvalue.value);
        $modal.style.display = 'none';
    }
});