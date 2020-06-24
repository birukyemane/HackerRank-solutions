// https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem?h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen
// Difficulty : Easy
// Max Score: 10

function breakingRecords(scores) {
    let highScores = [scores[0]];
    let lowScores = [scores[0]];

    addHighandLowScores(scores, highScores, lowScores);
    let result = numberOfRecordBroke(highScores, lowScores);
    return result;
}

function numberOfRecordBroke(highScores, lowScores){
    let highRecordBroke = highScores.reduce((acc,curr,index,arr)=>{
        if(curr>arr[index-1] && index!==0){
            return acc+1;
        }else {
            return acc;
        }
    },0);

    let lowRecordBroke = lowScores.reduce((acc,curr,index,arr)=>{
        if(curr<arr[index-1] && index!==0){
            return acc+1;
        }else {
            return acc;
        }
    },0);
    return [highRecordBroke, lowRecordBroke];
}

function addHighandLowScores(scores, highScores, lowScores){
    
    for(let i=1;i<scores.length;i++){
        if(scores[i]>=highScores[highScores.length-1]){
            lowScores.push(lowScores[lowScores.length-1]);
            highScores.push(scores[i]);
        } else if(scores[i]<=lowScores[lowScores.length-1]){
            highScores.push(highScores[highScores.length-1]);
            lowScores.push(scores[i]);
        } else {
            highScores.push(highScores[highScores.length-1]);
            lowScores.push(lowScores[lowScores.length-1]);
        }
    }
}