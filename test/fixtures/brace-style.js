/* eslint-disable strict */
var foo = true;
var bar = 0;

if (foo) {
    bar = 1;
} else {
    bar = 2;
}

if (foo) {
    bar = 3;
}
else {
    bar = 4;
}

return bar;
