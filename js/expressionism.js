
    read_csv();


var row1 = document.querySelector('.row1');
var row2 = document.querySelector('.row2');
var row3 = document.querySelector('.row3');



var urls1 = ["601", "604", "604", "607", "610", "613", "617", "620"];
var urls2 = ["602", "605", "608", "611", "614", "616", "618"];
var urls3 = ["603", "606", "606", "609", "612", "615", "619"];



var i=0;

//the first and second row has to show two images at the same time when keydown once so consider urls1[3] and urls2[3]

$(document).ready(function() {
//    
$(document).keydown(function(e){
    
    if(e.keyCode==39 && i == 1) {
//        import img
        var newImage1 = document.createElement('img');
        var newImage2 = document.createElement('img');
        var newImage4 = document.createElement('img');
        var newImage3 = document.createElement('img');
            
//        set src and id to image imported
        newImage1.setAttribute('src', 'img/expressionism/' + urls1[i] + '.jpg');
        newImage1.setAttribute('id',urls1[i]);
        newImage1.setAttribute('title',csv_artworkName[urls1[i]-501]);


    
        newImage2.setAttribute('src', 'img/expressionism/' + urls2[i] + '.jpg');
        newImage2.setAttribute('id',urls2[i]);
        newImage2.setAttribute('title',csv_artworkName[urls2[i]-501]);
        
        
        newImage4.setAttribute('src', 'img/expressionism/' + urls2[i+1] + '.jpg');
        newImage4.setAttribute('id',urls2[i+1]);
        newImage4.setAttribute('title',csv_artworkName[urls2[i+1]-501]);
        

        newImage3.setAttribute('src', 'img/expressionism/' + urls3[i] + '.jpg');
        newImage3.setAttribute('id',urls3[i]);
        newImage3.setAttribute('title',csv_artworkName[urls3[i]-501]);
        

//        show img
        row1.append(newImage1);
        row2.append(newImage2);
        row2.append(newImage4);
        row3.append(newImage3);
    
        i=i+2;

        $(".girl").animate({
                left:"+=120px"  
            },1000);
    }
    
    else if (e.keyCode==39 && i < urls2.length){
        var newImage1 = document.createElement('img');
        var newImage2 = document.createElement('img');
        var newImage3 = document.createElement('img');
            
        newImage1.setAttribute('src', 'img/expressionism/' + urls1[i] + '.jpg');
        newImage1.setAttribute('id',urls1[i]);
        newImage1.setAttribute('title',csv_artworkName[urls1[i]-501]);

    
        newImage2.setAttribute('src', 'img/expressionism/' + urls2[i] + '.jpg');
        newImage2.setAttribute('id',urls2[i]);
        newImage2.setAttribute('title',csv_artworkName[urls2[i]-501]);


        newImage3.setAttribute('src', 'img/expressionism/' + urls3[i] + '.jpg');
        newImage3.setAttribute('id',urls3[i]);
        newImage3.setAttribute('title',csv_artworkName[urls3[i]-501]);

        row1.append(newImage1);
        row2.append(newImage2);
        row3.append(newImage3);
        
        i++;
        
        $(".girl").css("-webkit-animation-iteration-count", "infinite");

        $(".girl").animate({
                left:"+=120px"  
            },1000);
    }     
    else if (e.keyCode==39 && i == 7) {
        var newImage1 = document.createElement('img');
            
        newImage1.setAttribute('src', 'img/expressionism/' + urls1[i] + '.jpg');
        newImage1.setAttribute('id',urls1[i]);
        newImage1.setAttribute('title',csv_artworkName[urls1[i]-501]);
        row1.append(newImage1);
        i++;

        $(".girl").animate({
                left:"+=120px"  
            },1000);
    }
    else if (e.keyCode==39 && i == 8){
        window.open("dadaism.html","_self");
    }
    
    var hoverId;
    var td;
    var t_id;
    var callImage = document.createElement('img');
    
    for (var t = 1; t < 21; t++){
        
        td = document.getElementById(600+t);
        
//        hover tooltip
        $(td).mouseover(function(event) {
            hoverId=event.target.id;
//           console.log(hoverId);
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
            callImage.setAttribute('src','img/expressionism/' + t_id + '.jpg');
             $('#detail_img').html(callImage);
                
             //add caption
             $('#name').html( '<span>' + csv_artworkName[t_id-501]+'</span>');
             $('#artist').html( '<span>' + csv_artistName[t_id-501]+','+csv_time[t_id-501]+'</span>');
             $('#description').html( '<span>' + csv_description[t_id-501] + '</span>');
             $('#size').html('<span>'+'Dimension(cm): '+csv_size_cm[t_id-501]+'</span>');
             
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




