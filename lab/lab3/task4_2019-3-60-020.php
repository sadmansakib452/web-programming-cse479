<?php

function bubbleSort($arr)
{
    $n = count($arr);
    for ($i = 0; $i < $n; $i++) {
        for ($j = $i + 1; $j < $n; $j++) {
            if ($arr[$i] < $arr[$j]) {
                $temp = $arr[$i];
                $arr[$i] = $arr[$j];
                $arr[$j] = $temp;
            }
        }
    }
    return $arr;
}
$number = array(2, 7, 4, 6, 9);
echo "Original List :" . implode(",", $number) . "\n";
echo "</br>";
$sorted = bubbleSort($number);
echo "Sorted List :" . implode(",", $sorted) . "\n";
echo "</br>";
?>