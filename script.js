function toggleDropdown() {
  var dropdown = document.getElementById("dropdownContent");
  if (dropdown.style.display) {
      dropdown.style.display = "";
  } else {
      dropdown.style.display = "block";
  }
}
const button = document.getElementById('alertButton');
button.addEventListener('mouseover', function() {
    this.style.backgroundColor = 'blue';
});
button.addEventListener('mouseout', function() {
    this.style.backgroundColor = '';
});

const button2 = document.getElementById('announcementButton');
button2.addEventListener('mouseover', function() {
    this.style.backgroundColor = 'blue';
});
button2.addEventListener('mouseout', function() {
    this.style.backgroundColor = '';
});

const button3 = document.getElementById('accountButton');
button3.addEventListener('mouseover', function() {
    this.style.backgroundColor = 'blue';
});
button3.addEventListener('mouseout', function() {
    this.style.backgroundColor = '';
});