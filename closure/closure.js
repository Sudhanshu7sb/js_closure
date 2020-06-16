// question 1
function nonsense(s){
  let string = s;
  var blab = function(){
      alert(string);
    };
    blab();
}
//------------------------
function nonsense(s){
  let string = s;
  var blab = function(){
      alert(string);
    };
    blab();
  setTimeout(blab, 2000);
  

  }

// --------------------------------



function nonsense(s){
    let string = s;
    var blab = function(){
        alert(string);
      };
    //   blab();
    // setTimeout(blab, 2000);
    return blab;

}

let blabLater = nonsense("sudhanshu");
let blabAgainLater = nonsense("shekhar");
console.log(blabLater);
console.log(blabAgainlater);


// -------------------------------------

//question 2
var lastNameTrier = function(firstName){
  
   var innerFunction = function(lastName) {
   
   console.log(firstName + ' ' + lastName);
   };

 return innerFunction;
};
var firstNameFarmer = lastNameTrier('Farmer'); //logs nothing
firstNameFarmer('Brown'); //logs 'Farmer Brown'
firstNameFarmer('Jane'); //logs 'Farmer Jane'
firstNameFarmer('Lynne'); //logs 'Farmer Lynne'

// ------------------------------------

// question 3
function storyWriter(words){
  let str = words;
  return {
    addWords : function (str){
     return (str) + addWords;
    },
    erase : function(){}
  }
}



var farmLoveStory = storyWriter();
// 	farmLoveStory.addWords('There was once a lonely cow.'); // 'There was once a lonely cow.'
// 	farmLoveStory.addWords('It saw a friendly face.'); //'There was once a lonely cow. It saw a friendly face.'

// 	var storyOfMyLife = storyWriter();
// 	storyOfMyLife.addWords('My code broke.'); // 'My code broke.'
// 	storyOfMyLife.addWords('I ate some ice cream.'); //'My code broke. I ate some ice cream.'
// 	// storyOfMyLife.erase()