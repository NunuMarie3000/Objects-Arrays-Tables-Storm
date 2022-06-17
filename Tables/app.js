// ### Exercise 1:
// Create a channel guide similar to what's shown in ```example4.png```. 

// * Use Table Headers for each column
// * Specify a default border
// * When the User mouses over a TV show name cell, change the color of the table cell to a color of your choosing.
//create variable for html div
let channelHours = ['Channel', '1:00pm', '1:30pm', '2:00pm'];
let channelOne = ['THROWBACK', 'Teen Titans', 'Teen Titans', 'Kim Possible'];
let channelTwo = ['MOVIE', 'Encanto'];
let channelThree = ['MOMMAS FAVORITE', 'Bishop TD Jakes', 'The Big Bang Theory'];
let channelFour = ['REALITY TV', 'Rick and Morty', 'American Dad', 'The Boondocks'];

let channelGuideTable = document.getElementById('channel-guide');

//function to render table
function renderTableHeader(){
    //need to create thead
    let tableHeaderContainer = document.createElement('thead');
    //create th
    let tableHeaderEl = document.createElement('th');
    //create tr
    let tableRow = document.createElement('tr');
    //need to go through each name in student array
    for(let i=0; i<channelHours.length; i++){
        //it needs to create new th element for item in channelHours array
        tableHeaderEl = document.createElement('th');
        tableHeaderEl.textContent = `${channelHours[i]}`; 
        tableRow.append(tableHeaderEl);
        tableHeaderContainer.append(tableRow);
    }
    channelGuideTable.append(tableHeaderContainer);
}
renderTableHeader();

function renderTableContents(channel){
//create tbody
let tableBodyContainer = document.createElement('tbody');
//create tr
let channelRow = document.createElement('tr');
    for(let i=0; i < channel.length; i++){
        //create td
        let channelTd = document.createElement('td');
        channelTd.textContent = `${channel[i]}`; //each channel array's info
        channelRow.append(channelTd);
        tableBodyContainer.append(channelRow);
    }
    channelGuideTable.append(tableBodyContainer);
}
//no clue how to stretch the cells that have a longer show so that it's not just empty space
//i'd know how if i was using flex...can you apply css flex to table
renderTableContents(channelOne);
renderTableContents(channelTwo);
renderTableContents(channelThree);
renderTableContents(channelFour);