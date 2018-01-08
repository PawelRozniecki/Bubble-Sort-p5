/**
 * Created by pingwin on 30/09/2017.
 */
var columns = [];

var numOfColumns = 15;
var randNum = [];
var index = 0;
var swapped;
canvasY = 400
var lvl = 0;
var button;
var columnY = [];
var button;
var btn2;
var reset;
var input;
var columnHeight = -250;


function setup() {




    var canvas = document.getElementById("col1");
    canvas = createCanvas(400, 400);









    button = createButton('swap   ');
    button.mousePressed(btnPress);
    button.touchStarted(touchstart);

    resetButton = createButton('reset');
    resetButton.mousePressed(resetBtn);




    for (var i = 0; i < numOfColumns; i++) {

        randNum[i] = randomNumbers();

    }

    for (var i = 0; i < numOfColumns; i++) {
        columnY.push(random(columnHeight));
    }

    for (var i = 0; i < randNum.length; i++) {

        columns[i] = new drawColumns(i);
        columns[i].data = randNum[i];

    }


}



function draw() {


    background('#1b1b1b');


    for (var i = 0; i < randNum.length; i++) {

        columns[i].display();
    }


}

function drawColumns(i) {

    this.y = canvasY/3;
    this.x = map(i, 0, columnY.length, this.y / 2, width);
    this.strokeColor ="black";
    this.display = function () {

        fill('#5697F4');
        strokeWeight(2);
        stroke(this.strokeColor);
        rect(this.x - 50, this.y * 2 - 1, 20, columnY[i]);



    }
}




function btnPress(){
    if (swapped === true) {

        greenCol(columns[index]);
        swapped = false;
        return;
    }
    if (lvl === numOfColumns.length - 2) {

        greenCol(columns[0]);
        greenCol(columns[1]);




        return;

    }
    if (index === columnY.length - lvl - 1) {
        greenCol(columns[index]);
        index = 0;
        lvl += 1;


        return;
    }

    if (columnY[index] > columnY[index + 1]) {


        var temp = columnY[index];

        columnY[index] = columnY[index + 1];

        columnY[index + 1] = temp;

        return;

    }
    index += 1;
    normalCol(columns[index-1]);
    greenCol(columns[index]);

    if (index < columns.length - lvl - 1) {
        greenCol(columns[index+1]);
    }

}

function randomNumbers() {

    Math.floor(Math.random() * 100);
}

function redCol(c) {
    c.strokeColor = "#A30000";

}

function greenCol(c) {
    c.strokeColor = "#00ff00";
    console.log("green color");
}

function normalCol(c) {
    c.strokeColor = "#000000";
    console.log("normal color");

}

function setNumberOfColumns(c) {


    c.numOfBalls = input.value();


}

function resetBtn() {













}

function touchstart(){

    if (swapped === true) {

        greenCol(columns[index]);
        swapped = false;
        return;
    }
    if (lvl === numOfColumns.length - 2) {

        greenCol(columns[0]);
        greenCol(columns[1]);


        return;

    }
    if (index === columnY.length - lvl - 1) {
        greenCol(columns[index]);
        index = 0;
        lvl += 1;


        return;
    }

    if (columnY[index] > columnY[index + 1]) {


        var temp = columnY[index];

        columnY[index] = columnY[index + 1];

        columnY[index + 1] = temp;

        return;

    }
    index += 1;
    normalCol(columns[index-1]);
    greenCol(columns[index]);

    if (index < columns.length - lvl - 1) {
        greenCol(columns[index+1]);
    }




}
