
var Snake = [{"row":5, "col":3, "way":"up"},
			 {"row":1, "col":17, "way":"up"},
			];
var Body = [{"row":6, "col":3, "way":"up"},
			{"row":7, "col":3, "way":"up"},
			{"row":8, "col":3, "way":"up"},
			{"row":9, "col":3, "way":"up"},
			{"row":10,"col":3, "way":"up"},
			{"row":2, "col":17, "way":"up"},
			{"row":3, "col":17, "way":"up"},
			{"row":4, "col":17, "way":"up"},
			{"row":5, "col":17, "way":"up"},
			{"row":6, "col":17, "way":"up"},
			];
function Snakemove()
		{
			for(i = 0; i < 2;i++)
			{	
				if(Snake[i].way == "up")
				{
					
					Map[Snake[i].row-1][Snake[i].col] = 6;
					Map[Snake[i].row][Snake[i].col] = 0;
					Snake[i].row --;
					if(Snake[i].row == 0)
					{
						Snake[i].way = "left";
					}
				}
				else if(Snake[i].way == "left")
				{
					
					Map[Snake[i].row][Snake[i].col-1] = 5;
					Map[Snake[i].row][Snake[i].col] = 0;
					Snake[i].col --;
					if(Snake[i].col == 0 || Snake[i].col == 9)
					{
						Snake[i].way = "down";
					}
				}
				else if(Snake[i].way == "down")
				{
					
					Map[Snake[i].row+1][Snake[i].col] = 8;
					Map[Snake[i].row][Snake[i].col] = 0;
					Snake[i].row ++;
					if(Snake[i].row == Map.length-1 || (Snake[i].row == 6 && Snake[i].col==9))
					{
						Snake[i].way = "right";
					}
				}
				else if(Snake[i].way == "right")
				{
					
					Map[Snake[i].row][Snake[i].col+1] = 7;
					Map[Snake[i].row][Snake[i].col] = 0;
					Snake[i].col ++;
					if(Snake[i].col == 3 || Snake[i].col == 17)
					{
						Snake[i].way = "up";
					}
				}
			}
				for(i = 0; i < 10;i++)
				{	
					if(Body[i].way == "up")
					{
						Map[Body[i].row-1][Body[i].col] = 3;
						Map[Body[i].row][Body[i].col] = 0;
						Body[i].row --;
						if(Body[i].row == 0)
						{
							Body[i].way = "left";
						}
					}
					else if(Body[i].way == "left")
					{
						Map[Body[i].row][Body[i].col-1] = 3;
						Map[Body[i].row][Body[i].col] = 0;
						Body[i].col --;
						if(Body[i].col == 0 || Body[i].col == 9)
						{
							Body[i].way = "down";
						}
					}
					else if(Body[i].way == "down")
					{
						Map[Body[i].row+1][Body[i].col] = 3;
						Map[Body[i].row][Body[i].col] = 0;
						Body[i].row ++;
						if(Body[i].row == Map.length-1 || (Body[i].row == 6 && Body[i].col == 9))
						{
							Body[i].way = "right";
						}
					}
					else if(Body[i].way == "right")
					{
						Map[Body[i].row][Body[i].col+1] = 3;
						Map[Body[i].row][Body[i].col] = 0;
						Body[i].col ++;
						if(Body[i].col == 3 || Body[i].col == 17)
						{
							Body[i].way = "up";
						}
					}
				}
			drawScene();
		}