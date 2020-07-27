https://www.hackerrank.com/challenges/divisible-sum-pairs/problem?h_r=next-challenge&h_v=zen
// Easy
// Max Score 10

function divisibleSumPairs(n, k, ar) {
    let noOfPairs = 0;

    for(let i=0;i <= ar.length-2;i++){
        for(let j=i+1;j <= ar.length-1;j++){
            console.log(i,j)
            if((ar[i]+ar[j])%k === 0) {
                console.log('Inside the if')
                noOfPairs = noOfPairs +1;
            }
        }
    }
    return noOfPairs;    
}