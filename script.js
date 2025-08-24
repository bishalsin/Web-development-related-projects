function scrollToModels() {
  document.getElementById('models').scrollIntoView({ behavior: 'smooth' });
}

document.getElementById('testDriveForm').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Your test drive has been booked!');
});


document.getElementById('testdrive').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Your test drive has been booked.')
} )


document.getElementById('contact').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Your message has been sent!');
});