var productBlocks = document.querySelectorAll('.product'), 							//блоки с товарами
    productInfoTags = document.querySelectorAll('.product-info'), 		 //теги с информацией
    film = document.querySelector('.film'),
    infoBlock = document.querySelector('.main-full-description'),      //главный блок с информацией
    contentWrap = document.querySelector('.content-wrap');

var mainImage = document.querySelector('#main-image'),
    paragraphInfo = document.querySelector('.description-text'),
    titleTags = document.querySelectorAll('.title'),
    descriptionTags = document.querySelectorAll('.description'),
    priceTag = document.querySelector('#price-value'),
    thisClass;

var productsObject = {  // в перспективе .JSON файл с сервера
	PC: {
		objectName: 'PC',
		textDescription: 'Компьютер ARTLINE Gaming поможет вам полностью раскрыть свое мастерство в любимых играх. Используя компьютер ARTLINE Gaming X79 v10, вы сможете комфортно просматривать видео высокой четкости, играть в современные игры, работать с любыми приложениями.',
		titles: ['Процессор', 'Объем оперативной памяти', 'Тип видеокарты и обьем видеопамяти', 
		'Чипсет материнской платы', 'Обьем HDD'],
		descriptions: ['Четырехъядерный Intel Core i7-7700 (3.6 - 4.2 ГГц)', '32 ГБ', 'Дискретная, nVidia GeForce GTX 1080, 8 ГБ выделенной видеопамяти', 'Intel B250', 'HDD 2 ТБ + SSD 250 ГБ'],
		price: '52 389',
		imgPath: 'img/PC.png'
	},

	Keyboard: {
		objectName: 'Keyboard',
		textDescription: 'Клавиатура Adjudication предназначена для геймеров. Яркие накладки на клавиши WSAD и стрелки позволит геймерам определить эти важные клавиши, не отвлекаясь на их поиск во время игры.',
		titles: ['Интерфейс', 'Тип клавиатуры', 'Назначение', 'Совместимость с ОС', 'Цвет букв кириллицы'],
		descriptions: ['USB', 'Мембранные', 'Геймерские', 'Microsoft Windows', 'Белый'],
		price: '239',
		imgPath: 'img/Keyboard.jpg'
	},

	VideoCard: {
		objectName: 'Video-Card',
		textDescription: 'Видеокарты Gigabyte серии Xtreme Gaming созданы, чтобы удовлетворить требования игровых энтузиастов. Видеокарты Xtreme Gaming основаны на революционной архитектуре nVidia Pascal GPU, обеспечивая невероятный игровой опыт.',
		titles: ['Графический чип', 'Частота памяти', 'Частота ядра', 'Объем памяти', 'Разрядность шины памяти'],
		descriptions: ['GeForce GTX 1080', '10400 МГц', '1784 МГц', '8 ГБ', '256 бит'],
		price: '20 399',
		imgPath: 'img/Video Card.png'
	},

	ACDC: {
		objectName: 'ACDC',
		textDescription: 'Raidmax Cobra RX-600AF-B — блок питания форм-фактора ATX с выходной мощностью 600 Вт. Блок питания предлагает пользователям хорошую производительность наряду с высоким качеством, а также имеет систему охлаждения состоящую из 135 мм вентилятора и несколько уровней защиты.',
		titles: ['Код товара', 'Мощность', 'Тип', 'Охлаждение', 'Тип разъема подключения к материнской плате'],
		descriptions: ['RX-600AF-B', '600 Вт', 'Компьютерный', 'Вентилятор 135 мм', 'ATX 20+4pin'],
		price: '898',
		imgPath: 'img/ACDC.jpg'
	},

	Monitor: {
		objectName: 'Monitor',
		textDescription: 'Самый тонкий из наших ЖК-дисплеев. Невероятно тонкий и стильный корпус. Самый тонкий из наших ЖК-дисплеев изготовлен по инновационной технологии из сверхпрочного и легкого металла. Благодаря реалистичной передаче цветов монитор обеспечивает потрясающе яркое и красивое изображение. Сертификат Technicolor подтверждает точность цветопередачи.',
		titles: ['Диагональ дисплея', 'Максимальное разрешение дисплея', 'Тип матрицы', 'Время реакции матрицы', 'Частота обновления'],
		descriptions: ['27"', '1920 x 1080', 'IPS', '7 мс (GtG)', '60 Гц'],
		price: '5 435',
		imgPath: 'img/Monitor.jpg'
	},

	CPU: {
		objectName: 'CPU',
		textDescription: 'Новый процессор Intel Core i7-6900K, с кодовым названием микроархитектуры Broadwell-E. Предназначен для настольной платформы Intel LGA 2011-3. Принадлежит к семейству высокопроизводительных процессоров Core i7 с большим разгонным потенциалом.',
		titles: ['Количество ядер', 'Базовая тактовая частота процессора', 'Кэш-память', 'Расчетная мощность', 'Литография'],
		descriptions: ['8', '3,20 GHz', '20 MB', '140 W', '14 nm'],
		price: '32 799',
		imgPath: 'img/CPU.jpg'
	}
}


contentWrap.onclick = showThisInfoBlock;


function showThisInfoBlock (event) {
	thisClass = event.target.className;          

	if (thisClass != 'content-wrap') {						

		if (thisClass.length > 9) {									//проверка на "двойной" класс
			thisClass = thisClass.slice(8);
		}

		showInfoBlock();             		 	       //показывает блок, затеняет экран
		showInfo(thisClass);        		        //передаем полученное имя класса - (имя объекта), показываем инфу
	}

}

function showInfoBlock() {
	film.style.display = 'block';
	infoBlock.style.display = 'block';
}


//загрузка данных

function showInfo(objName) {  				 
	mainImage.src = productsObject[objName].imgPath;

	var p = document.createTextNode(productsObject[objName].textDescription);

	paragraphInfo.appendChild(p);

	for (i = 0; i < titleTags.length; i++) {
		var t = document.createTextNode(productsObject[objName].titles[i]);

		titleTags[i].appendChild(t);
	}

	for (i = 0; i < descriptionTags.length; i++) {
		var t = document.createTextNode(productsObject[objName].descriptions[i]);

		descriptionTags[i].appendChild(t);
	}

	var price = document.createTextNode(productsObject[objName].price);
	priceTag.appendChild(price);
}



film.onclick = function hideInfoBlock () {
	film.style.display = 'none';
	infoBlock.style.display = 'none';
	deleteInfoFromBlock();
}

//перезаписывает пустыми строками

function deleteInfoFromBlock() {
	paragraphInfo.innerHTML = '';

	for (i = 0; i < descriptionTags.length; i++) {
		descriptionTags[i].innerHTML = '';
	}

	for (i = 0; i < titleTags.length; i++) {
		titleTags[i].innerHTML = '';
	}
	
	priceTag.innerHTML = '';
}