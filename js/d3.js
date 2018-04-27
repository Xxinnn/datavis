//import csv
    
var csv_id=[];
var csv_artworkName=[];
var csv_time=[];
var csv_description=[];
var csv_size_cm=[];

d3.csv("imageID.csv",function(csv){
            csv.map(function(d){
                csv_id.push(+d.ID);
                csv_artworkName.push(d.artworkName);
                csv_time.push(d.time);
                csv_description.push(d.description);
                csv_size_cm.push(d.size_cm);
            })
            //called after the AJAX is success
//            console.log("id",id);
//            console.log("artwortName",artworkName);
//            console.log("id",id[0]);
        });





