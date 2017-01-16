function deleteNth(arr,x){
  var counts = {};

  for(var i = 0; i < arr.length; i++) {
    var num = arr[i];
    counts[num] = counts[num] ? counts[num]+1 : 1;
   
  }
	var index = arr.indexOf(num);
    console.log(counts[num]);
    
	if (counts[num] > x) {
		var over = counts[num] - x;
      	arr.splice(index, over);
  }

  return arr;
}

deleteNth([20,37,20,21], 1);
deleteNth([1,1,3,3,7,2,2,2,2], 3);