const audioElementSwitchOff = new Audio("assets/switchOff.mp3");
const audioElementSwitchOn = new Audio("assets/switchOn.mp3");

const torchDivs = document.querySelectorAll(".torch_div");

torchDivs.forEach(torchDiv => {
    const lightElement = torchDiv.querySelector(".lights");

    lightElement.addEventListener('click', () => {
        if (lightElement.classList.contains("blank_torch")) {
            lightElement.src = lightElement.src.replace("torch.png", "fire.gif");
            lightElement.classList.add("lighted_torch");
            lightElement.classList.remove("blank_torch");


            audioElementSwitchOn.currentTime = 0; // Reset the audio to the beginning
            audioElementSwitchOn.volume = .1
            audioElementSwitchOn.play(); // Play the audio file

        } else {
            lightElement.classList.add("blank_torch");
            lightElement.classList.remove("lighted_torch");
            lightElement.src = lightElement.src.replace("fire.gif", "torch.png");


            audioElementSwitchOff.currentTime = 0; // Reset the audio to the beginning
            audioElementSwitchOff.volume = .1
            audioElementSwitchOff.play(); // Pause the audio file if it's playing
        }
    });
});


const textPara = document.querySelector('.textdiv p');
const words = textPara.innerText.split(' ');

textPara.innerHTML = '';

words.forEach((word, index) => {
    const span = document.createElement('span');
    span.textContent = word;
    span.classList.add('fade');
    textPara.appendChild(span);

    if (index !== words.length - 1) {
        const space = document.createTextNode(' ');
        textPara.appendChild(space);
    }
});

textPara.addEventListener('mousemove', (e) => {
    const spans = textPara.querySelectorAll('span');
    const mousePos = e.clientX - textPara.offsetLeft;

    spans.forEach((span) => {
        const spanPos = span.offsetLeft + span.offsetWidth / 2;
        const distance = Math.abs(mousePos - spanPos);
        const opacity = 1 - distance / (textPara.offsetWidth / 2);

        span.style.opacity = opacity.toFixed(2);
    });
});





const projectDiv = document.querySelectorAll('.projectDiv');

projectDiv.forEach(element => {
    let elID = element.id;
    element.style.backgroundImage = `url('../assets/projects/${elID}/${elID}.png')`
    element.style.backgroundSize = 'cover'
    element.style.backgroundPosition = 'center'


    element.addEventListener('mouseover', (event)=>{
        element.style.backgroundImage = `url('../assets/projects/${elID}/${elID}.gif')` 
    })

    const projectName = element.getAttribute('data-projectName');
    console.log(projectName);
});



