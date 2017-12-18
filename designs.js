"use strict";
$(document).ready(function() {
    let color, height, width;

    function updateStats() {
        // Select color input
        color = $('#colorPicker').val();
        // Select size input
        height = $('#input_height').val();
        width = $('#input_width').val();
    };
    // When size is submitted by the user, call makeGrid()

    $('input[type="submit"]').on('click', function(e) {
        e.preventDefault();
        updateStats();
        $('tr').remove();
        makeGrid();
    });

    function makeGrid() {
        // Your code goes here!
        for (let i = 0; i < height; i++) {
            $('#pixel_canvas').append($('<tr></tr>'));
        }
        // for(let j = 0; j < width;j++) {
        // 	$('tr').append($('<td></td>'));
        // }
        let j = 0;
        while (j < width) {
            $('tr').append($('<td></td>'));
            j++;
        }
    }
    $("#pixel_canvas").on("click", "td", function() {
        updateStats();
        $(this).css("background-color", color);
    });
});