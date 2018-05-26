function DonutTable(array){
  
    var table = document.createElement("table");
    
   
    var col = Object.keys(array[0]);
    var tr = table.insertRow(-1);
    col.forEach(function(key){
        var th = document.createElement("th");
        th.textContent = key;
        tr.appendChild(th);
    });
   
    
    array.forEach(function(obj){
        
        var data_row = table.insertRow(-1);
        
        col.forEach(function(key){
            var tabCell = data_row.insertCell(-1);
            
            if (key === "batter"){    //For Batters
                obj["batter"].forEach(function(e){
                   
                    var div = document.createElement("div");
                  
                    div.textContent =  "Type = " + e.type + " " +" (ID =" + e.id + ")" ;
                    tabCell.appendChild(div); })
                }
            if (Array.isArray(obj[key])){ 
                obj[key].forEach(function(topping){ //For Topping
                   
                    var div = document.createElement("div");
                    div.textContent =  "Type = " + topping.type  +" (ID =" + topping.id + ")" ;
                    tabCell.appendChild(div);
                })
            }
            else{
                tabCell.textContent = obj[key];
            }
 
 
                })
            })
       
   
    var divContainer = document.getElementById("showTable");
    divContainer.innerHTML = "";
    divContainer.appendChild(table);
 
}
 
var donut = [
    {
        "id": "0001",
        "type": "donut",
        "name": "Cake",
        "ppu": 0.55,
        
                "batter":  // <<<Do I need this?
                    [
                        { "id": "1001", "type": "Regular" },
                        { "id": "1002", "type": "Chocolate" },
                        { "id": "1003", "type": "Blueberry" },
                        { "id": "1004", "type": "Devil's Food" }
                    ],
            
        "topping":
            [
                { "id": "5001", "type": "None" },
                { "id": "5002", "type": "Glazed" },
                { "id": "5005", "type": "Sugar" },
                { "id": "5007", "type": "Powdered Sugar" },
                { "id": "5006", "type": "Chocolate with Sprinkles" },
                { "id": "5003", "type": "Chocolate" },
                { "id": "5004", "type": "Maple" }
            ]
    }
   
    
]
DonutTable(donut);