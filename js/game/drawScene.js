function drawScene()
			{
				var myCanvas = document.getElementById("myCanvas");
				var ctx = myCanvas.getContext("2d");
				for(var row=0;row<Map.length;row++)
				{
					for(var col=0;col<Map[row].length;col++)
					{
						ctx.drawImage(imgBG,col*picturerSize,row*picturerSize,picturerSize,picturerSize);
						if(Map[row][col] == 1)
						{
							ctx.drawImage(imgDiamond,col*picturerSize,row*picturerSize,picturerSize,picturerSize);
						}
						if(Map[row][col] == 2)
						{
							ctx.drawImage(imgWall,col*picturerSize,row*picturerSize,picturerSize,picturerSize);
						}
						if(Map[row][col] == 3)
						{
							ctx.drawImage(imgBody,col*picturerSize,row*picturerSize,picturerSize,picturerSize);
						}
						if(Map[row][col] == 4)
						{
							ctx.drawImage(imgTrap,col*picturerSize,row*picturerSize,picturerSize,picturerSize);
						}
						if(Map[row][col] == 44)
						{
							ctx.drawImage(imgRip,col*picturerSize,row*picturerSize,picturerSize,picturerSize);
						}
						if(Map[row][col] == 5)
						{
							ctx.drawImage(imgHeadleft,col*picturerSize,row*picturerSize,picturerSize,picturerSize);
						}
						if(Map[row][col] == 6)
						{
							ctx.drawImage(imgHeadup,col*picturerSize,row*picturerSize,picturerSize,picturerSize);
						}
						if(Map[row][col] == 7)
						{
							ctx.drawImage(imgHeadright,col*picturerSize,row*picturerSize,picturerSize,picturerSize);
						}
						if(Map[row][col] == 8)
						{
							ctx.drawImage(imgHeaddown,col*picturerSize,row*picturerSize,picturerSize,picturerSize);
						}
						if(Map[row][col] == 9)
						{
							ctx.drawImage(imgPLayer,col*picturerSize,row*picturerSize,picturerSize,picturerSize);
						}
						if(Map[row][col] == 99)
						{
							ctx.drawImage(imgPLayerStar,col*picturerSize,row*picturerSize,picturerSize,picturerSize);
						}
						if(Map[row][col] == 11)
						{
							ctx.drawImage(imgStar,col*picturerSize,row*picturerSize,picturerSize,picturerSize);
						}

					}
				}
				if(checkWin())
				{
					ctx.fillStyle = "white";
					ctx.font = "50px Arial";
					ctx.textAlign = "center";
					ctx.fillText("You Win",myCanvas.width/2,myCanvas.height/2);
				}
				if(checkDeath2())
				{
					ctx.fillStyle = "white";
					ctx.font = "50px Arial";
					ctx.textAlign = "center";
					ctx.fillText("You Lose",myCanvas.width/2,myCanvas.height/2);
				}
			}