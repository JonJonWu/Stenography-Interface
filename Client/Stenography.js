 Dictionary = new Mongo.Collection("dictionary");     
 
// $(".input:eq(0)")
// 	.keyboard({ layout:"input"})
// 	.addTyping();

 if (Meteor.isClient) {
    Template.QwertyBox.events({
    	'keypress #qEntry': function (evt, ui) {	
     	 	if(event.keyCode == 13) {
     	 		var qwertyInput = evt.currentTarget.value;
        		var word = Dictionary.findOne({qwerty:qwertyInput});
        		if(word != undefined){
        			$("#sEntry").val(word.steno);	
        		}else{
        			alert("Invalid Entry, Try again");
        		} 
     	    }
    	 }
	});
}

 if (Meteor.isClient) {
    Template.StenoBox.events({
        'keypress #sEntry': function (evt, ui) {    
            if(event.keyCode == 13) {
                var stenoInput = evt.currentTarget.value;
                var word = Dictionary.findOne({steno:stenoInput});
                if(word != undefined){
                    $("#qEntry").val(word.qwerty);   
                }else{
                    alert("Invalid Entry, Try again");
                } 
            }
         }
    });
}

// if (Meteor.isClient) {
//     Template.StenoBox.helpers({
//         var characters = ["word.steno".split("")];
//         for (var i = 0; i < word.steno.length; i++) {
//             Make association to keyboard
//         };
//     })
// }











// if (Meteor.isClient) {
//   // counter starts at 0
//   Session.setDefault('counter', 0);

//   Template.hello.helpers({
//     counter: function () {
//       return Session.get('counter');
//     }
//   });

//   Template.hello.events({
//     'click button': function () {
//       // increment the counter when button is clicked
//       Session.set('counter', Session.get('counter') + 1);
//     }
//   });
// }

// if (Meteor.isServer) {
//   Meteor.startup(function () {
//     // code to run on server at startup
//   });
// }
