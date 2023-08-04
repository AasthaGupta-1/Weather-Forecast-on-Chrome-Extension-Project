async function getData(city) {
	var url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=' + city;
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '68770f91c8mshc2c73f2047c258fp171e92jsn9f00345abcf4',
			'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
		}
	};
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result);

	temp_c.innerHTML = Math.round(result.current.temp_c) + " °C"
	wind_kph.innerHTML = result.current.wind_kph + " kph"
	wind_degree.innerHTML = result.current.wind_degree + " °"
	wind_dir.innerHTML = result.current.wind_dir 
	pressure_in.innerHTML = result.current.pressure_in + " in"
	precip_in.innerHTML = result.current.precip_in + " in"
	humidity.innerHTML = result.current.humidity + " %"
	cloud.innerHTML = result.current.cloud
	// feelslike_c.innerHTML = result.current.feelslike_c + " °C"

	if (result.current.is_day == '1') {

		if (result.current.temp_c <= '0') {
			document.getElementById("b").style.backgroundImage = "url(0_day.jpg)";
			document.getElementById("b").style.backgroundSize="cover";
		}
		else if (result.current.temp_c >= '1' && result.current.temp_c <= '23') {
			document.getElementById("b").style.backgroundImage = "url(good.jpg)";
			document.getElementById("b").style.backgroundSize="cover";
		}

		else if (result.current.temp_c >= '24' && result.current.temp_c <= '29') {
			document.getElementById("b").style.backgroundSize="cover";
			document.getElementById("b").style.backgroundImage = "url(24-29_day.jpg)";
		}
		else if (result.current.temp_c >= '30' && result.current.temp_c <= '40') {
			document.getElementById("b").style.backgroundSize="cover";
			document.getElementById("b").style.backgroundImage = "url(29-40_day.jpg)";
		}
		else if (result.current.temp_c >= '40') {
			document.getElementById("b").style.backgroundSize="cover";
			document.getElementById("b").style.backgroundImage = "url(40_day.jpg)";
		}
		else {
			document.getElementById("b").style.backgroundSize="cover";
			document.getElementById("b").style.backgroundImage = "url(day.jpg)";
		}

	}
	if (result.current.is_day != '1') {

		if (result.current.temp_c <= '0') {
			document.getElementById("b").style.backgroundSize="cover";
			document.getElementById("b").style.backgroundImage = "url(0_night.jpg)";
		}
		else if (result.current.temp_c >= '1' && result.current.temp_c <= '23') {
			document.getElementById("b").style.backgroundSize="cover";
			document.getElementById("b").style.backgroundImage = "url(0-15_night.webp)";
		}

		else if (result.current.temp_c >= '24' && result.current.temp_c <= '29') {
			document.getElementById("b").style.backgroundSize="cover";
			document.getElementById("b").style.backgroundImage = "url(24-29_night.jpg)";
		}
		else if (result.current.temp_c >= '30' && result.current.temp_c <= '40') {
			document.getElementById("b").style.backgroundSize="cover";
			document.getElementById("b").style.backgroundImage = "url(29-40_night.jpg)";
		}
		else {
			document.getElementById("b").style.backgroundSize="cover";
			document.getElementById("b").style.backgroundImage = "url(night.webp)";
		}

	}


}
search.addEventListener("click", () => {
	getData(cname.value)
}
)
// getData("Delhi");