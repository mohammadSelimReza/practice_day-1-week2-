const maxNo = (nums) => {
    let maxNum = nums[0];
    nums.forEach(num => {
        if (num > maxNum) maxNum = num;
    });
    return maxNum;
}

const numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];
console.log(maxNo(numbers));
