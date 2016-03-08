var modName = "§9LTCommands";
var modVersion = "§80.2";
var authorName = "§7LostTeam";

function procCmd(cmd)
{

if(cmd == "info")
{
        ModPE.showTipMessage(modName+" "+modVersion+" "+authorName);
        } 

if(cmd == "survival")
{
	Level.setGameMode(0);
	}
	
if(cmd == "creative")
{
	Level.setGameMode(1);
	}
	
if(cmd == "adventure")
{
	Level.setGameMode(2);
	}
	
if(cmd == "spectator")
{	
	Level.setGameMode(3);
	}

if(cmd == "day")
{
	Level.setTime(0);
	}

if(cmd == "night")
{
	Level.setTime(15500);
	}
	
if(cmd == "kill")
{
        Player.setHealth(0);
        }

id(cmd == "heal")
{
        Player.setHealth(20);
        }

}
