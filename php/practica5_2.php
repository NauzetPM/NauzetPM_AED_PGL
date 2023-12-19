<?php
$mivar=[];
$mivar[0]="uno";
//echo $mivar[0];
$arr1=$mivar;
$arr2=&$mivar;
$arr1[0] = "una variación"; $arr2[0] =
"variando array2 ";
echo "mivar = $mivar[0] <br>";
echo "arr1 = $arr1[0]";
?>