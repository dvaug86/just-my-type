$(document).ready(function () {

    // shorten all longer names down to shorter ones for ease
    let $u_Key = $("#keyboard-upper-container");  //for uppercase keyboard
    let $l_Key = $("#keyboard-lower-container"); //for lowercase keyboard


    //hide the uppercase keyboard upon initial page load
    $u_Key.hide();

    //code block for pressing shift key. if shift key is pressed and held the uppercase shows and lowercase hides
    //if shift key is released lowercase shows and uppercase hides
    $(document).keydown(function (e) {
        if (e.which == 16) {
            $u_Key.show();
            $l_Key.hide();
        }
    });
    $(document).keyup(function (e) {
        if (e.which == 16) {
            $u_Key.hide();
            $l_Key.show();
        }
    });

    //change the color of the keyboard when a key is pressed and released
    $(document).keypress(function (e) {
        let $key_id = $('#' + e.which);
        $($key_id).css({ 'background': 'green' });
        $(document).keyup(function (e) {
            $($key_id).css({ 'background': '#f5f5f5' });  //this color was found from display element on f12...it originally comes from bootstrap class well
        });
    });




    //The sentences we are to use
    let sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];

    //variable for the sentence number
    let sentenceNumber = 0;

    //name of the positon in the array
    let currentSentence = sentences[sentenceNumber];
    //allows us to view the current sentence at the top of the page
    $('#sentence').text(currentSentence);
    var letter = currentSentence.charAt(0);

    let letterNumber = 0;
    $('#target-letter').text(letter)


    var startTimer;
    var endTimer;
    var wrong = 0;
    var cursor = $('#yellow-block');
    var cursorPlace = 0;

    //function for changing the letters after typed   
    $(document).keypress(function (e) {
        e.preventDefault();


        if (!startTimer) {  //if the variable doesn't have any value, replace it with the time stamp
            startTimer = e.timeStamp;
        }

             if (e.which == currentSentence.charCodeAt(letterNumber)) {
                letterNumber++;
                letter = currentSentence.charAt(letterNumber);
                $('#target-letter').text(letter)
                $('#feedback').append('<span class="glyphicon glyphicon-ok"></span>');
                cursorPlace += 17.2;
                $(cursor).css("margin-left", cursorPlace + "px");
            }   
             else {
            $('#feedback').append('<span class="glyphicon glyphicon-remove"></span>');
            wrong++;
            }
             
                if (letterNumber == currentSentence.length) {
                    letterNumber = 0;
                    sentenceNumber++;
                    
                    currentSentence = sentences[sentenceNumber];
                    letter = currentSentence.charAt(letterNumber);
                    $('#sentence').text(currentSentence);
                    
                    $('#target-letter').text(letter)
                    console.log(letter);
                    cursorPlace =0;
                    $(cursor).css("margin-left", cursorPlace + "px");

                }
                    
                    if (sentenceNumber == sentences.length) {
                        endTimer = e.timeStamp;
                        var deltaTime = (endTimer - startTimer) / (60 * 1000);
                        var wpm = Math.round(54 / deltaTime - 2 * wrong);
                        alert(`you typed ${deltaTime} words per minute`)
                    }

/*
                    setTimeout(function(){
                        if(confirm('would you like to play again?')) {
                          sentenceNumber = 0;
                          letterNumber = 0;
                          currentSentence = sentences[0];
                          currentLetter = currentSentence.charAt(0);
                          $('#sentence').text(currentSentence);
                          $('#target-letter').text(currentLetter);
                          $('#feedback').empty();
                          startTime = undefined;
                        }
                      }, 5000); // 5000 means this will run for 5 seconds

*/




    });




});