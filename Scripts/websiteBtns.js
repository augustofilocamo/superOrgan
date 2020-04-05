/*
  Copyright 2020 Studio427 Audio, Augusto Filocamo, & Arnar Helgi Aðalsteinsson
  
  This file is part of CollaB3.

  CollaB3 is free software: you can redistribute it and/or modify
  it under the terms of the GNU General Public License as published by
  the Free Software Foundation, either version 3 of the License, or
  (at your option) any later version.

  CollaB3 is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  GNU General Public License for more details.

  You should have received a copy of the GNU General Public License
  along with CollaB3. If not, see <https://www.gnu.org/licenses/>.
*/

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


