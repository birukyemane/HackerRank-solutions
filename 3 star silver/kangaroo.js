// https://www.hackerrank.com/challenges/kangaroo/problem?h_r=next-challenge&h_v=zen
// Easy
// Max Score 10

function kangaroo(x1, v1, x2, v2) {

    if(x1===x2){
        if(v1===v2){
            return 'YES';
        }else {
            return 'NO';
        } 
    } else if(x1>x2){
        if(v1>=v2){
             return 'NO';
        }else{
            return (theyMeet(x1,x2,v1,v2)?'YES':'NO');
        }
    } else {
        if(v2>=v1){
            return 'NO';
        } else {
            return (theyMeet(x2,x1,v2,v1)?'YES':'NO');
        }
    }
}

function theyMeet(firstPos,secondPos,firstSpeed,secondSpeed){
    while(firstPos>secondPos){
        firstPos += firstSpeed;
        secondPos += secondSpeed;
    }
    if (firstPos===secondPos){  
        return 1;   
    } else {
        return 0;
    }
}