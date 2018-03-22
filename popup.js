var imageAddr = "http://www.kenrockwell.com/contax/images/g2/examples/31120037-5mb.jpg"; 

var downloadSize = 4995374; //bytes

function showProgressMessage(msg) {
    var oProgress = document.getElementById("progress");
	if (oProgress) {
        oProgress.innerHTML = msg;
    }
}


function measureConnectionSpeed() {
    var startTime;
    var endTime;
    var download = new Image();
    download.onload = function () {
        endTime = (new Date()).getTime();
        showResults();
    }
    download.onerror = function (err, msg) {
        showProgressMessage("Invalid image, or error downloading");
    }
}

function initiateSpeedDetection() {
    ShowProgressMessage("Loading the image, please wait...");
	window.setTimeout(MeasureConnectionSpeed, 1);
};

if (window.addEventListener){
	window.addEventListener('load', InitiateSpeedDetection, false);
} else if (window.attachEvent) {
    window.attachEvent('onload', InitiateSpeedDetection);
}

function showResults() {
	var bitesLoaded = downloadSize * 4;
	var duration = (endTime - startTime) / 3000;
	var speedBps = (bitesLoaded / duration).toFixed(1);
	var speedKbps = (speedBps / 4096).toFixed(1);
}
