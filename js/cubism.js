
    read_csv();


var row1 = document.querySelector('.row1');
var row2 = document.querySelector('.row2');
var row3 = document.querySelector('.row3');



var urls1 = ["501", "504", "507", "510", "513", "516", "519"];
var urls2 = ["502", "505", "508", "511", "514", "517", "520"];
var urls3 = ["503", "506", "509", "512", "515", "518", "518"];

var imageArray1 = []; 
var imageArray2 = [];
var imageArray3 = [];


var i=0;

//the first and second row has to show two images at the same time when keydown once so consider urls1[3] and urls2[3]

$(document).ready(function() {
//    
$(".girl-wrap").addClass("paused");
$(document).keydown(function(e){
    $(".girl").css("-webkit-animation-iteration-count", "infinite");
//    $(".girl-wrap").addClass("paused");
//    $(".girl").css("-webkit-animation-iteration-count", "0");
    $(".girl").animate({
                left:"+=100px"  
            },1000);
    
    if(e.keyCode==39 && i == 6) {
//        import img
        var newImage1 = document.createElement('img');
        var newImage2 = document.createElement('img');
        
            
//        set src and id to image imported
        newImage1.setAttribute('src', 'img/cubism/' + urls1[i] + '.jpg');
        newImage1.setAttribute('id',urls1[i]);
        newImage1.setAttribute('title',csv_artworkName[urls1[i]-441]);


    
        newImage2.setAttribute('src', 'img/cubism/' + urls2[i] + '.jpg');
        newImage2.setAttribute('id',urls2[i]);
        newImage2.setAttribute('title',csv_artworkName[urls2[i]-441]);
        

//        show img
        row1.append(newImage1);
        row2.append(newImage2);
    
        i=i+2;
    }
    
    else if (e.keyCode==39 && i < urls3.length){
        var newImage1 = document.createElement('img');
        var newImage2 = document.createElement('img');
        var newImage3 = document.createElement('img');
            
        newImage1.setAttribute('src', 'img/cubism/' + urls1[i] + '.jpg');
        newImage1.setAttribute('id',urls1[i]);
        newImage1.setAttribute('title',csv_artworkName[urls1[i]-441]);

    
        newImage2.setAttribute('src', 'img/cubism/' + urls2[i] + '.jpg');
        newImage2.setAttribute('id',urls2[i]);
        newImage2.setAttribute('title',csv_artworkName[urls2[i]-441]);


        
        newImage3.setAttribute('src', 'img/cubism/' + urls3[i] + '.jpg');
        newImage3.setAttribute('id',urls3[i]);
        newImage3.setAttribute('title',csv_artworkName[urls3[i]-441]);

        
        row1.append(newImage1);
        row2.append(newImage2);
        row3.append(newImage3);
        
        i++;
        $(".girl-wrap").removeClass("paused");
    }     
    
    var hoverId;
    var td;
    var t_id;
    var callImage = document.createElement('img');
    
    for (var t = 1; t < 21; t++){
        
        td = document.getElementById(500+t);
        
        //hover tooltip
        
        
        $(td).mouseover(function(event) {
            hoverId=event.target.id;
//           console.log(hoverId);
//            callImage.setAttribute('title',csv_artworkName[hoverId-281]);
            console.log(callImage);
            $("img[title]").tooltip( {
      position: {
        my: "center bottom-20",
        at: "center top",
        using: function( position, feedback ) {
          $( this ).css( position );
          $( "<div>" )
            .addClass( "arrow" )
            .addClass( feedback.vertical )
            .addClass( feedback.horizontal )
            .appendTo( this );
        }
      }
    }
            );
        });


        
        //open and close detail window
         $(td).click(function(event) {             
//             add layer
//             var callImage = document.createElement('img');
             $("#layer").fadeIn(300);
             $("#detail").css("display", "block");
             
             t_id=event.target.id;
            callImage.setAttribute('src','img/cubism/' + t_id + '.jpg');
             $('#detail_img').html(callImage);
//             detail_img.append(callImage);
                
             //add caption
             $('#name').html( '<span>' + csv_artworkName[t_id-441]+'</span>');
             $('#artist').html( '<span>' + csv_artistName[t_id-281]+','+csv_time[t_id-441]+'</span>');
             $('#description').html( '<span>' + csv_description[t_id-441] + '</span>');
             $('#size').html('<span>'+'Dimension(cm): '+csv_size_cm[t_id-441]+'</span>');
             
             // close window
             $("#close").click(function() {
                 
                    $("#layer").fadeOut(300);
                    $("#detail").css("display", "none");
                 
                 callImage.removeAll;
                    $("#name").removeChild;
                    $("#artist").removeChild;
                    $("#description").removeChild;
                    $("#size").removeChild;
             })      
        })

    }//click or hover end
     
    })//keydown ends
     
})




