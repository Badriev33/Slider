<?php
$data = $_POST;


$number = 'https://klike.net/uploads/posts/2019-05/1556708032_1.jpg, https://photo-and-travels.ru/wp-content/uploads/2017/04/DSC_0005.jpg,
https://www.milujemefotografii.cz/wp-content/uploads/2019/02/raw.jpg';

$numjs = json_encode($number);

echo "$numjs"


?>


	<?php
    $data = $_POST;
$img1 = file_get_contents('https://profotovideo.ru/images/2019/09/09-rawvsjpg/rawvsjpg01.jpg');
file_put_contents('upload/img.jpg', $img);

$img2 = file_get_contents('https://photo-and-travels.ru/wp-content/uploads/2017/04/DSC_0005.jpg');
file_put_contents('upload/img1.jpg', $img);

$img3 = file_get_contents('https://www.milujemefotografii.cz/wp-content/uploads/2019/02/raw.jpg');
file_put_contents('upload/img2.jpg', $img);

?>