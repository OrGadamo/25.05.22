// var manager = { //1
//   firstName: "Or",
//   lastName: "Gadamo",
//   age: 24,
//   salary: 30000,
// };
// var employee = {  //2
//   fullName: "John Doe",
//   yearOfBirth: 1990,
//   email: "johnyeah@gmail.com",
//   adress: "Itlay,Rome",
// };
// var fruit = {   //3
//   name: "Banana",
//   color: "yellow",
//   type: "Delicious",
// };
// document.write(fruit.name + "<br>");   //4
// document.write(fruit.color + "<br>");  //5
// document.write(fruit.type + "<br>");   //6
// var myClass = {   //7
//   classNumber: "2",
//   studentsNumber: 5,
//   studentsNames: ["or", "ori", "oriel", "ordon", "organ"],
// };
// for (var i = 0; i < myClass.studentsNames.length; i++) { //8
//   document.write(myClass.studentsNames[i] + "<br>");
// }
// var sensei = {        //9
//   senseiName: "Maya-chan",
//   numberOfChildren: 10,
//   childrenNames: [
//     "Dan",
//     "Amit",
//     "Luffy",
//     "Ace",
//     "Yon",
//     "Otama",
//     "Mary",
//     "Jhon",
//     "David",
//     "Lior",
//   ],
// };
// for (var i = 0; i < sensei["childrenNames"].length; i++) {   //10
//   document.write(sensei["childrenNames"][i] + "<br>");
// }
// console.log(sensei[prompt("enter a key")]); //11
// var objclass = { //12
//   classnumber: "12",
//   numberOfStudents: 10,
//   age: 20,
// };
// console.log(objclass);
// var teacher = {  //13
//   name: prompt("enter the teacher name:"),
// };
// console.log(teacher);
// var admin = {}; //14
// for (var i = 0; i < 4; i++) {
//   var key = prompt("enter key:");
//   var value = prompt("enter value:");
//   admin[key] = value;
// }
// console.log(admin);
// var user = {}; //15
// for (var i = 0; i < 4; i++) {
//   var key = prompt("enter key:");
//   var value = prompt("enter value:");
//   user[key] = value;
//   document.write("<div>" + value + "</div>");
// }
// var cars = []; //16
// for (var i = 0; i < 4; i++) {
//   var car = {};
//   car["company"] = prompt("enter company:");
//   car["color"] = prompt("enter color:");
//   car["kilometragh"] = +prompt("enter km");
//   car["year"] = +prompt("enter year");
//   cars.push(car);
//   document.write(
//     "<div>" +
//       car.company +
//       " " +
//       car.color +
//       " " +
//       car.kilometragh +
//       " " +
//       car.year +
//       "</div>"
//   );
// }
function printCatsObjects() {
  //17
  for (var i = 0; i < 4; i++) {
    var cat = {};
    cat.name = prompt("enter cat name");
    cat.yearOfBirth = +prompt("enter cat year of birth");
    cat.type = prompt("enter cat type");
    cat.weight = +prompt("enter cat weight");
    document.write(
      "<h1>" +
        cat.name +
        ": " +
        cat.yearOfBirth +
        ", " +
        cat.type +
        ", " +
        cat.weight +
        "</h1>"
    );
  }
}
// printCatsObjects();
function printUserDogs() {
  //18
  //18
  var numberOfDogs = +prompt("how many dogs?");
  for (var i = 0; i < numberOfDogs; i++) {
    var dog = {};
    dog.name = prompt("enter dog's name");
    dog.age = +prompt("enter dog's age");
    dog.type = prompt("enter dog's type");
    dog.owner = prompt("enter dog's owner");
    document.write(
      "<p>" +
        dog.name +
        ": " +
        dog.age +
        ", " +
        dog.type +
        ", " +
        dog.owner +
        "</p>"
    );
  }
}
// printUserDogs();
function printwingedBugs() {
  //19
  //19
  var numberOfBugs = +prompt("how many bugs");
  for (var i = 0; i < numberOfBugs; i++) {
    var bug = {};
    bug.regularName = prompt("enter bug's regular name");
    bug.formalrName = prompt("enter formal name");
    bug.numberOflegs = prompt("enter number of legs");
    bug.wings = confirm("deos he have any wings?");
    if (bug.wings) {
      document.write(
        "<h3>" +
          bug.regularName +
          ", " +
          bug.formalrName +
          ", " +
          bug.numberOflegs +
          "</h3>"
      );
    }
  }
}
// printwingedBugs();
function printChildren() {
  //20
  var numberOfChildren = +prompt("how many children");
  for (var i = 0; i < numberOfChildren; i++) {
    var child = {};
    child.name = prompt("enter name:");
    child.age = +prompt("enter age:");
    child.kindergarten = confirm("in kindergarten?");
    if (child.age > 4) {
      document.write(
        "<p>" +
          child.name +
          "," +
          child.age +
          ", " +
          child.kindergarten +
          "</p>"
      );
    }
  }
}
// printChildren();
function printAvaliableComputer(numberOFcomputers) {
  //21
  for (var i = 0; i < numberOFcomputers; i++) {
    var computer = {};
    computer.company = prompt("enter company");
    computer.model = prompt("enter model");
    computer.weight = +prompt("enter weight");
    computer.avaliable = confirm("is avaliable?");
    if (computer.avaliable && computer.weight > 2) {
      document.write(
        "<p>" +
          computer.company +
          ", " +
          computer.model +
          ", " +
          computer.weight +
          "</p>"
      );
    }
  }
}
// printAvaliableComputer(1);
function printRichOldTeacher(numberOfTeacher) {
  //22
  for (var i = 0; i < numberOfTeacher; i++) {
    var teacher = {};
    teacher.name = prompt("enter name");
    teacher.hourlySalary = +prompt("enter hourly salary");
    teacher.email = prompt("enter email");
    teacher.birthYear = prompt("enter year of birth");
    if (teacher.hourlySalary > 100 || teacher.birthYear < 1990) {
      document.write(
        "<span>" +
          teacher.name +
          ", " +
          teacher.hourlySalary +
          ", " +
          teacher.email +
          ", " +
          teacher.birthYear +
          "</span>"
      );
    }
  }
}
// printRichOldTeacher(1);
function printFurintures(numberOfFurinture) {
  //23
  for (var i = 0; i < numberOfFurinture; i++) {
    var furinture = {};
    furinture.name = prompt("enter name");
    furinture.brand = prompt("enter brand");
    furinture.stores = [];
    var numberOfStores = +prompt("how many stores");
    for (var j = 0; j < numberOfStores; j++) {
      furinture.stores.push(prompt("store name:"));
    }
    furinture.price = +prompt("enter price");
    document.write(furinture.name + "<br>");
    for (var j = 0; j < numberOfStores; j++) {
      document.writeln(furinture.stores[j]);
    }
    document.write("<br>");
  }
}
// printFurintures(1);
function printReleventProperty(numberOfProperties) {
  //24
  for (var i = 0; i < numberOfProperties; i++) {
    var property = {};
    property.adress = prompt("enter adress");
    property.leasePrice = +prompt("enter lease price");
    property.purchasePrice = +prompt("enter purchase price");
    var intrestPeople = +prompt("how many are intrested?");
    property.People = [];
    for (var j = 0; j < intrestPeople; j++) {
      property.People.push(prompt("enter name:"));
    }
    property.broker = confirm("is there a broker to the property?");
    if (!property.broker) {
      document.write("<h2>" + property.adress + "<h2>");
      document.write(
        "<h4>" + property.leasePrice + ":" + property.purchasePrice + "<h4>"
      );
      document.write("<p>");
      for (var j = 0; j < property.People.length; j++) {
        document.writeln(property.People[j]);
      }
      document.write("</p>");
    }
  }
}
// printReleventProperty(2);
function printReleventCountry(numberOfCountries) {
  //25
  for (var i = 0; i < numberOfCountries; i++) {
    var country = {};
    country.name = prompt("enter name");
    country.cities = [];
    var citynum = +prompt("number of cities");
    for (var j = 0; j < citynum; j++) {
      country.cities.push(prompt("enter a city"));
    }
    country.habad = confirm("habad?");
    if (country.habad) {
      document.write("<h1>" + country.name + "</h1>");
      for (var j = 0; j < citynum; j++) {
        document.writeln(country.cities[j]);
      }
    }
  }
}
// printReleventCountry(2);
function printUserMovies() {
  var numberOfMovies = +prompt("enter the number of movies:");
  for (var i = 0; i < numberOfMovies; i++) {
    var movie = {};
    movie.name = prompt("enter movie name:");
    movie.views = +prompt("enter views number:");
    movie.year = +prompt("enter release year:");
    document.write("<h1>" + movie.name + "</h1>");
    document.write("<h4>" + movie.views + " " + movie.year + "</h4>");
  }
}
// printUserMovies();
