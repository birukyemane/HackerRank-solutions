// https://www.hackerrank.com/challenges/apple-and-orange/problem?h_r=next-challenge&h_v=zen
// Easy 
// Max score 10

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let applesLanding = apples.map(apple=>apple+a);
    let orangesLanding = oranges.map(orange=>orange+b);
    let applesInRange = applesLanding.filter(apple=>{
        if(apple>=s && apple<=t) return true;
    })
    let orangesInRange = orangesLanding.filter(orange=>{
        if(orange>=s && orange<=t) return true;
    })
    console.log(applesInRange.length)
    console.log(orangesInRange.length)
}