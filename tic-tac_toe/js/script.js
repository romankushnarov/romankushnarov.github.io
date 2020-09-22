$(document).ready(function() {
    
    // scre count
    let player1 = $('#player-1')
    let player2 = $('#player-2')

    // fields
    let col = $('.col'); 

    let col1 = $('#col-1');   
    let col2 = $('#col-2');   
    let col3 = $('#col-3');   
    let col4 = $('#col-4');   
    let col5 = $('#col-5');   
    let col6 = $('#col-6');   
    let col7 = $('#col-7');   
    let col8 = $('#col-8');   
    let col9 = $('#col-9');   

    // fill green

    function green(el, el1, el2) {
        el.children().css('color', 'green');
        el1.children().css('color', 'green');
        el2.children().css('color', 'green');
    }
    
    // icons 

    let cross = '<i class="fas fa-times"></i>';
    let circle = '<i class="far fa-circle"></i>';

    // Counter of moves
    let moveCounter = 0;

    // stop game

    function stopGame() {
        col.html('');
        moveCounter = 0;
        $('.overlay').css('display', 'none');
    }

    // Players moves 

    col.click(function() {
        if($(this).html() !== "") {
            return;
        } else {
            if(moveCounter % 2 == 0) {
                $(this).html(cross);
                moveCounter++;
            } else {
                $(this).html(circle);
                moveCounter++;
            }
        }
        if(checkWinCross()) {
            let counter1 = +player1.html();
            counter1 += 1;
            console.log(counter1);
            player1.html(counter1);
            $('.overlay').css('display', 'block');
            setTimeout(stopGame, 1000);     
        } 
        if(checkWinCircle()) {
            let counter2 = +player2.html();
            counter2 += 1;
            console.log(counter2);
            player2.html(counter2);
            $('.overlay').css('display', 'block');
            setTimeout(stopGame, 1000);     
        }
        if(moveCounter == 9) {
            $('.overlay').css('display', 'block');
            setTimeout(stopGame, 1000);    
        }
    })

    function checkWinCross() {
        if((col1.html() == cross) && (col2.html() == cross) && (col3.html() == cross)) {
            green(col1, col2, col3); return true; 
        } else if((col4.html() == cross) && (col5.html() == cross) && (col6.html() == cross)) {
            green(col4, col5, col6); return true; 
        } else if((col7.html() == cross) && (col8.html() == cross) && (col9.html() == cross)) {
            green(col7, col8, col9); return true; 
        } else if((col1.html() == cross) && (col4.html() == cross) && (col7.html() == cross)) {
            green(col1, col4, col7); return true; 
        } else if((col2.html() == cross) && (col5.html() == cross) && (col8.html() == cross)) {
            green(col2, col5, col8); return true; 
        } else if((col3.html() == cross) && (col6.html() == cross) && (col9.html() == cross)) {
            green(col3, col6, col9); return true; 
        } else if((col1.html() == cross) && (col5.html() == cross) && (col9.html() == cross)) {
            green(col1, col5, col9); return true; 
        } else if((col3.html() == cross) && (col5.html() == cross) && (col7.html() == cross)) {
            green(col3, col5, col7); return true; 
        }   
    }

    function checkWinCircle() {
        if((col1.html() == circle) && (col2.html() == circle) && (col3.html() == circle)) {
            green(col1, col2, col3); return true;
        } else if((col4.html() == circle) && (col5.html() == circle) && (col6.html() == circle)) {
            green(col4, col5, col6); return true;
        } else if((col7.html() == circle) && (col8.html() == circle) && (col9.html() == circle)) {
            green(col7, col8, col9); return true;
        } else if((col1.html() == circle) && (col4.html() == circle) && (col7.html() == circle)) {
            green(col1, col4, col7); return true;
        } else if((col2.html() == circle) && (col5.html() == circle) && (col8.html() == circle)) {
            green(col2, col5, col8); return true;
        } else if((col3.html() == circle) && (col6.html() == circle) && (col9.html() == circle)) {
            green(col3, col6, col9); return true;
        } else if((col1.html() == circle) && (col5.html() == circle) && (col9.html() == circle)) {
            green(col1, col5, col9); return true;
        } else if((col3.html() == circle) && (col5.html() == circle) && (col7.html() == circle)) {
            green(col3, col5, col7); return true;
        }   
    }


    // refresh

    $('.refresh').click(function() {
        player1.html('0');
        player2.html('0');
    })

});