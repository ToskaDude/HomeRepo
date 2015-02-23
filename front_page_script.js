
function capture(){
        alert("from capture");
        var xmlhttp = new XMLHttpRequest();
        var url = "http://10.3.1.191/data.json";
        	
        xmlhttp.onreadystatechange=function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                myFunction(xmlhttp.responseText);
            }
        }
    
        xmlhttp.open("GET", url, true);
        xmlhttp.send();
}

function myFunction(response) {
        arr = JSON.parse(response);    
        alert("from myFunction");  
        Load(); 
}

function Load(){
	alert("from load");
	var grid = document.getElementById("row_head");
    grid.innerHTML = "";
    grid.innerHTML= grid.innerHTML +"<div class = 'row_heading ' id = 'ID_heading'>ID</div>\
                                     <div class = 'row_heading' id = 'Index'>Index</div>\
                                     <div class = 'row_heading' id = 'Active'>Active</div>\
                                     <div class = 'row_heading' id = 'Balance'>Balance</div>\
                                     <div class = 'row_heading' id = 'Age'>Age</div>\
                                     <div class = 'row_heading' id = 'EyeColor'>EyeColor</div>\
                                     <div class = 'row_heading' id = 'Name'>Name</div>\
                                     <div class = 'row_heading' id = 'Gender'>Gender</div>\
                                     <div class = 'row_heading' id = 'Company'>Company</div>\
                                     <div class = 'row_heading' id = 'Email'>Email</div>\
                                     <div class = 'row_heading' id = 'Phone'>Phone</div>\
                                     <div class = 'row_heading' id = 'Address'>Address</div>\
                                     <div class = 'row_heading' id = 'Registered'>Registered</div>\
                                     <div class = 'row_heading' id = 'Fav_Fruit'>Favorite Fruit</div>";                    
    grid = document.getElementById("row_data");
    grid.innerHTML = "";
    for (var i = 0; i < arr.length; i++) {
        grid.innerHTML= grid.innerHTML +"<div class='cell' id = 'ID_cell'>"+ arr[i]['_id']+"</div>\
                                         <div class='cell' id = 'Index'>"+arr[i]['index']+"</div>\
                                         <div class='row_element'>"+arr[i]['isActive']+"</div>\
                                         <div class='row_element'>"+arr[i]['balance']+"</div>\
                                         <div class='row_element'>"+arr[i]['age']+"</div>\
                                         <div class='row_element'>"+arr[i]['eyeColor']+"</div>\
                                         <div class='row_element'>"+arr[i]['name']+"</div>\
                                         <div class='row_element'>"+arr[i]['gender']+"</div>\
                                         <div class='row_element'>"+arr[i]['company']+"</div>\
                                         <div class='row_element'>"+arr[i]['email']+"</div>\
                                         <div class='row_element'>"+arr[i]['phone']+"</div>\
                                         <div class='row_element'>"+arr[i]['address']+"</div>\
                                         <div class='row_element'>"+arr[i]['registered']+"</div>\
                                         <div class='row_element'>"+arr[i]['favoriteFruit']+"</div>";
                                }
}

function changeIt()
    {
        var i = 1;
        my_div.innerHTML = my_div.innerHTML +"<input type='text' name='mytext'+ i>"

    }