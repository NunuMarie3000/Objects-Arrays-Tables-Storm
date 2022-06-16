// ### Exercise 1:
// Create a channel guide similar to what's shown in ```example4.png```. 

// * Use Table Headers for each column
// * Specify a default border
// * When the User mouses over a TV show name cell, change the color of the table cell to a color of your choosing.
//create variable for html div
let channelGuideDiv = document.getElementById('channel-guide');
//create table element
let channelGuideTable = document.createElement('table');
//add table to div
channelGuideDiv.append(channelGuideTable);
