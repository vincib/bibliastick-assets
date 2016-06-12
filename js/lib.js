$(function(){

function picturePlayer(){
    var 
        showedLink          =   $("#showed-link"),
        showedPicture       =   $("#showed-picture"),
        showedDescription   =   $("#showed-picture-description"),
        availableImg        =   $(".available-img");

    availableImg.each(function(){
        $(this).on("click", function(e){
            availableImg.each(function(){
                $(this).removeClass("selected");
            });
            $(e.currentTarget).addClass("selected"); 
            showedDescription.html($(e.currentTarget).children(".list-picture-legend").html());
            console.log(showedPicture);
            showedPicture.attr("src", $(e.currentTarget).children("img").attr("src"));
            showedLink.attr("href", $(e.currentTarget).children("img").attr("src"));
        });
    });

    $(".showed-picture-caption").hover(
        function(e){
            showedDescription.fadeIn()
        }, 
        function(e){
            if($(e.relatedTarget).attr("id") != "showed-picture-description"){
                showedDescription.fadeOut();
            }
        }
    );
    
    showedDescription.hover(
        function(e){
            showedDescription.fadeIn()
        }, 
        function(e){
            if(     $(e.relatedTarget).attr("id") != "showed-picture" 
                &&  $(e.relatedTarget).attr("id") != "showed-link"
                &&  $(e.relatedTarget).attr("class") != "showed-picture-caption"
            ){
                showedDescription.fadeOut();
            }
        }
    );

    $(".available-img:first").trigger('click');
}

picturePlayer();
});
