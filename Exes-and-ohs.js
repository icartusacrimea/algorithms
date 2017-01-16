function XO(str) {
    var lower = str.toLowerCase();
    var counts = {};
    for(var i = 0; i < lower.length; i++) {
      var num = lower[i];
      counts[num] = counts[num] ? counts[num]+1 : 1;
    }
    if (counts["o"] === counts["x"]) {
      return true;
    } else {
      return false;
    }
}