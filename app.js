console.log('Hello World!');

const name = "Gary Weaver"
let hasDownloadedResume = false;

const downloadButton = document.querySelector('.download-btn');

function showGreeting(name) {
    return "Hello, my name is " + name + "! Welcome to my portfolio!";
}

downloadButton.addEventListener('click', function() {
    if (!hasDownloadedResume) {
        alert('Your resume downloaded successfully!');
        hasDownloadedResume = true;
    }
});

window.onload = function() {
    const greetingMessage = showGreeting(name);
    const greetingSection = document.getElementById('greeting-section');
    greetingSection.textContent = greetingMessage;
    const projectDeadline = new Date("2025-5-7");
    const daysRemaining = daysUntilDeadline(projectDeadline);
    const projectSection = document.getElementById('ongoing-project');
    
    projectSection.innerHTML = `<h3>Ongoing Project</h2>
                                <h5><u>Project Deadline: ${projectDeadline.toDateString()}; Days Until Deadline: ${daysRemaining}</u></p>`;
};

function daysUntilDeadline(deadline) {
    const today = new Date();
    const timeDifference = deadline - today;
    const daysRemaining = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
    return daysRemaining;
}