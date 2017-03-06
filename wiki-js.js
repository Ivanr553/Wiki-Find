var search, url, urlList, l1, l2, l3, l4, l5;
url = "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search="+search+"&callback=?";
urlList = "https://en.wikipedia.org/wiki/";
function find() {
getSearch()
$.ajax({
  type:"GET",
  url:url,
  async:false,
  dataType:"json",
  success: function(data) {
    document.getElementById("hidden").style.display = "block";
    for(var n=0; n < data[1].length; n++) {
      $("#l"+n).html(data[1][n])
      $("#s"+n).html(data[2][n])
      $("#a"+n).html(data[3][n])
      document.getElementById("a"+n).href = data[3][n];
      }
  },
  error: function() {
    alert("error");
  }
});
};
for(var n=0; n >= data[1].length; n++) {
  $("#l"+n).html(data[1][n])
  $("#s"+n).html(data[2][n])
  $("#a"+n).html(data[3][n])
};
