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

function searchPlayer(){
    var
        show    =   $("#show-query-selectors"),
        group   =   $("#query-selectors"),
        divQ    =   $("#search-q"),
        divC    =   $("#search-c"),
        divDB   =   $("#search-db"),
        tQ      =   $("#t-q"),
        tC      =   $("#t-c"),
        tDB     =   $("#t-db");

    tQ.on("click", function(e){
        divQ.show();
        divC.hide();
        divDB.hide();
        tQ.attr("checked", "true");
        tC.removeAttr("checked");
        tDB.removeAttr("checked");
    });

     tC.on("click", function(e){
        divQ.hide();
        divC.show();
        divDB.hide();
        tC.attr("checked", "true");
        tQ.removeAttr("checked");
        tDB.removeAttr("checked");
    });

     tDB.on("click", function(e){
        divC.hide();
        divQ.hide();
        divDB.show();
        tDB.attr("checked", "true");
        tC.removeAttr("checked");
        tQ.removeAttr("checked");
    });

    show.on("click", function(e){
        group.slideToggle();    
    });
    group.hide();
    tQ.trigger("click"); 
}

searchPlayer();
picturePlayer();
});
