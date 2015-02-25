
function capture(){
        alert("from capture");
        var xmlhttp = new XMLHttpRequest({mozSystem: true});
       // var xmlhttp = new XMLHttpRequest();
       // var url = "https://api.myjson.com/bins/50yc7";
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
        load();
}

function addHeadingHtml(){
    return "<div class = 'Heading'>\
            <div class='Cell' type= 'ID'>\
                <p>ID</p>\
            </div>\
            <div class='Cell' type = 'Index'>\
                <p>Index</p>\
            </div>\
            <div class='Cell' type = 'Active'>\
                <p>Active</p>\
            </div>\
            <div class='Cell' type = 'Balance'>\
                <p>Balance</p>\
            </div>\
            <div class='Cell' type = 'Age'>\
                <p>Age</p>\
            </div>\
            <div class='Cell' type = 'EyeColor'>\
                <p>EyeColor</p>\
            </div>\
            <div class='Cell' type = 'Name'>\
                <p>Name</p>\
            </div>\
            <div class='Cell' type = 'Gender'>\
                <p>Gender</p>\
            </div>\
            <div class='Cell' type = 'Company'>\
                <p>Company</p>\
            </div>\
            <div class='Cell' type = 'Email'>\
                <p>Email</p>\
            </div>\
            <div class='Cell' type = 'Phone'>\
                <p>Phone</p>\
            </div>\
            <div class='Cell' type = 'Address'>\
                <p>Address</p>\
            </div>\
            <div class='Cell' type = 'Registered'>\
                <p>Registered</p>\
            </div>\
            <div class='Cell' type = 'Fav_Fruit'>\
                <p>Favorite Fruit</p>\
            </div>\
          </div>";
}

function addRowHtml(i){
    return"<div class='Row'>\
                <div class='Cell' type = 'ID'><p>"+ arr[i]['_id']+"</p></div>\
                <div class='Cell' type = 'Index'><p>"+arr[i]['index']+"</p></div>\
                <div class='Cell' type = 'Active'><p>"+arr[i]['isActive']+"</p></div>\
                <div class='Cell' type = 'Balance'><p>"+arr[i]['balance']+"</p></div>\
                <div class='Cell' type = 'Age'><p>"+arr[i]['age']+"</p></div>\
                <div class='Cell' type = 'EyeColor'><p>"+arr[i]['eyeColor']+"</p></div>\
                <div class='Cell' type = 'Name'><p>"+arr[i]['name']+"</p></div>\
                <div class='Cell' type = 'Gender'><p>"+arr[i]['gender']+"</p></div>\
                <div class='Cell' type = 'Company'><p>"+arr[i]['company']+"</p></div>\
                <div class='Cell' type = 'Email'><p>"+arr[i]['email']+"</p></div>\
                <div class='Cell' type = 'Phone'><p>"+arr[i]['phone']+"</p></div>\
                <div class='Cell' type = 'Address'><p>"+arr[i]['address']+"</p></div>\
                <div class='Cell' type = 'Registered'><p>"+arr[i]['registered']+"</p></div>\
                <div class='Cell' type = 'Fav_Fruit'><p>"+arr[i]['favoriteFruit']+"</p></div>\
           </div>";
}

function load(){
	alert("from load");    
    var grid = document.getElementById("Grid");
    grid.innerHTML = "";
    grid.innerHTML = grid.innerHTML + addHeadingHtml();
    for (var i = 0; i < arr.length; i++) {        
            grid.innerHTML= grid.innerHTML + addRowHtml(i);
    }
}

var n = 0;

function changeIt(textBoxInput)
    {
        if(n < 14 ){
            n++; 
            my_div.innerHTML = my_div.innerHTML +"<input type='text' id='text_box_input"+n+"' >";
        }
        else
            alert("All Columns Have Been Displayed.");

        return 0;
    }

function validate(){
    alert(n);   
    var textBoxInput= document.getElementById("text_box_input"+n);
    if(textBoxInput.value==""){
        alert("Please Enter A Title.");
    }
        else{
           alert(textBoxInput.value);
           changeIt(textBoxInput); 
        }
}



 
