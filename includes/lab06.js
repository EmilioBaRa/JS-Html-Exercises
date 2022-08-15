//PART1 Q1
//Hotel class using ES6
class Hotel{
	
	//Constructor with the basic details of Hotel class
	constructor(name, city, rooms, booked, gym){
		this.name = name;
		this.city = city;
		this.rooms = rooms;
		this.booked = booked;
		this.gym = gym;
		this.restaurants = [["Harolds", "American"], ["Kyoto", "Japanese"], ["Relax", "Fusion"]]; //default restaurants map
		let i = 0;
		for (let [key, value] of this.restaurants) {
			if(i > 0){
				this.allRestaurants = this.allRestaurants + "<br><b>" + key + ":</b> " + value + "<br>";
			}
			else{
				this.allRestaurants = "<br><b>" + key + ":</b> " + value + "<br>";
			}
			i++;
		}
		this.roomTypes = new Array("twin", "double", "suite");
		this.swimmingPool = true;
		this.airportShuttle = false;
	}
	
	get_name_location (){
		return "The hotel is " + this.name + ", located in " + this.city + "<br><br>";
	}
	
	set_name(newName){
		this.name = newName;
	}
	
	set_city(newLocation){
		this.city = newLocation;
	}
	
	set_rooms(newRooms){
		this.rooms  = newRooms;
	}
	
	get_rooms(){
		return "There are " + this.rooms + " rooms in total, available today are " + parseInt(this.rooms - this.booked) +" <br><br>";
	}
	
	set_booked(newBooked){
		this.booked = newBooked;
	}
	
	get_booked(){
		return this.booked;
	}
	
	set_gym(newGym){
		this.gym = newGym;
	}
	
	get_gym(){
		return this.gym;
	}
	
	bookRoom(){
		if(this.rooms - this.booked > 0){
			this.booked++;
			return "A room has been booked, there are " + parseInt(this.rooms - this.booked) + " remaining for booking<br><br>";
		}
		else{
			return "Impossible to book, no rooms left<br><br>";
		}
	}
	
	cancelRoom(){
		if(this.booked > 0){
			this.booked--;
			return "A room has been cancelled, there are " + parseInt(this.rooms - this.booked) + " remaining for booking<br><br>";
		}
		else{
			return "Impossible to cancell, no rooms have been booked<br><br>";
		}
	}
	
	addRoomTypes(newType){
		this.roomTypes.push(newType);
	}
	
	getRoomTypes(){
		var textRooms = "The available room types are: ";
		var textRoomTypes;
		for(let i = 0; i < this.roomTypes.length; i++){
			textRoomTypes = textRoomTypes + this.roomTypes[i] + ",";
		}
		return (textRooms + textRoomTypes + "<br><br>").replace("undefined", "");
	}
	
	setPool(pool){
		this.swimmingPool = pool;
	}
	
	getPool(){
		var poolText = "<b>Hotel has a swimming pool?</b>";
		if(this.swimmingPool){
			return poolText + " true<br><br>";
		}
		else{
			return poolText + " false<br><br>";
		}
	}
	
	setShuttle(shuttle){
		this.airportShuttle = shuttle;
	}
	
	getShuttle(){
		var airportShuttleText = "<b>Hotel has a shuttle?</b>";
		if(this.airportShuttle){
			return airportShuttleText + " true<br><br>";
		}
		else{
			return airportShuttleText + " false<br><br>";
		}
	}
	
	getRestaurants(){
		return "<b>Hotel has 3 restaurants each with a different theme. </b>They are:<br>" + this.allRestaurants;
	}
}


var hotelName = prompt("Enter the hotel name");
var hotelCity = prompt("Enter the hotel city");

do{
	var hotelRooms = prompt("Enter the total of rooms in the hotel");
}while(isNaN(hotelRooms));//Only numbers are valid for hotelRooms

do{
	var hotelBooking = prompt("How many rooms have been booked");
}while(isNaN(hotelBooking));//Only numbers are valid for hotelBooking

var trueOrFalseGym;
do{
	var hotelGym = prompt("Is there a gym on the hotel? yes/no");
	if(hotelGym == "yes"){
		trueOrFalseGym = true;
	}
	else if(hotelGym == "no"){
		trueOrFalseGym = false;
	}
	else{
		trueOrFalseGym = null;
	}
}while(trueOrFalseGym == null);//Only accepts boolean values


const firstHotel = new Hotel(hotelName, hotelCity, hotelRooms, hotelBooking, trueOrFalseGym);//creation of an object of type Hotek

var printOperationsOnScreen1 = document.getElementById("hello1");

firstHotel.addRoomTypes("honeymoon");//Decided to do this operation before printing on screen

printOperationsOnScreen1.innerHTML = "<div id='questions'>Part 1 question 1</div><br>" + firstHotel.get_name_location() + firstHotel.get_rooms() + firstHotel.bookRoom() //Gets all return operations and prints them in the div id hello
						+ firstHotel.cancelRoom() + firstHotel.getRoomTypes() + firstHotel.getShuttle() + firstHotel.getPool() + firstHotel.getRestaurants();
						
						
//PART2 Q1						

class Resort extends Hotel{
	constructor(name, city, rooms, booked, gym, resortType, beachFront, kidsClub){
		super(name, city, rooms, booked, gym);
		this.resortType = resortType;
		this.beachFront = beachFront;
		this.kidsClub = kidsClub;
	}
	
	getNewResort(){
			return "<b>A new Resort has been created:</b> " + this.name + " located in " + this.city + ". It is a " + this.getResortType() + " resort.<br><br>";
	}
	
	setResortType(resortType){
		this.resortType = resortType;
	}
	
	setBeachFront(beachFront){
		this.beachFront = beachFront;
	}
	
	setKidsClub(kidsClub){
		this.kidsClub = kidsClub;
	}
	
	getResortType(){
		return this.resortType;
	}
	
	getBeachFront(){
		return "<b>Is it on the beach? </b>" + this.beachFront + "<br><br>";
	}
	
	getKidsClub(){
		var textKidsClub = 	"<b>Does it have a kids club?</b> " + this.kidsClub + "<br><br>";
		if(this.kidsClub){
			textKidsClub = textKidsClub + "Oh No! The kids club is being renovated!" + "<br><br>";
			this.kidsClub = false;
			textKidsClub = textKidsClub + "<b>Does it have a kids club?</b> " + this.kidsClub + "<br><br>";
		}
		return textKidsClub;
	}
}

const firstResort = new Resort("Renaissance Phuket", "Phuket", 100, 10, true, "Familiy", true, true);
var printOperationsOnScreen2 = document.getElementById("hello2");

printOperationsOnScreen2.innerHTML = "<br><br><div id='questions'>Part 2 question 1</div><br>" + firstResort.getNewResort() + firstResort.getBeachFront() + firstResort.getKidsClub();