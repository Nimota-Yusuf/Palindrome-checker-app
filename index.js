let button = document.querySelector ('#submit-button')
let output_text = document.querySelector(".text")
let container = document.querySelector('.container')

button.addEventListener('click', display_result)

function display_result(event){
    event.preventDefault();
    let word = document.querySelector("#input_box");
    display_output(word.value)
}
function display_output(text) {
    
    let reverse = text.split('').reverse().join('')

    let forward = text.toLowerCase().replace(/[^a-z 0-9]/g, '')
    let backward = reverse.toLowerCase().replace(/[^a-z 0-9]/g, "");

    if (text === ''){
        alert("Hello👋👋, enter a word in the text box");
    }
    else{
        if (forward === backward){
            output_text.innerHTML = "That's awseome🎉🎉, it's a palindrome";
            output_text.classList.add('correct')
            output_text.classList.remove("wrong");
            container.style.height = "250px";
        }
        else{
            output_text.innerHTML = "That's wrong☹️☹️, it's not a palindrome";
            output_text.classList.add("wrong");
            output_text.classList.add("correct");
            container.style.height='250px'
        }
    }
    
}