class Solution {
  findRelativeRanks(score) {
    // score: an array of integers representing the scores of each athlete
    let n =score.length;
    let result=new Array(n);

    let arr=score.map((val,idx)=>[val,idx]);
    arr.sort((a,b)=>b[0]-a[0]);

      for(let i=0;i<n;i++){
          let index=arr[i][1];

          if(i===0){
              result[index]="Gold Medal";
          }else if(i===1){
              result[index]="Silver Medal";
          }else if(i===2){
              result[index]="Bronze Medal";
          }else{
              result[index]=String(i+1);
          }
      }
    return result;
  }
}