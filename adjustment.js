
$(document).ready(function() {
    $('body').on('click','#rotate',function(){
        $("#image").css("transform", "rotate(45deg)");
        $('#rotate').hide();
        $('#applied').append('<div id="resetRotate"><button type="button" class="btn btn-success">Rotate</button><br><br></div>');
    });
});

$(document).ready(function() {
    $('body').on('click','#translate',function(){
        $("#image").animate({right:'+=40px'});
        $('#translate').hide();
        $('#applied').append('<div id="resetTranslate"><button type="button" class="btn btn-success">Translate</button><br><br></div>');
    });
});

$(document).ready(function() {
    $('body').on('click','#opacity',function(){
        $("#image").animate({opacity:'0.5'});
        $('#opacity').hide();
        $('#applied').append('<div id="resetOpacity"><button type="button" class="btn btn-success">Opacity</button><br><br></div>');
    });
});

$(document).ready(function() {
    $('body').on('click','#scale',function(){
        $("#image").animate({height:'200px',width:'200px'});
        $('#scale').hide();
        $('#applied').append('<div id="resetScale"><button type="button" class="btn btn-success">Scale</button><br><br></div>');
    });
});





$(document).ready(function() {
    $('body').on('click','#resetRotate',function(){
        $("#image").css("transform", "rotate(0deg)");
        $('#rotate').show();
        $('#resetRotate').remove();
      });
});

$(document).ready(function() {
    $('body').on('click','#resetTranslate',function(){
        $("#image").animate({right:'0px'});
        $('#translate').show();
        $('#resetTranslate').remove();
      });
});

$(document).ready(function() {
    $('body').on('click','#resetOpacity',function(){
        $("#image").animate({opacity:'1'});
        $('#opacity').show();
        $('#resetOpacity').remove();
      });
});

$(document).ready(function() {
    $('body').on('click','#resetScale',function(){
        $("#image").animate({height:'400px',width:'400px'});
        $('#scale').show();
        $('#resetScale').remove();
      });
});

$(document).ready(function() {
    $('body').on('click','#reset',function(){
        location.reload(true);
        $('#applied').empty();
    });
});
