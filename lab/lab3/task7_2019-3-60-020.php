<?php
$string = "This is a string with special characters !@#$%^&*-_=+\<>?/";
$pattern = '/[^a-zA-Z0-9\s]/';
$replacement = '';

$cleaned_string = preg_replace($pattern, $replacement, $string);
echo "$cleaned_string"
    ?>