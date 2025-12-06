let arr = [-1, 0, 1, 2, -1, -4];
let result = [];

for (let i = 0; i < arr.length - 2; i++) {
  for (let j = i + 1; j < arr.length - 1; j++) {
    for (let k = j + 1; k < arr.length; k++) {

      if (arr[i] + arr[j] + arr[k] == 0) {

        let triplet = [arr[i], arr[j], arr[k]];
        triplet.sort((a, b) => a - b);  // Sort to avoid duplicate ordering

        // Check if already present
        let exists = false;
        for (let t of result) {
          if (t[0] === triplet[0] && t[1] === triplet[1] && t[2] === triplet[2]) {
            exists = true;
            break;
          }
        }

        if (!exists) {
          result.push(triplet);
        }
      }
    }
  }
}

console.log(result);


// using two pointer 

var threeSum = function(nums) {
    nums.sort((a, b) => a - b);
    let res = [];

    for (let i = 0; i < nums.length - 2; i++) {

        if (i > 0 && nums[i] === nums[i - 1]) continue;  // skip duplicates

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right];

            if (sum === 0) {
                res.push([nums[i], nums[left], nums[right]]);

                // skip duplicates
                while (left < right && nums[left] === nums[left + 1]) left++;
                while (left < right && nums[right] === nums[right - 1]) right--;

                left++;
                right--;
            }
            else if (sum < 0) {
                left++;
            }
            else {
                right--;
            }
        }
    }
    return res;
};

