
  var dataFromServer = {"reportdata": 
                    {

    "competitor1": {
        "shopfronts": 3, 
    "websitespeed": "1", 
    "name": "Competitor X", 
    "mobilefriendly": "1", 
    "findability": "5", 
    "socialengagement": "4"
    },

    "customer": {
        "shopfronts": "1", 
    "websitespeed": "1", 
    "name": "The Customer", 
    "mobilefriendly": "2", 
    "findability": "2", 
    "socialengagement": "1"
    },
    "competitor5": {
        "shopfronts": "6", 
    "websitespeed": "3", 
    "name": "Random Business LTD", 
    "mobilefriendly": "5", 
    "findability": "4", 
    "socialengagement": "5"
    },
    "competitor3": {
    "shopfronts": "4", 
    "websitespeed": "2", 
    "name": "Industry Etc", 
    "mobilefriendly": "3", 
    "findability": "1", 
    "socialengagement": "6"
    },

    "competitor4": 
   {
    "shopfronts": "2", 
    "websitespeed": "4", 
    "name": "Another Competitor", 
    "mobilefriendly": "4", 
    "findability": "3", 
    "socialengagement": "3"
   }, 
   "competitor2": 
   {
    "shopfronts": "5", 
    "websitespeed": "1", 
    "name": "The Business Co.", 
    "mobilefriendly": "6", 
    "findability": "6", 
    "socialengagement": "2"
   }
},
"customerdetails": 
{
  "phone": "12 456 7899", 
  "tag": "A small amount of interesting information about the customer", 
  "name": "The Customer", 
  "adress": "12, The Road, City"
}
};

var ViewModel = function(data) {
    var mappedToArray = [];
    $.each(data, function(title, item) {
        mappedToArray.push(item);
        item.title = title;
    });
           
    this.competitorData = ko.observableArray(mappedToArray);          
};

ko.applyBindings(new ViewModel(dataFromServer.reportdata));


document.getElementById("placeholder").innerHTML="Contact Details:"+"<br>"+dataFromServer.customerdetails.phone+"<br>"+dataFromServer.customerdetails.tag+"<br>"
+dataFromServer.customerdetails.name+"<br>"+dataFromServer.customerdetails.adress;








