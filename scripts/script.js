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




const projectDiv = document.querySelectorAll('.projectDiv');

projectDiv.forEach(element => {
    let elID = element.id;
    element.style.backgroundImage = `url('./assets/projects/${elID}/${elID}.png')`
    element.style.backgroundSize = 'cover'
    element.style.backgroundPosition = 'center'

    
    element.addEventListener('mouseover', (event)=>{
        element.style.backgroundImage = `url('./assets/projects/${elID}/${elID}.gif')` 
    })
    
    const projectName = element.getAttribute('data-projectName');
    const projectURL = element.getAttribute('data-projectURL');
    const projectGitHub = element.getAttribute('data-projectGitHub');
    element.title = projectName

    element.querySelector('.projectLink').href = projectURL
    element.querySelector('.projectRepoLink').href = projectGitHub


});



