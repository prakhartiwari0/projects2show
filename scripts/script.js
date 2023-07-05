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








const projectsDiv = document.querySelector('.projectsDiv');

fetch('./assets/projects.json').then(function (response) {
    return response.json();

}).then(function (obj) {
    projectDivsCreator(obj)

}).catch(function (error) {
    console.log(error);
})

function projectDivsCreator(allProjectsDataObject) {

    Object.keys(allProjectsDataObject).forEach(function (key) {

        let newProjectDiv = document.createElement('div')
        newProjectDiv.classList.add('projectDiv', 'basic_flexbox')

        let newProjectDivOverlay = document.createElement('div')
        newProjectDivOverlay.classList.add('projectDivOverlay', 'basic_flexbox')

        let projectLinkAnchorElement = document.createElement('a')
        projectLinkAnchorElement.textContent = "Open"
        projectLinkAnchorElement.classList.add('projectLink', 'general_links')
        projectLinkAnchorElement.target = '_blank'

        let projectGitHubAnchorElement = document.createElement('a')
        projectGitHubAnchorElement.target = '_blank'
        projectGitHubAnchorElement.textContent = "Code"
        projectGitHubAnchorElement.classList.add('projectRepoLink', 'general_links')


        let projectInfoButtonElement = document.createElement('button')
        projectInfoButtonElement.classList.add('projectInfoButton', 'general_buttons', 'material-symbols-outlined')
        projectInfoButtonElement.textContent = "info"



        newProjectDivOverlay.appendChild(projectLinkAnchorElement)
        newProjectDivOverlay.appendChild(projectGitHubAnchorElement)
        newProjectDivOverlay.appendChild(projectInfoButtonElement)

        newProjectDiv.appendChild(newProjectDivOverlay)

        const projectID = key
        newProjectDiv.id = projectID
        const projectData = allProjectsDataObject[key]

        Object.keys(projectData).forEach(function (dataAttribute) {
            const dataAttributeValue = projectData[dataAttribute]


            newProjectDiv.setAttribute(`data-${dataAttribute}`, dataAttributeValue)

        })

        // console.log(eachProjectObject);




        projectsDiv.appendChild(newProjectDiv)
    });

    projectsDivSetter()

}


function projectsDivSetter(){

    
    const projectDiv = document.querySelectorAll('.projectDiv');

projectDiv.forEach(element => {
    let elID = element.id;
    element.style.backgroundImage = `url('./assets/projects/${elID}/${elID}.png')`
    element.style.backgroundSize = 'cover'
    element.style.backgroundPosition = 'center'
    
    
    element.addEventListener('click', (event)=>{
        element.style.backgroundImage = `url('./assets/projects/${elID}/${elID}.gif')` 
    })
    
    const projectName = element.getAttribute('data-projectname');
    const projectURL = element.getAttribute('data-projecturl');
    const projectGitHub = element.getAttribute('data-projectgithub');
    element.title = projectName
    
    element.querySelector('.projectLink').href = projectURL
    element.querySelector('.projectRepoLink').href = projectGitHub


});

    ModalCreator()

}

function ModalCreator(){

    
    const projectInfoButton = document.querySelectorAll('.projectInfoButton');
    
    const projectInfoModal = document.querySelector('.projectInfoModal');
    const closeProjectInfoModalButton = document.querySelector('.closeProjectInfoModalButton');
closeProjectInfoModalButton.addEventListener('click', () => {
    projectInfoModal.close();
    projectInfoModal.style.display='none'
})

projectInfoButton.forEach((element)=>{
    element.addEventListener('click', ()=>{
        const projectName = element.parentElement.parentElement.getAttribute('data-projectName')
        const projectInfo = element.parentElement.parentElement.getAttribute('data-projectInfo')
        const projectURL = element.parentElement.parentElement.getAttribute('data-projectURL');
        const projectGitHub = element.parentElement.parentElement.getAttribute('data-projectGitHub');
        
        projectInfoModal.style.display = 'flex'
        projectInfoModal.showModal()
        
        projectInfoModal.querySelector('.pm_projectName').textContent = projectName
        projectInfoModal.querySelector('.pm_projectAbout').textContent = projectInfo
        
        projectInfoModal.querySelector('.pm_projectLink').href = projectURL
        projectInfoModal.querySelector('.pm_projectRepoLink').href = projectGitHub
        
    })
}
)
    }