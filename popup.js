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
};

