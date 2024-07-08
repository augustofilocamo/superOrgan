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

const var arrNotePhase = [[21, -1.71558], [22, -1.71558], [23, -1.71558], [24, 0], [25, -1.71558], [26, -1.71558], [27, -1.71558], [28, -1.71558], [29, -1.71558], [30, -1.71558], [31, -1.71558], [32, -1.71558], [33, -1.71558], [34, -1.71558], [35, -1.71558], [36, -1.71558], [37, -1.71558], [38, -1.71558], [39, -1.71558], [40, -1.71558], [41, -1.71558], [42, -1.71558], [43, -1.71558], [44, -1.71558], [45, -1.71558], [46, -1.71558], [47, -1.71558], [48, -1.71558], [49, -0.325301], [50, -0.325301], [51, -0.325301], [52, -0.325301], [53, -0.325301], [54, -0.325301], [55, -0.325301], [56, -0.325301], [57, -0.325301], [58, -0.325301], [59, -0.325301], [60, -0.325301], [61, 2.66249], [62, 2.66249], [63, 2.66249], [64, 2.66249], [65, 2.66249], [66, 2.66249], [67, 2.66249], [68, 2.66249], [69, 2.66249], [70, 2.66249], [71, 2.66249], [72, 2.66249], [73, -1.19269], [74, -1.19269], [75, -1.19269], [76, -1.19269], [77, -1.19269], [78, -1.19269], [79, -1.19269], [80, -1.19269], [81, -1.19269], [82, -1.19269], [83, -1.19269], [84, -1.19269], [85, -1.55473], [86, -1.55473], [87, -1.55473], [88, -1.55473], [89, -1.55473], [90, -1.55473], [91, -1.55473], [92, -1.55473], [93, -1.55473], [94, -1.55473], [95, -1.55473], [96, -1.55473], [97, -1.55473], [98, -1.55473], [99, -1.55473], [100, -1.55473], [101, -1.55473], [102, -1.55473], [103, -1.55473], [104, -1.55473], [105, -1.55473], [106, -1.55473], [107, -1.55473], [108, -1.55473], [109, -1.55473], [110, -1.55473], [111, -1.55473], [112, -1.55473], [113, -1.55473], [114, -1.55473], [115, -1.55473], [116, -1.55473], [117, -1.55473], [118, -1.55473], [119, -1.55473], [120, -1.55473], [121, -1.55473], [122, -1.55473], [123, -1.55473], [124, -1.55473], [125, -1.55473], [126, -1.55473], [127, -1.55473], [128, -1.55473], [129, -1.55473], [130, -1.55473], [131, -1.55473], [132, -1.55473], [133, -1.55473], [134, -1.55473], [135, -1.55473], [136, -1.55473], [137, -1.55473], [138, -1.55473], ]
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
 