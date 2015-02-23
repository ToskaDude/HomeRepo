
function capture(){
        alert("from capture");
        var xmlhttp = new XMLHttpRequest({mozSystem: true});
       // var xmlhttp = new XMLHttpRequest();
        var url = "https://api.myjson.com/bins/50yc7";
       // var url = "http://10.3.1.191/data.json";

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
	var grid = document.getElementById("Heading");
    grid.innerHTML = "";
    grid.innerHTML = grid.innerHTML +"<div class='Cell'><p>ID</p></div><div class='Cell'><p>Index</p></div>\
                                        <div class='Cell'>\
                                            <p>Active</p>\
                                        </div>\
                                        <div class='Cell'>\
                                            <p>Balance</p>\
                                        </div>\
                                        <div class='Cell'>\
                                            <p>Age</p>\
                                        </div>\
                                        <div class='Cell'>\
                                            <p>EyeColor</p>\
                                        </div>\
                                        <div class='Cell'>\
                                            <p>Name</p>\
                                        </div>\
                                        <div class='Cell'>\
                                            <p>Gender</p>\
                                        </div>\
                                        <div class='Cell'>\
                                            <p>Company</p>\
                                        </div>\
                                        <div class='Cell'>\
                                            <p>Email</p>\
                                        </div>\
                                        <div class='Cell'>\
                                            <p>Phone</p>\
                                        </div>\
                                        <div class='Cell'>\
                                            <p>Address</p>\
                                        </div>\
                                        <div class='Cell'>\
                                            <p>Registered</p>\
                                        </div>\
                                        <div class='Cell'>\
                                            <p>Favorite Fruit</p>\
                                        </div>";
    grid = document.getElementById("Row");
    grid.innerHTML = "";
    for (var i = 0; i < arr.length; i++) {
        grid.innerHTML= grid.innerHTML +"<div id='Row'>\
                                            <div class='Cell' id = 'ID'><p>"+ arr[i]['_id']+"</p></div>\
                                            <div class='Cell' id = 'Index'>"+arr[i]['index']+"</div>\
                                            <div class='Cell' id = 'Active'>"+arr[i]['isActive']+"</div>\
                                            <div class='Cell' id = 'Balance'>"+arr[i]['balance']+"</div>\
                                            <div class='Cell' id = 'Age'>"+arr[i]['age']+"</div>\
                                            <div class='Cell' id = 'EyeColor'>"+arr[i]['eyeColor']+"</div>\
                                            <div class='Cell' id = 'Name'>"+arr[i]['name']+"</div>\
                                            <div class='Cell' id = 'Gender'>"+arr[i]['gender']+"</div>\
                                            <div class='Cell' id = 'Company'>"+arr[i]['company']+"</div>\
                                            <div class='Cell' id = 'Email'>"+arr[i]['email']+"</div>\
                                            <div class='Cell' id = 'Phone'>"+arr[i]['phone']+"</div>\
                                            <div class='Cell' id = 'Address'>"+arr[i]['address']+"</div>\
                                            <div class='Cell' id = 'Registered'>"+arr[i]['registered']+"</div>\
                                            <div class='Cell' id = 'Fav_Fruit'>"+arr[i]['favoriteFruit']+"</div>\
                                         </div>";
                                }
}

function changeIt()
    {
        var i = 1;
        my_div.innerHTML = my_div.innerHTML +"<input type='text' name='mytext'+ i>"

    }