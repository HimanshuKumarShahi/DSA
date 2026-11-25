class Solution {
  maxCandyTypes(candyType) {
    // candyType: array of integers representing types of candies
    // Returns the maximum number of different types Hitesh can eat
      let limit = candyType.length / 2;

      let candy = new Set(candyType);

      let unique = candy.size;
      
    return Math.min(limit , unique);
  }
} 

// ----------------------------------------

class Solution {
  maxCandyTypes(candyType) {
    // Find unique types of candies using a Set
    const uniqueTypes = new Set(candyType);
    // Calculate the maximum number of candies Hitesh can eat
    const maxCandiesHiteshCanEat = candyType.length / 2;
    // Return the minimum between the number of unique types and max candies he can eat
    return Math.min(uniqueTypes.size, maxCandiesHiteshCanEat);
  }
}