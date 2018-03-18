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
        ShowProgressMessage("Invalid image, or error downloading");
    }
}