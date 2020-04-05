/*
  Copyright 2020 Augusto Filocamo
  
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

const var arrNotePhase = [[21, 4.94457], [22, 4.94457], [23, 4.94457], [24, 0], [25, 4.94457], [26, 4.94457], [27, 4.94457], [28, 4.94457], [29, 4.94457], [30, 4.94457], [31, 4.94457], [32, 4.94457], [33, 4.94457], [34, 4.94457], [35, 4.94457], [36, 4.94457], [37, 4.94457], [38, 4.94457], [39, 4.94457], [40, 4.94457], [41, 4.94457], [42, 4.94457], [43, 4.94457], [44, 4.94457], [45, 4.94457], [46, 4.94457], [47, 4.94457], [48, 4.94457], [49, 4.94457], [50, 4.94457], [51, 4.94457], [52, 4.94457], [53, 4.94457], [54, 4.94457], [55, 4.94457], [56, 4.94457], [57, 4.94457], [58, 4.94457], [59, 4.94457], [60, 4.94457], [61, 4.94457], [62, 4.94457], [63, 4.94457], [64, 4.94457], [65, 4.94457], [66, 4.94457], [67, 4.94457], [68, 4.94457], [69, 4.94457], [70, 4.94457], [71, 4.94457], [72, 4.94457], [73, 4.94457], [74, 4.94457], [75, 4.94457], [76, 4.94457], [77, 4.94457], [78, 4.94457], [79, 4.94457], [80, 4.94457], [81, 4.94457], [82, 4.94457], [83, 4.94457], [84, 4.94457], [85, 4.94457], [86, 4.94457], [87, 4.94457], [88, 4.94457], [89, 4.94457], [90, 4.94457], [91, 4.94457], [92, 4.94457], [93, 4.94457], [94, 4.94457], [95, 4.94457], [96, 4.94457], [97, 4.94457], [98, 4.94457], [99, 4.94457], [100, 4.94457], [101, 4.94457], [102, 4.94457], [103, 4.94457], [104, 4.94457], [105, 4.94457], [106, 4.94457], [107, 4.94457], [108, 4.94457], [109, 4.94457], [110, 4.94457], [111, 4.94457], [112, 4.94457], [113, 4.94457], [114, 4.94457], [115, 4.94457], [116, 4.94457], [117, 4.94457], [118, 4.94457], [119, 4.94457], [120, 4.94457], [121, 4.94457], [122, 4.94457], [123, 4.94457], [124, 4.94457], [125, 4.94457], [126, 4.94457], [127, 4.94457], [128, 4.94457], [129, 4.94457], [130, 4.94457], [131, 4.94457], [132, 4.94457], [133, 4.94457], [134, 4.94457], [135, 4.94457], [136, 4.94457], [137, 4.94457], [138, 4.94457], ]
function onNoteOn()
{
  local notePlayed = Message.getNoteNumber() -24;  
  Message.setStartOffset(Math.toDegrees((arrNotePhase[notePlayed][1] + (2*Math.PI))) / 360 * 2048);
  //Console.print(Math.toDegrees((arrNotePhase[notePlayed][1] + 6.28)) / 360 * 2048);
  Console.print(arrNotePhase[notePlayed][1] + 6.28);
  //Console.print(arrNotePhase[notePlayed][1]);
  //Console.print(Message.getNoteNumber() + " << midinote");
}
function onNoteOff()
{
	
}
 function onController()
{
	
}
 function onTimer()
{
	
}
 function onControl(number, value)
{
	
}
 