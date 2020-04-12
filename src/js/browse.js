function click_Searchbtn() {
    //$('#tbxSearch').val()
    alert('文本框内容已搜索');
}
function click_Hotbtn() {
    alert('已筛选热门内容');
}
function click_Filterbtn() {
    alert('已筛选选择器内容');
}

var cityList={ 
	China: ['Shanghai','Kunming','Beijing','Yantai'],
	Japan: ['Tokyo', 'Osaka', 'Kamakura'],
	Italy: ['Roma','Milan','Venice','Florence'],
	America: ['New York','San Francisco', 'Washington']
};

var cityListChinese={ 
	China: ['上海','昆明','北京','烟台'],
	Japan: ['东京', '大阪', '镰仓'],
	Italy: ['罗马','米兰','威尼斯','弗洛伦萨'],
	America: ['纽约','旧金山', '华盛顿']
};
	
function city_change(country){
	var city = document.getElementById("city-filter");
	/*清空html以便替换*/
	city.innerHTML = "";
	/*eval语句转化表达式*/
	eval("var cities = cityList."+country+";");
	eval("var citiesCN = cityListChinese."+country+";");
	city.add(new Option("请选择城市"));
	for(var i = 0; i < cities.length; i++) {
		city.add(new Option(citiesCN[i],cities[i]));
	}
}
