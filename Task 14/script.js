var arr = ["https://avatars.dzeninfra.ru/get-zen_doc/9213367/pub_64a3dfa48f545429c92f49d8_64a3e01701a19f02fd13a8d7/scale_1200",
			  "https://i.pinimg.com/originals/4f/e5/ec/4fe5ec5019ca3304d85340e73bee3a3a.jpg",
			  "https://www.allcarz.ru/wp-content/uploads/2022/10/foto-adro-m3-m4_02.jpg"
];

var x = 0;

function changeImg(){
	if(x < arr.length - 1){
		++x;
		var element = document.getElementById("img1");
		element.src = arr[x];		
	}
}

var btn = document.getElementById('btnimg');
btn.addEventListener('click', changeImg);


