function reverseArray(arr) {
    
    return [...arr].reverse();
  }
  
  const myArray = [1, 2, 3, 4, 5];
  const reversedArray = reverseArray(myArray);
  
  console.log("Original Array:", myArray);
  console.log("Reversed Array:", reversedArray);