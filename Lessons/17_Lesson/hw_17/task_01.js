function formatString(input) {
const regex = /^(\d{4})\.(\d{3})\.(\d{3}) (\d{2})$/;
return input.replace(regex, "$1 $2:$3-$4");
}
console.log(formatString("1333.132.123 00"));