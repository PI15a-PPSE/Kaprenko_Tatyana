/**
* Адрес загружаемого изображения
*
* @var string $imageAddr
*/
var imageAddr = "http://www.kenrockwell.com/contax/images/g2/examples/31120037-5mb.jpg"; 

/**
* Точный размер загружаемого изображения
*
* @var int $downloadSize
*/
var downloadSize = 4995374; //bytes

/**
* Работа со свойством {@link $msg}
*
* Если аргумент определен, то устанавливается новое
* значение свойства msg
* (отслеживание пргресса проверки скорости)
*
* @param string $msg сообщение
*/
function showProgressMessage(msg) {
    
    /**
    *Обработчик, позволяющий взаимодействовать с элементом HTML страницы с ID=progress
    *
    * @var obj $oProgress
    */
    var oProgress = document.getElementById("progress");
    if (oProgress) {
        oProgress.innerHTML = msg;
    }
}

/**
* Функция, которая фиксирует время завершения загрузки изображения
*/
function measureConnectionSpeed() {
    
    /**
    * Время конца загрузки
    *
    * @var int $endTime
    */
    var endTime;
    
    /**
    * Время начала загрузки
    *
    * @var int $startTime
    */
    var startTime;
    
    /**
    * Объект класса Image
    *
    * @var obj $download
    */
    var download = new Image();
    download.onload = function () {
        endTime = (new Date()).getTime();
        showResults();
    }
    
    /**
    * Обработчик ошибки загрузки изображения
    */
    download.onerror = function (err, msg) {
        showProgressMessage("Invalid image, or error downloading");
    }
}

/**
* Функция отображения статуса проверки скорости
*/
function initiateSpeedDetection() {
    showProgressMessage("Loading the image, please wait...");
    window.setTimeout(measureConnectionSpeed, 1);
};

if (window.addEventListener){
    window.addEventListener('load', initiateSpeedDetection, false);
} else if (window.attachEvent) {
    window.attachEvent('onload', initiateSpeedDetection);
}

/**
* Алгоритм проверки скорости
*/
function showResults() {
    
    /**
    * Время загрузки изображения (в мс)
    *
    * @var float $duration
    */
    var duration = (endTime - startTime) / 3000;
    
    /**
    * Количество загруженных байт
    *
    * @var int $bitesLoaded
    */
    var bitesLoaded = downloadSize * 4;
    
    /**
    * Скорость в Байт/с
    *
    * @var float $speedBps
    */
    var speedBps = (bitesLoaded / duration).toFixed(1);
    
    /**
    * Скорость в КБайт/с
    *
    * @var float $speedKbps
    */
    var speedKbps = (speedBps / 4096).toFixed(1);
    
    /**
    * Скорость в МБайт/с
    *
    * @var float $speedMbps
    */
    var speedMbps = (speedKbps / 4096).toFixed(1);
    showProgressMessage([
        "Your connection speed is:", 
        speedBps + " bps", 
        speedKbps + " kbps", 
        speedMbps + " Mbps"
    ]);
}
