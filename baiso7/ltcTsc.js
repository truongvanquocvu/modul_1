let browser = prompt(" enter browser name!")
switch (browser) {
    case'Edge' :
        alert("you got the Edge!");
        break;
        case 'Chrome':
        case 'Firefox':
        case 'Safari' :
        case 'Opera' :
            alert('okay we support these browsers too');
            break;
        default:
            alert('we hope that this page looks ok!');
                
}