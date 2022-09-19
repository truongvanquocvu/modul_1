
function kiemtra(){
    let height = document.getElementById('height').value;
    let weight = document.getElementById('weight').value;
    let bmi = weight / (height**2);
    if (bmi< 18.5) {
        document.getElementById('result').innerHTML= 'underweight';        
    } else if ( bmi<25 ){
        document.getElementById('result').innerHTML= 'nomal';
    } else if ( bmi<30){
        document.getElementById('result').innerHTML= 'overweight';
    } else document.getElementById('result').innerHTML=' Obese';
    }