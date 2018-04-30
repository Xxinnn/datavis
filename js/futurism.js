////var container = document.getElementById("gallery");
//var csv_id=[];
//var csv_artworkName=[];
//var csv_time=[];
//var csv_description=[];
//var csv_artistName=[];
//var csv_size_cm=[];
//
////import csv
//d3.csv("imageID.csv",function(csv){
//            csv.map(function(d){
//                csv_id.push(+d.ID);
//                csv_artworkName.push(d.artworkName);
//                csv_artistName.push(d.artistName);
//                csv_time.push(d.time);
//                csv_description.push(d.description);
//                csv_size_cm.push(d.size_cm);
//            })
//            //called after the AJAX is success
////            console.log("id",id);
////            console.log("artwortName",artworkName);
////            console.log("id",id[0]);
//        });
    read_csv();


var row1 = document.querySelector('.row1');
var row2 = document.querySelector('.row2');
var row3 = document.querySelector('.row3');


//var urls = ["301", "302", "303", "304", "305", "3011", "307", "308", "309", "310", "311", "312", "313", "314", "315", "3111", "317", "318", "319", "320"];
var urls1 = ["1101", "1104", "1107", "1110", "1110", "1113", "1116"];
var urls2 = ["1102", "1105", "1108", "1111", "1114", "1117", "1119"];
var urls3 = ["1103", "1106", "1109", "1112", "1115", "1118", "1120"];



var i=0;

//the first and second row has to show two images at the same time when keydown once so consider urls1[3] and urls2[3]

$(document).ready(function() {
//    var link = $(this).attr("href"); 
//
//    if ( link.match("^#") ) { 
//
//        $(this).click(function() {
//            var target = $(link); 
//            target = target.length ? target : $('[name=' + this.hash.slice(1) +']'); /* [4] */ 
//            if (target.length) {
//                $('html,body').animate({ /* [5] */ 
//                    scrollTop: target.offset().top - 70 /* [5] */ 
//                }, 2000); return false; /* [5] */ 
//            }
//        })
//        };

$(document).keydown(function(e){
    if(e.keyCode==39 && i == 3) {
//        import img
        var newImage1 = document.createElement('img');
        var newImage2 = document.createElement('img');
        var newImage4 = document.createElement('img');
        var newImage5 = document.createElement('img');
        var newImage3 = document.createElement('img');
            
//        set src and id to image imported
        newImage1.setAttribute('src', 'img/futurism/' + urls1[i] + '.jpg');
        newImage1.setAttribute('id',urls1[i]);
        newImage1.setAttribute('title',csv_artworkName[urls1[i]-1021]);


    
        newImage2.setAttribute('src', 'img/futurism/' + urls2[i] + '.jpg');
        newImage2.setAttribute('id',urls2[i]);
        newImage2.setAttribute('title',csv_artworkName[urls2[i]-1021]);
        
        
        newImage4.setAttribute('src', 'img/futurism/' + urls2[i+1] + '.jpg');
        newImage4.setAttribute('id',urls2[i+1]);
        newImage4.setAttribute('title',csv_artworkName[urls2[i+1]-1021]);
        
        
        newImage5.setAttribute('src', 'img/futurism/' + urls3[i+1] + '.jpg');
        newImage5.setAttribute('id',urls3[i+1]);
        newImage5.setAttribute('title',csv_artworkName[urls3[i+1]-1021]);
        

        
        newImage3.setAttribute('src', 'img/futurism/' + urls3[i] + '.jpg');
        newImage3.setAttribute('id',urls3[i]);
        newImage3.setAttribute('title',csv_artworkName[urls3[i]-1021]);
        

//        show img
        row1.append(newImage1);
        row2.append(newImage2);
        row2.append(newImage4);
        row3.append(newImage5);
        row3.append(newImage3);
    
        i=i+2;
    }
    
    else if (e.keyCode==39 && i < urls1.length){
        var newImage1 = document.createElement('img');
        var newImage2 = document.createElement('img');
        var newImage3 = document.createElement('img');
            
        newImage1.setAttribute('src', 'img/futurism/' + urls1[i] + '.jpg');
        newImage1.setAttribute('id',urls1[i]);
        newImage1.setAttribute('title',csv_artworkName[urls1[i]-1021]);

    
        newImage2.setAttribute('src', 'img/futurism/' + urls2[i] + '.jpg');
        newImage2.setAttribute('id',urls2[i]);
        newImage2.setAttribute('title',csv_artworkName[urls2[i]-1021]);


        newImage3.setAttribute('src', 'img/futurism/' + urls3[i] + '.jpg');
        newImage3.setAttribute('id',urls3[i]);
        newImage3.setAttribute('title',csv_artworkName[urls3[i]-1021]);

        row1.append(newImage1);
        row2.append(newImage2);
        row3.append(newImage3);
        
        i++;
    }     
    
    var hoverId;
    var td;
    var t_id;
    var callImage = document.createElement('img');
    
    for (var t = 1; t < 21; t++){
        
        td = document.getElementById(1100+t);
        
        //hover tooltip
        
        
        $(td).mouseover(function(event) {
            hoverId=event.target.id;
//           console.log(hoverId);
//            callImage.setAttribute('title',csv_artworkName[hoverId-1021]);
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
            callImage.setAttribute('src','img/futurism/' + t_id + '.jpg');
             $('#detail_img').html(callImage);
//             detail_img.append(callImage);
                
             //add caption
             $('#name').html( '<span>' + csv_artworkName[t_id-1021]+'</span>');
             $('#artist').html( '<span>' + csv_artistName[t_id-1021]+','+csv_time[t_id-1021]+'</span>');
             $('#description').html( '<span>' + csv_description[t_id-1021] + '</span>');
             $('#size').html('<span>'+'Dimension(cm): '+csv_size_cm[t_id-1021]+'</span>');
             
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




