<?php
function isPrime($number) {
    if ($number <= 1) {
        return false;
    }
    if ($number <= 3) {
        return true;
    }
    if ($number % 2 == 0 || $number % 3 == 0) {
        return false;
    }
    
    for ($i = 5; $i * $i <= $number; $i += 6) {
        if ($number % $i == 0 || $number % ($i + 2) == 0) {
            return false;
        }
    }
    
    return true;
}

$sum = 0;

for ($i = 1000; $i <= 3000; $i++) {
    if (isPrime($i)) {
        $sum += $i;
    }
}

echo "The sum of prime numbers between 1000 and 3000 is: $sum";
?>
