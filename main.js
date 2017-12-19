var Mark = require("mark.js");
var $ = require("jquery");

$(document).ready(function () {


    $('body').on("change", ".search-bar", performMark);

    var context = $(".context p"); // requires an element with class "context" to exist
    var instance = new Mark(context.get());

    function performMark(e) {

        // Read the keyword
        var keyword = $(this).val();

       // instance.mark(keyword);
        //Search results for 'handle' Doesn't highlight stem of word - highlights the entire word
        instance.markRanges([{
            start: 19,
            length: 7
        }]); // marks matches with ranges 15-20 and 25-33
    };
})
