(function($) {
    $.fn.textfill = function(maxFontSize) {
        maxFontSize = parseInt(maxFontSize, 10);
        return this.each(function(){
            var ourText = $(".post-text-body", this);

            var parent = ourText.parent(),
                maxHeight = parent.height(),
                maxWidth = parent.width(),
                fontSize = parseInt(ourText.css("fontSize"), 5),
                multiplier = maxWidth/ourText.width(),
                newSize = (fontSize*(multiplier-0.1));
            ourText.css(
                "fontSize",
                (maxFontSize > 0 && newSize > maxFontSize) ?
                    maxFontSize :
                    newSize
            );
        });
    };
})(jQuery);
