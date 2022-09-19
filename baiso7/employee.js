let message;
if (login == 'employee') {
    message= 'hello';

} else if (login == 'director') {
    message = 'Greetings';
}  else if (login == '') {
    message = 'login';
} else {
    message ='';
}
alert(message);