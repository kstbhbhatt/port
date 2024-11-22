document.getElementById("submit").addEventListener('mouseenter', function(e){
    // alert(1);
    create();

    e.preventDefault();
})

// var element = document.getElementById("submit");
// element.onmousedown = create();


function create(){
    // alert(1);
    let message = document.getElementById("message");
    let name = document.getElementById("name-feedback");
    let messageTxt = message.value;
    let nameTxt = name.value;
    let body = `${messageTxt}
    ${nameTxt}`;
    let btn = document.getElementById("submit-div");

    
    btn.innerHTML = `<a href="mailto:kstbhbhatt@gmail.com?cc=kaubhatt@deloitte.com&subject=Write desired Subject&body=${messageTxt}"><input class="btn-form" type="submit" class="btn" id="submit" value="Send Message"></a>`;
}
