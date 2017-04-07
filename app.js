let songs=["Acoustic Fingerstyle.mp3",
		   "Maroon5 - Don't Wanna Know.mp3",
		   "Dont Wanna Live Forever.mp3",
		   "Cant Slow Down-Hedley.mp3",
		   "I Feel It Coming.mp3",
		   "Jonas Blue- Perfect Strangers.mp3",
		   "Jason Marz - I'm Yours.mp3",
		   "Bring Me The Horizon-Avalanche.mp3",
		   "AlanWalker-Faded.mp3"]

let song = new Audio()
let currentsong = 0
let repeaticoncheck
let songtorepeat
let playimagecheck = document.getElementById("playpause").src
window.onload = songcheck()
window.onload = loadsong()

function songcheck(){
	repeaticoncheck = document.getElementById("repeat").src 
	setInterval(function(){ 
			if(song.ended)
			{	
				document.getElementById("equilizer").src="eqstop.png";
				currentsong = currentsong + 1
				if(!(currentsong<=7))
				{
					currentsong=0;
				}
				loadsong()
			}
		}, 100);
}

function loadsong(){
		song.src = "songs/" + songs[currentsong]
		document.getElementById("title").innerHTML= songs[currentsong].bold()
		document.getElementById("playpause").src="pauseillo.png"
		song.play()
		document.getElementById("equilizer").src="eqstart.png";
}


function repeatsong(){	
	if(repeaticoncheck != "repeatone.png"){
		document.getElementById("repeat").src="repeatone.png"
		repeaticoncheck = "repeatone.png"
		song.loop = true
	}
	else{
	 	document.getElementById("repeat").src="repeat.png"
	 	repeaticoncheck ="repeat.png"
	 	song.loop = false
	}
}

function forward() {
	if(currentsong<=7)
	{
		for(let i=currentsong; i<=7;i++)
		{	
			song.src = "songs/" + songs[currentsong+1]
			let temp = songs[currentsong+1]
			document.getElementById("title").innerHTML= temp.bold()
			song.play()
		}
		currentsong++
	}
	else{
		currentsong=0;
	}
}

function backward() {
	if(currentsong>=1)
	{
		for(let i=currentsong; i>=0;i--)
		{	
			song.src = "songs/" + songs[currentsong-1]
			let temp = songs[currentsong-1]
			document.getElementById("title").innerHTML= temp.bold()
			song.play()
		}
		currentsong--
	}
}


function play(){
	console.log(playimagecheck)
	if(song.paused)
	{
		song.play();
		document.getElementById("playpause").src="pauseillo.png";
		document.getElementById("equilizer").src="eqstart.png";
	}
	else
	{
		song.pause();
		document.getElementById("playpause").src="playillo.png";
		document.getElementById("equilizer").src="eqstop.png"
	}

}

function volumedown(){
	if(song.volume>0)
	song.volume = song.volume-0.1
	console.log(song.volume)
}

function volumeup(){
	if(song.volume<1)
	song.volume = song.volume+0.1
	console.log(song.volume)
}


