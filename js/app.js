let carList = [];
let car = document.getElementById("car");
let color = document.getElementById("color");
let year = document.getElementById("year");

let submit = () => {
  let carObj = car.value;
  let colorObj = color.value;
  let yearObj = year.value;

  obj = {
    car: carObj,
    color: colorObj,
    year: yearObj,
  };

  carList.push(obj);

  car.value = "";
  color.value = "";
  year.value = "";
};

let byYear = document.getElementById("year-display");
let disList = document.getElementById("wraper");
let note = document.getElementById("note");

let display = () => {
  let selectedYear = carList.filter((car) => car.year > byYear.value);

  selectedYear.map((item) => {
    disList.innerHTML += `
      <div class = "inner-div">
        <div>Brand: ${item.car} </div>
        <div>Color: ${item.color} </div>
        <div>Year: ${item.year} </div>
      </div>
    `;
  });
};
