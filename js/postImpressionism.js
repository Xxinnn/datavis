
    read_csv();


var row1 = document.querySelector('.row1');
var row2 = document.querySelector('.row2');
var row3 = document.querySelector('.row3');


var urls1 = ["301", "304", "307", "310", "313", "316", "319"];
var urls2 = ["302", "305", "308", "311", "314", "317", "320"];
var urls3 = ["303", "306", "309", "312", "312", "315", "318"];

var imageArray1 = []; 
var imageArray2 = [];
var imageArray3 = [];


var i=0;

//the first and second row has to show two images at the same time when keydown once so consider urls1[3] and urls2[3]

$(document).ready(function() {

$(document).keydown(function(e){
    if(e.keyCode==39 && i == 3) {
//        import img
        var newImage1 = document.createElement('img');
        var newImage2 = document.createElement('img');
        var newImage4 = document.createElement('img');
        var newImage5 = document.createElement('img');
        var newImage3 = document.createElement('img');
            
//        set src and id to image imported
        newImage1.setAttribute('src', 'img/postImpressionism/' + urls1[i] + '.jpg');
        newImage1.setAttribute('id',urls1[i]);
        newImage1.setAttribute('title',csv_artworkName[urls1[i]-281]);


    
        newImage2.setAttribute('src', 'img/postImpressionism/' + urls2[i] + '.jpg');
        newImage2.setAttribute('id',urls2[i]);
        newImage2.setAttribute('title',csv_artworkName[urls2[i]-281]);
        console.log(newImage2);
        
        newImage4.setAttribute('src', 'img/postImpressionism/' + urls1[i+1] + '.jpg');
        newImage4.setAttribute('id',urls1[i+1]);
        newImage4.setAttribute('title',csv_artworkName[urls1[i+1]-281]);
        console.log(newImage4);
        
        newImage5.setAttribute('src', 'img/postImpressionism/' + urls2[i+1] + '.jpg');
        newImage5.setAttribute('id',urls2[i+1]);
        newImage5.setAttribute('title',csv_artworkName[urls2[i+1]-281]);
        console.log(newImage5);

        
        newImage3.setAttribute('src', 'img/postImpressionism/' + urls3[i] + '.jpg');
        newImage3.setAttribute('id',urls3[i]);
        newImage3.setAttribute('title',csv_artworkName[urls3[i]-281]);
        console.log(newImage3);

//        show img
        row1.append(newImage1);
        row2.append(newImage2);
        row1.append(newImage4);
        row2.append(newImage5);
        row3.append(newImage3);
    
        i=i+2;
        
        $(".girl").animate({
                left:"+=120px"  
            },1000);
    }
    
    else if (e.keyCode==39 && i < urls1.length){
        var newImage1 = document.createElement('img');
        var newImage2 = document.createElement('img');
        var newImage3 = document.createElement('img');
            
        newImage1.setAttribute('src', 'img/postImpressionism/' + urls1[i] + '.jpg');
        newImage1.setAttribute('id',urls1[i]);
        newImage1.setAttribute('title',csv_artworkName[urls1[i]-281]);
        console.log(newImage1);

    
        newImage2.setAttribute('src', 'img/postImpressionism/' + urls2[i] + '.jpg');
        newImage2.setAttribute('id',urls2[i]);
        newImage2.setAttribute('title',csv_artworkName[urls2[i]-281]);
        console.log(newImage2);

        
        newImage3.setAttribute('src', 'img/postImpressionism/' + urls3[i] + '.jpg');
        newImage3.setAttribute('id',urls3[i]);
        newImage3.setAttribute('title',csv_artworkName[urls3[i]-281]);
        console.log(newImage3);

        
        row1.append(newImage1);
        row2.append(newImage2);
        row3.append(newImage3);
        
        i++;

        $(".girl").css("-webkit-animation-iteration-count", "infinite");

        $(".girl").animate({
                left:"+=120px"  
            },1000);
    }     
    else if (e.keyCode==39 && i == urls1.length) {
        window.open("fauvism.html","_self");
    }
    
    var hoverId;
    var td;
    var t_id;
    var callImage = document.createElement('img');
    
    for (var t = 1; t < 21; t++){
        
        td = document.getElementById(300+t);
        
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
            });
        });


        
        //open and close detail window
         $(td).click(function(event) {             
//             add layer
             $("#layer").fadeIn(300);
             $("#detail").css("display", "block");
             
             t_id=event.target.id;
            callImage.setAttribute('src','img/postImpressionism/' + t_id + '.jpg');
             $('#detail_img').html(callImage);
//             detail_img.append(callImage);
                
             //add caption
             $('#name').html( '<span>' + csv_artworkName[t_id-281]+'</span>');
             $('#artist').html( '<span>' + csv_artistName[t_id-281]+','+csv_time[t_id-281]+'</span>');
             $('#description').html( '<span>' + csv_description[t_id-281] + '</span>');
             $('#size').html('<span>'+'Dimension(cm): '+csv_size_cm[t_id-281]+'</span>');
             
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




