// Make active link in navbar bold without expanding width of its parent
$(document).ready(function() {
  var link = $('.active');
  var linkParent = link.parent();
  var width = linkParent.width();

  //linkParent.css('width', width);
  link.css('font-weight', 'bold');
});

