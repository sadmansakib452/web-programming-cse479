<?php
$string = 'The quick brown [dog].';
$pattern = '/\[(.*?)\]/';

preg_match($pattern, $string, $matches);
$output = $matches[1];
echo "$output"
    ?>