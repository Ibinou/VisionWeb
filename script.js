const video = document.getElementById('video');

// Check if the browser supports getUserMedia API
if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices.getUserMedia({ video: true })
    .then(function (stream) {
      video.srcObject = stream;
    })
    .catch(function (err) {
      console.error("Error accessing camera: " + err);
    });
} else {
  alert("Camera not supported by your browser.");
}
