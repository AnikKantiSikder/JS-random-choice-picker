
const tagsEl = document.getElementById('tags');
const textarea = document.getElementById('textarea');

// Automatically focus on textarea
textarea.focus();

textarea.addEventListener('keyup', function(e) {
    createTags(e.target.value);

    //Clearing the texrarea field after hitting enter
    if(e.key == 'Enter') {
        setTimeout(function() {
            e.target.value = '';
        }, 10);

        // Functionality: Randomly selecting tag
        randomSelect();
    }
})

function createTags(input) {
    //console.log(input);
    const tags = input.split(',')
    .filter(tag => tag.trim() !== '')
    .map(tag => tag.trim());
    
    tagsEl.innerHTML = '';

    tags.forEach(function(tag) {
        const tagEl = document.createElement('span');
        tagEl.classList.add('tag');
        tagEl.innerText = tag;
        tagsEl.appendChild(tagEl);
    })
}

function randomSelect(){
    const times = 30;

    //Causing the shift from one tag to another
    const interval = setInterval(() => {
        const randomTag = picRandomTag();

        highlightTag(randomTag);

        setTimeout(() => {
            unHighlightTag(randomTag);
        }, 100);

    }, 100);


    //Stop the shifting and highlights a random tag 
    setTimeout(() => {
        clearInterval(interval);

        setTimeout(() => {
            const randomTag = picRandomTag();

            highlightTag(randomTag);
        }, 100)
    }, times * 100)
}

function picRandomTag(){
    const tags = document.querySelectorAll('.tag');
    return tags[Math.floor(Math.random() * tags.length)];
}

function highlightTag(tag){
    tag.classList.add('highlight');
}

function unHighlightTag(tag){
    tag.classList.remove('highlight');
}