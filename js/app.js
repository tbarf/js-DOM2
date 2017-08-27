/*You will need to refer to the index.html page to complete the exercises below. Using DOM, please make the necessary changes to the website.

Also don't forget to run your live-server for this assignment.*/

//1. Kapiolani Coffee Shop
/*Despite being the cat's meow, Kapiolani Coffee Shop's current rating is n/a. Let's keep the hungry fans happy by changing the current ranking to:

Rating: 5 Stars*/

var rating1 = window.document.getElementById("rating1").textContent = "5 Stars";

//2. Sunrise Restaurant
/*No rise and shine for the Sunrise Restaurant, as their price and address needs some serious updating. Bring in some sunshine by changing the price and address to the following:

Price: $$$
Adress: 525 Kapahulu Ave, Honolulu, HI 96815*/
var price2 = window.document.getElementById("price2").textContent = "Price: $$$";
var addy2 = window.document.getElementById("addy2").textContent = "Adress: 525 Kapahulu Ave, Honolulu, HI 96815";
//3. Ramen Nakamura
/*Literally, where did the time go? Ramen Nakamura is missing the hours section! This mistake is timeless.

You will need to create a new div element with an id of "hours3". Inside this div element, give it the following info:

Hours: 6pm - 12am Sun - Sat

Append this div element to the div id "text3"*/
var innerDiv = document.createElement('div');
innerDiv.id = 'hours3';
innerDiv.textContent = "Hours: 6pm - 12am Sun - Sat";
text3.appendChild(innerDiv);

//4. Kam Bowl
/*Kam Bowl got no spare time to update their info and business is suffering! Help them regain their kingpin status again.

Create a new div element with an id of "price4". Inside this div element, give it the following info:

Price: $$$

Append this element to the div with the id of
"text4"*/

/*Create a new div element with an id of "addy4". Inside this div element, give it the following info:

Address: 1620 N. School St, Honolulu, HI 96817

Append this element to the div with the id of
"text4"*/
var newDivPrice4 = document.createElement('div');
	newDivPrice4.id = "price4";
	newDivPrice4.textContent = "Price: $$$";
	text4.appendChild(newDivPrice4);

var newDivAddy4 = document.createElement('div');
	newDivAddy4.id = "addy4";
	newDivAddy4.textContent = "Address: 1620 N. School St, Honolulu, HI 96817";
	text4.appendChild(newDivAddy4);
var newDivHours4 = document.createElement('div');
	newDivHours4.id = "hours4";
	newDivHours4.textContent ="Hours: 9am - 10pm Sun - Sat";
	text4.appendChild(newDivHours4);

var newPupdate4 = document.createElement("p");
newPupdate4.id = 'update4';
newPupdate4.textContent = "I'd leave a blank space for this oxtail soup!";
comment4.appendChild(newPupdate4);
/*Create a new div element with an id of "hours4". Inside this div element, give it the following info:

Hours: 9am - 10pm Sun - Sat

Append this element to the div with the id of
"text4"
*/

/*Create a paragraph element with an id of "update4". Inside this paragraph element, give it the following info:

I'd leave a blank space for this oxtail soup!

Append this element to the div id of "comment4"*/


//5. The Death Star Cafe
/*The empire strikes back with a new and improved oxtail soup offering. Help the dark side win back customers by executing the following commands:*/

/*Create the div elements with the following id's:

"name5"
"rating5"
"price5"
"addy5"
"hours5"

Add the following info for each specific div id:

name5: 5. The Death Star Cafe
rating5: Rating: 2 Stars
price5: Price: $$
addy5: Address: A galaxy far, far away.
hours5: Hours: We never close.

Append the div elements to the div id "text5"
*/

// var frag = document.createDocumentFragment();

// for(var i = 0; i<5; i++){
// 	var div = document.createElement("div");

// }

// Don't cap first letter of vars
var NewDivName5 = document.createElement('div');
NewDivName5.id = "name5";
NewDivName5.textContent = "5. The Death Star Cafe";
text5.appendChild(NewDivName5);


var NewDivRating5 = document.createElement('div');
NewDivRating5.id = "rating5";
NewDivRating5.textContent = "Rating: 2 Stars";
text5.appendChild(NewDivRating5);


var NewDivPrice5 = document.createElement('div');
NewDivPrice5.id = "price5";
NewDivPrice5.textContent = "Price: $$";
text5.appendChild(NewDivPrice5);


var NewDivAddy5 = document.createElement('div');
NewDivAddy5.id = "addy5";
NewDivAddy5.textContent = "Address: A galaxy far, far away.";
text5.appendChild(NewDivAddy5);

var NewDivHours5 = document.createElement('div');
NewDivHours5.id = "hours5";
NewDivHours5.textContent = "Hours: We never close.";
text5.appendChild(NewDivHours5);


// example of document fragment

// function createDiv(text) {
//   var div = document.createElement("div");
//   div.appendChild(document.createTextNode(text));
//   return div;
// }

// var divs = [
//   createDiv("foo"),
//   createDiv("bar"),
//   createDiv("baz")
// ];

// var docFrag = document.createDocumentFragment();
// for(var i = 0; i < divs.length; i++) {
//   docFrag.appendChild(divs[i]); // Note that this does NOT go to the DOM
// }

// document.body.appendChild(docFrag); // Appends all divs at once