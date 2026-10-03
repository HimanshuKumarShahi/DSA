class Solution {
  baseballScoreTracker(operations) {
    // operations: array of strings representing operations to be performed on the score record
    // Returns the total score after processing all operations

    let scores = [];

    for (let i of operations) {
      if (!isNaN(i)) {
        scores.push(parseInt(i));

      } else if (i === "+") {
        let last = scores[scores.length - 1] || 0;

        let secondLast = scores[scores.length - 2] || 0;

        scores.push(last + secondLast);

      } else if (i === "D") {
        const last = scores[scores.length - 1] || 0;

        scores.push(last * 2);
        
      } else if (i === "C") {
        scores.pop();
      }
    }
    return scores.reduce((a, b) => a + b, 0);
  }
}
