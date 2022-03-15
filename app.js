$(document).ready(function () {

    // shorten all longer names down to shorter ones for ease

    var $u_Key = $("#keyboard-upper-container");  //for uppercase keyboard
    var $l_Key = $("#keyboard-lower-container"); //for lowercase keyboard
    
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
    
        $(document).keypress(function (e) {
            var $key_id=$('#' + e.which)
            console.log($key_id)
            $($key_id).css({'background': 'green'});      
            $(document).keyup(function (e) {            
            $($key_id).css({'background': '#f5f5f5'});  //this color was found from display element on f12...it originally comes from bootstrap class well
        });
    }); 

    // typing the sentence along
    let sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];});
    let i = 0
    $('#sentence').append(sentences[i]);