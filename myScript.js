
function capture(){
alert("from capture");
var xmlhttp = new XMLHttpRequest();
var url = "https://api.myjson.com/bins/50yc7";
	
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
    if (arr['99']) {
    	Load();
    };



}

function Load(){
	alert("from load");
	var grid = document.getElementById("myGrid");
    grid.innerHTML = "";
    grid.innerHTML= grid.innerHTML +"<tr><th>ID</th>\
                                     <th>Index</th>\
                                    <th>Active</th>\
                                    <th>Balance</th>\
                                    <th>Age</th>\
                                    <th>EyeColor</th>\
                                    <th>Name</th>\
                                    <th>Gender</th>\
                                    <th>Company</th>\
                                    <th>Email</th>\
                                    <th>Phone</th>\
                                    <th>Address</th>\
                                    <th>Registered</th>\
                                    <th>Favorite Fruit</th>\
                                    </tr>";                    
    for (var i = 0; i < arr.length; i++) {
        grid.innerHTML= grid.innerHTML +"<tr><td>"+ arr[i]['_id']+"</td>\
                                     <td>"+arr[i]['index']+"</td>\
                                     <td>"+arr[i]['isActive']+"</td>\
                                     <td>"+arr[i]['balance']+"</td>\
                                     <td>"+arr[i]['age']+"</td>\
                                     <td>"+arr[i]['eyeColor']+"</td>\
                                     <td>"+arr[i]['name']+"</td>\
                                     <td>"+arr[i]['gender']+"</td>\
                                     <td>"+arr[i]['company']+"</td>\
                                     <td>"+arr[i]['email']+"</td>\
                                     <td>"+arr[i]['phone']+"</td>\
                                     <td>"+arr[i]['address']+"</td>\
                                     <td>"+arr[i]['registered']+"</td>\
                                     <td>"+arr[i]['favoriteFruit']+"</td>\
                                    </tr>";
                                }
}

function changeIt()
    {
        var i = 1;
        my_div.innerHTML = my_div.innerHTML +"<input type='text' name='mytext'+ i>"

    }