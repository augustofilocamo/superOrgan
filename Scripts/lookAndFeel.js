
//! Look And Feel

const var laf = Engine.createGlobalScriptLookAndFeel();


laf.registerFunction("drawPresetBrowserListItem", function(g, obj)
{
    if(obj.selected)
    {
        g.setColour(0x22FFFFFF);
        g.fillRoundedRectangle([obj.area[0], obj.area[1] + 5, obj.area[2], obj.area[3] - 10], 5.0);
    }
   
    g.setColour(obj.textColour);
    g.setFont("Abel", 20);
    g.drawAlignedText(obj.text, [obj.area[0] + 40, obj.area[1], obj.area[2], obj.area[3], ], "left");
});



