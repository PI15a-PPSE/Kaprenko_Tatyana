/**
* Адрес загружаемого изображения
*
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
    * Время начала загрузки
    *
    */
    var startTime;
    
    /**
    * Время конца загрузки
    *
    */
    var endTime;
    
    /**
    * Объект класса Image
    *
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

