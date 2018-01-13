$(document).ready(function(){
            
    $("#myCarousel").carousel({interval: 2000});
    
    $("#carousel-button").click(function(){
        
        if ($("#carousel-button").children("span").hasClass('fa fa-pause')) {
            
            $("#myCarousel").carousel('pause');
            $("#carousel-button").children("span").toggleClass('fa-pause fa-play');

        } else {

            $("#myCarousel").carousel('cycle');
            $("#carousel-button").children("span").toggleClass('fa-play fa-pause');
        
        };                

    });

});

/* function modalControl (id, options){
            
    $(`#${id}`).modal(options);
};
 */

const modalControl = (id,options) => {
    $(`#${id}`).modal(options);
};