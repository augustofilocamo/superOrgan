/*
  Copyright 2020 Studio427 Audio & Augusto Filocamo
  
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

const var arrNotePhase = [[21, -2.358396], [22, -2.358396], [23, -2.358396], [24, 0], [25, -2.358396], [26, -2.358396], [27, -2.358396], [28, -2.358396], [29, -2.358396], [30, -2.358396], [31, -2.358396], [32, -2.358396], [33, -2.358396], [34, -2.358396], [35, -2.358396], [36, -2.358396], [37, -2.358396], [38, -2.358396], [39, -2.358396], [40, -2.358396], [41, -2.358396], [42, -2.358396], [43, -2.358396], [44, -2.358396], [45, -2.358396], [46, -2.358396], [47, -2.358396], [48, -2.358396], [49, -4.81582], [50, -4.81582], [51, -4.81582], [52, -4.81582], [53, -4.81582], [54, -4.81582], [55, -4.81582], [56, -4.81582], [57, -4.81582], [58, -4.81582], [59, -4.81582], [60, -4.81582], [61, -3.48937], [62, -3.48937], [63, -3.48937], [64, -3.48937], [65, -3.48937], [66, -3.48937], [67, -3.48937], [68, -3.48937], [69, -3.48937], [70, -3.48937], [71, -3.48937], [72, -3.48937], [73, -2.555888], [74, -2.555888], [75, -2.555888], [76, -2.555888], [77, -2.555888], [78, -2.555888], [79, -2.555888], [80, -2.555888], [81, -2.555888], [82, -2.555888], [83, -2.555888], [84, -2.555888], [85, -4.14591], [86, -4.14591], [87, -4.14591], [88, -4.14591], [89, -4.14591], [90, -4.14591], [91, -4.14591], [92, -4.14591], [93, -4.14591], [94, -4.14591], [95, -4.14591], [96, -4.14591], [97, -4.14591], [98, -4.14591], [99, -4.14591], [100, -4.14591], [101, -4.14591], [102, -4.14591], [103, -4.14591], [104, -4.14591], [105, -4.14591], [106, -4.14591], [107, -4.14591], [108, -4.14591], [109, -4.14591], [110, -4.14591], [111, -4.14591], [112, -4.14591], [113, -4.14591], [114, -4.14591], [115, -4.14591], [116, -4.14591], [117, -4.14591], [118, -4.14591], [119, -4.14591], [120, -4.14591], [121, -4.14591], [122, -4.14591], [123, -4.14591], [124, -4.14591], [125, -4.14591], [126, -4.14591], [127, -4.14591], [128, -4.14591], [129, -4.14591], [130, -4.14591], [131, -4.14591], [132, -4.14591], [133, -4.14591], [134, -4.14591], [135, -4.14591], [136, -4.14591], [137, -4.14591], [138, -4.14591], ]
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
 