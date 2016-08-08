var Trap = [{"row":2, "col":7, "way":"left"},
			{"row":5, "col":7, "way":"left"},
			{"row":8, "col":7, "way":"left"},
			{"row":4, "col":5, "way":"right"},
			{"row":7, "col":5, "way":"right"},
			{"row":9, "col":5, "way":"right"},
			{"row":5, "col":15, "way":"up"},
			{"row":1, "col":14, "way":"left"},
			{"row":1, "col":11, "way":"down"},
			{"row":5, "col":12, "way":"right"},
			];
function TrapMove()
			{
				for(i=0;i < 10; i++)
				{
					if(Trap[i].way == "left")
						{
							if(Map[Trap[i].row][Trap[i].col-1] == 99)
							{
								Map[Trap[i].row][Trap[i].col] = 0;
								Map[Trap[i].row][Trap[i].col-1] = 9;
								Trap[i].way = "nothing";
							}
							else if(Map[Trap[i].row][Trap[i].col-1] == 9)
							{
								Map[Trap[i].row][Trap[i].col] = 0;
								Map[Trap[i].row][Trap[i].col-1] = 44;
								Trap[i].way = "nothing";
							}
							else
							{
								Map[Trap[i].row][Trap[i].col-1] = 4;
								Map[Trap[i].row][Trap[i].col] = 0;
								Trap[i].col --;
								if(Trap[i].col == 5 || Trap[i].col == 12)
								{
									Trap[i].way = "right";
								}
							}
						}
					else if(Trap[i].way == "right")
						{
							if(Map[Trap[i].row][Trap[i].col+1] == 99)
							{
								Map[Trap[i].row][Trap[i].col] = 0;
								Map[Trap[i].row][Trap[i].col+1] = 9;
								Trap[i].way = "nothing";
							}
							else if(Map[Trap[i].row][Trap[i].col+1] == 9)
							{
								Map[Trap[i].row][Trap[i].col] = 0;
								Map[Trap[i].row][Trap[i].col+1] = 44;
								Trap[i].way = "nothing";
							}
							else
							{
								Map[Trap[i].row][Trap[i].col+1] = 4;
								Map[Trap[i].row][Trap[i].col] = 0;
								Trap[i].col ++;
								if(Trap[i].col == 7 || Trap[i].col == 14)
								{
									Trap[i].way = "left";
								}
							}
						}
					else if(Trap[i].way == "up")
						{
							if(Map[Trap[i].row-1][Trap[i].col] == 99)
							{
								Map[Trap[i].row][Trap[i].col] = 0;
								Map[Trap[i].row-1][Trap[i].col] = 9;
								Trap[i].way = "nothing";
							}
							else if(Map[Trap[i].row-1][Trap[i].col] == 9)
							{
								Map[Trap[i].row][Trap[i].col] = 0;
								Map[Trap[i].row-1][Trap[i].col] = 44;
								Trap[i].way = "nothing";
							}
							else
							{
								Map[Trap[i].row-1][Trap[i].col] = 4;
								Map[Trap[i].row][Trap[i].col] = 0;
								Trap[i].row --;
								if(Trap[i].row == 1)
								{
									Trap[i].way = "down";
								}
							}
						}
					else if(Trap[i].way == "down")
						{
							if(Map[Trap[i].row+1][Trap[i].col] == 99)
							{
								Map[Trap[i].row][Trap[i].col] = 0;
								Map[Trap[i].row+1][Trap[i].col] = 9;
								Trap[i].way = "nothing";
							}
							else if(Map[Trap[i].row+1][Trap[i].col] == 9)
							{
								Map[Trap[i].row][Trap[i].col] = 0;
								Map[Trap[i].row+1][Trap[i].col] = 44;
								Trap[i].way = "nothing";
							}
							else
							{
								Map[Trap[i].row+1][Trap[i].col] = 4;
								Map[Trap[i].row][Trap[i].col] = 0;
								Trap[i].row++;
								if(Trap[i].row == 5)
								{
									Trap[i].way = "up";
								}
							}
						}
				}
			}