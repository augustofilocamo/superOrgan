

//! Covid Info Link Btn
const var covidInfoLink = Content.getComponent("covidInfoLink");

covidInfoLink.setMouseCallback(function(event)
{
	if (event.clicked) Engine.openWebsite("https://www.who.int/health-topics/coronavirus");
});



//! Websites
const var FiloWebsiteBtn = Content.getComponent("FiloWebsiteBtn");
const var Studio427audioWebsiteBtn = Content.getComponent("Studio427audioWebsiteBtn");
const var LalalandaudioWebsiteBtn = Content.getComponent("LalalandaudioWebsiteBtn");
const var LibrewaveWebsiteBtn = Content.getComponent("LibrewaveWebsiteBtn");
const var hiseWebsiteBtn = Content.getComponent("hiseWebsiteBtn");


FiloWebsiteBtn.setMouseCallback(function(event)
{
    if (event.clicked) Engine.openWebsite("https://sampleson.com/");
});

Studio427audioWebsiteBtn.setMouseCallback(function(event)
{
    if (event.clicked) Engine.openWebsite("https://www.studio427audio.com");
});

LalalandaudioWebsiteBtn.setMouseCallback(function(event)
{
    if (event.clicked) Engine.openWebsite("https://lalalandaudio.com");
});

LibrewaveWebsiteBtn.setMouseCallback(function(event)
{
    if (event.clicked) Engine.openWebsite("https://librewave.com");
});

hiseWebsiteBtn.setMouseCallback(function(event)
{
    if (event.clicked) Engine.openWebsite("http://hise.audio/index.php");
});


