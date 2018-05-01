
  read_csv();

var row1 = document.querySelector('.row1');
var row2 = document.querySelector('.row2');
var row3 = document.querySelector('.row3');


var urls1 = ["201", "204", "207", "210", "213", "216", "219"];
var urls2 = ["202", "205", "208", "211", "214", "217", "217"];
var urls3 = ["203", "206", "209", "212", "215", "218", "220"];


var i=0;

//different rows appear different numbers of thumbnails
//have to hard code for each page

$(document).ready(function() {
    
    
$(document).keydown(function(e){
    
    
    if(e.keyCode==39 && i == 6) {
//        import img
        var newImage1 = document.createElement('img');
        var newImage3 = document.createElement('img');
            
//        set src and id to image imported
        newImage1.setAttribute('src', 'img/impressionism/' + urls1[i] + '.jpg');
        newImage1.setAttribute('id',urls1[i]);
        newImage1.setAttribute('title',csv_artworkName[urls1[i]-201]);

        
        newImage3.setAttribute('src', 'img/impressionism/' + urls3[i] + '.jpg');
        newImage3.setAttribute('id',urls3[i]);
        newImage3.setAttribute('title',csv_artworkName[urls3[i]-201]);
        console.log(newImage3);

//        show img
        row1.append(newImage1);
        row3.append(newImage3);
        i++;
        
        $(".girl").css("-webkit-animation-iteration-count", "infinite");

        $(".girl").animate({
                left:"+=120px"  
            },1000);
     i=i+2;
    }
    
    else if (e.keyCode==39 && i < 6){
        var newImage1 = document.createElement('img');
        var newImage2 = document.createElement('img');
        var newImage3 = document.createElement('img');
            
        newImage1.setAttribute('src', 'img/impressionism/' + urls1[i] + '.jpg');
        newImage1.setAttribute('id',urls1[i]);
        newImage1.setAttribute('title',csv_artworkName[urls1[i]-201]);
        console.log(newImage1);
//        var img1=$(newImage1);
//        var position1=img1.position();
//        console.log(position1.left);

    
        newImage2.setAttribute('src', 'img/impressionism/' + urls2[i] + '.jpg');
        newImage2.setAttribute('id',urls2[i]);
        newImage2.setAttribute('title',csv_artworkName[urls2[i]-201]);
        console.log(newImage2);


        
        newImage3.setAttribute('src', 'img/impressionism/' + urls3[i] + '.jpg');
        newImage3.setAttribute('id',urls3[i]);
        newImage3.setAttribute('title',csv_artworkName[urls3[i]-201]);
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
    else if (e.keyCode==39&&i == 8) {
             $(".girl").animate({
                left:"+=120px"  
            },1000); 
        i++;
    }
    
    else if  (e.keyCode==39&&i==9) {
        window.open("postImpressionism.html","_self");

        
    }
    
    var hoverId;
    var td;
    var t_id;
    var callImage = document.createElement('img');
    
    for (var t = 1; t < 21; t++){
        
        td = document.getElementById(200+t);
        
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
            callImage.setAttribute('src','img/impressionism/' + t_id + '.jpg');
             $('#detail_img').html(callImage);
//             detail_img.append(callImage);
                
             //add caption
             $('#name').html( '<span>' + csv_artworkName[t_id-201]+'</span>');
             $('#artist').html( '<span>' + csv_artistName[t_id-201]+','+csv_time[t_id-201]+'</span>');
             $('#description').html( '<span>' + csv_description[t_id-201] + '</span>');
             $('#size').html('<span>'+'Dimension(cm): '+csv_size_cm[t_id-201]+'</span>');
             
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





