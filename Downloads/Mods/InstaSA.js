var modName = "§aInstaSilkAxe";
var modVersion = "§1.0";
var authorName = "§7LostTeam";


function modTick() 
{
ModPE.showTipMessage(modName+" "+modVersion+" "+authorName);
}

ModPE.setItem(550, "ruby", 0, "InstaSilkAxe");
	
function useItem(x, y, z, itemId, blockId, side, data)
{
if (itemId == 550)
{
	
setTile(x, y, z, 0);
addItemInventory(blockId, 1);
}
}
