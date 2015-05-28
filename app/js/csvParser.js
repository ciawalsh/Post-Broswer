var file = "public/post-data.csv";
var count = 1;

Papa.parse(file, {
  ////makes sure the first line is interpreted as a header, not data
  header: true,
  //allows stuff to be typed as their respective primitive types instead of only strings. turned off in this case
  dynamicTyping: true,
  //allows you to define the delimiter if not a default comma
  delimiter: "|",

  //allows you to define a comment line, which would be skipped by the parser
  comments: "//",

  //turns on fastmode, quicker but assumes no quoted fields is present
  fastmode: true,

  download: true,

    step: function (results) {
       var data = results.data;
      $.each(results.data[0], function(i) {
          $("#data-output").append($("<li id=" + i + "class='ui-sortable'" + "/>").text(data[0][i]));
      });
        // console.log(results);
        console.log(data[0]);
        wrapObjects();
    }
}); 

$(".post").click(function() {
  $(this).removeClass("post");
});

var wrapObjects = function() {
  var rows;
  while ( (rows = $('#data-output > li:not(.post)')).length > 0 )
  {
    rows.slice(0,4).wrapAll('<ul class="ui-state-default post post'+ count++ +'"></ul>');
  }
};