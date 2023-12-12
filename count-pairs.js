// add whatever parameters you deem necessary
function countPairs(arr, total, x=0) { 
  let start = 0;
  let end = arr.length - 1;
  let count = 0;

  while(start < end) {
    if(arr[start] + arr[end] === total) {
      count++;
      start++;
      end--;
    }else if(arr[start] > arr[end]){
      start++;
    }else{
      end--;
    }
  }
  return count;
}


