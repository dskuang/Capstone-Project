var colCount = 0;
var colWidth = 0;
var margin = 20;
var windowWidth = 0;
var blocks = [];

window.setup = function setupBlocks() {
  console.log("get here")
    windowWidth = $(window).width();
    colWidth = $('.post-item').outerWidth();
    colCount = Math.floor(windowWidth/(colWidth+margin));
    for(var i=0; i < colCount; i++) {
        blocks.push(margin);
    }
    console.log(blocks);
}
//
//
// window.position = function positionBlocks() {
//     $('.post-item').each(function(){
//         var min = Array.min(blocks);
//         var index = $.inArray(min, blocks);
//         var leftPos = margin+(index*(colWidth+margin));
//         $(this).css({
//             'left':leftPos+'px',
//             'top':min+'px'
//         });
//         blocks[index] = min+$(this).outerHeight+margin;
//     });
// }
//
// // Function to get the Min value in Array
// Array.min = function(array) {
//     return Math.min.apply(Math, array);
// };
