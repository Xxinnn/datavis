//var container = document.getElementById("gallery");
var row1 = document.querySelector('.row1');
var row2 = document.querySelector('.row2');
var row3 = document.querySelector('.row3');


//var urls = ["301", "302", "303", "304", "305", "306", "307", "308", "309", "310", "311", "312", "313", "314", "315", "316", "317", "318", "319", "320"];
var urls1 = ["301", "304", "307", "310", "313", "316", "319"];
var urls2 = ["302", "305", "308", "311", "314", "317", "320"];
var urls3 = ["303", "306", "309", "312", "312", "315", "318"];

//var imageArray1 = []; 


var i=0;

$(document).ready(function() {
$(document).keydown(function(e){
    if(e.keyCode==39 && i == 3) {
    var newImage1 = document.createElement('img');
    var newImage2 = document.createElement('img');
    var newImage4 = document.createElement('img');
    var newImage5 = document.createElement('img');
    var newImage3 = document.createElement('img');
            
    newImage1.setAttribute('src', 'img/postImpressionism/' + urls1[i] + '.jpg');
//    imageArray1[i]= 'img/postImpressionism/' + urls1[i] + '.jpg';
    
    newImage2.setAttribute('src', 'img/postImpressionism/' + urls2[i] + '.jpg');

    newImage3.setAttribute('src', 'img/postImpressionism/' + urls3[i] + '.jpg');
    newImage4.setAttribute('src', 'img/postImpressionism/' + urls1[i+1] + '.jpg');
//    imageArray1[i]= 'img/postImpressionism/' + urls1[i] + '.jpg';
    
    newImage5.setAttribute('src', 'img/postImpressionism/' + urls2[i+1] + '.jpg');
        row1.append(newImage1);
        row2.append(newImage2);
        row1.append(newImage4);
        row2.append(newImage5);
        row3.append(newImage3);
        $(".row1 img").css('display','inline-block')
        $(".row2 img").css('display','inline-block')
        $(".row3 img").css('display','inline-block')
    
        i=i+2;
    }
    
    else if (e.keyCode==39 && i < urls1.length){
        var newImage1 = document.createElement('img');
        var newImage2 = document.createElement('img');
        var newImage3 = document.createElement('img');
            
        newImage1.setAttribute('src', 'img/postImpressionism/' + urls1[i] + '.jpg');
//    imageArray1[i]= 'img/postImpressionism/' + urls1[i] + '.jpg';
    
        newImage2.setAttribute('src', 'img/postImpressionism/' + urls2[i] + '.jpg');

        newImage3.setAttribute('src', 'img/postImpressionism/' + urls3[i] + '.jpg');

        row1.append(newImage1);
        row2.append(newImage2);
        row3.append(newImage3);
        $(".row1 img").css('display','inline-block')
        $(".row2 img").css('display','inline-block')
        $(".row3 img").css('display','inline-block')
       
        i++;
    }
    
})
})


//for( i=0; i<urls.length; i++){
//  container.insertAdjacentHTML('beforeend', '<img src="img/postImpressionism/'+urls[i]+'">');
//}

//row1.appendChild(newImage);