// https://www.hackerrank.com/challenges/between-two-sets/problem?h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen
// Dificulty Easy
// Max Score : 10
// author : Biruk Yemane 

function getTotalX(a, b) {
    // Write your code here
    if(!isPossible(a,b)) return 0;
    let allFactors = b.map(elt=>{
        return getAllfactors(elt);
    })
    allFactors.sort(function (a, b) {
        return a.len - b.len;
    });
    let commonFactors = allFactors[0].factors.filter(elt=>{
        return isCommonFactor(elt, allFactors);
    })
    let betweenNums =  commonFactors.filter(num=>{
        return isDivisibleBy(num,a);
    });
    return betweenNums.length;    
}

function isPossible(a,b){
    let possibility = true;
    let i = 0;
    while(possibility && i<a.length){
        for(let j=0;j<b.length;j++){
            if(a[i]>b[j]){
                possibility = false;
                break;
            }
        }
        i++;
    }
    return possibility;
}

function isDivisibleBy(num, dividers){
    let isDivisible = true;
    for(let i=0;i<dividers.length;i++){
        if(num%dividers[i]!==0){
            isDivisible = false;
            break;
        }
    }
    return isDivisible;
}

function isCommonFactor(elt, allFactors){
    let isCommon = true;
    for(let i=1;i<allFactors.length;i++){
        if(!allFactors[i].factors.includes(elt)){
            isCommon = false;
            break;
        } 
    }
    return isCommon;
}

function getAllfactors(num){
    let factors = [1,num];
    let nextFactor = 2;
    while(!factors.includes(nextFactor)){
        if(num%nextFactor===0) {
            factors.push(nextFactor);
            if(!factors.includes(num/nextFactor)) factors.push(num/nextFactor);
        }
        nextFactor++;
    }
    return {factors, len:factors.length};
}