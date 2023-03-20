var today = dayjs();
$("#currentDay").text(today.format("MMM D, YYYY"));
console.log(today);

var hour = dayjs().hour();
console.log(hour);

var container =$("#container");
var businessHours =[9,10,11,12,13,14,15,16,17,18,19,20,21,22];

for (let i = 0; i < businessHours.length; i++) {

  let row=$("<div  class='row time-block'>");

  let col2 = $("<div class='col-2 col-md-1 hour text-center py-3'>");
  
  let twelveHoursTime = businessHours[i] + ' am';
  if(businessHours[i] > 11){
    twelveHoursTime = businessHours[i] + ' pm';
    if(businessHours[i] > 12){
      twelveHoursTime = businessHours[i] - 12 +' pm';
    }
  }
  
  
  col2.append(twelveHoursTime);
  
  
  
  let textarea = $(
    "<textarea class='col-8 col-md-10 description' id='textarea-" +
      businessHours[i] +
      "'>"
  );

  if(hour > businessHours[i]) {
    textarea.addClass('future');
  }
  else if(hour === businessHours[i]) {
    textarea.addClass('present');
  }
  else{
    textarea.addClass('past');
  }
  
  
  let button = $("<button class='btn saveBtn col-2 col-md-1'>");

  let icon=$("<i class='fas fa-save'>");

  button.append(icon);

  row.append(col2, textarea, button);
  container.append(row);

let key = "textarea-" + businessHours[i];
let storedValue = localStorage.getItem(key);
if (storedValue) {
  textarea.val(storedValue);
}

button.on("click", function () {
  let value = textarea.val();
  localStorage.setItem(key, value);
});
}