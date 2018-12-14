# Make N number of copies of the same test file
$n = 10000
1..$n | % { copy-Item "C:\WorkingFolder\Istanbul\Examples\Polish\test.js" "C:\WorkingFolder\Istanbul\Examples\Polish\ztest$_.js"}

# END