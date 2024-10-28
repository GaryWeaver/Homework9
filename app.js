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

$(document).ready(function() {
    let skills = [
        "Lorem",
        "Ipsum",
        "Sodales",
        "Placerat",
        "Primis",
        "Auctor"
    ];

    const updateSkillsList = () => {
        $('#skillsList').empty();
        skills.forEach((skill, index) => {
            const skillItem = $(`
                <div class="skill-item" data-index="${index}">
                    ${skill}
                    <button class="edit-button">Edit</button>
                    <button class="delete-button">Delete</button>
                </div>
            `);
            $('#skillsList').append(skillItem);
        });
    };

    updateSkillsList();

    $('#addSkillButton').click(function() {
        const newSkill = $('#skillInput').val().trim();
        if (newSkill && !skills.includes(newSkill)) {
            skills.push(newSkill);
            $('#skillInput').val('');
            updateSkillsList();
            $('#skillsList').fadeIn();
        } else {
            alert('Skill already exists or input is invalid!');
        }
    });

    // Edit Skill
    $(document).on('click', '.edit-button', function() {
        const index = $(this).parent().data('index');
        const currentSkill = skills[index];
        const newSkill = prompt('Edit skill:', currentSkill); // Prompt user for new skill name

        // Check if user provided a new skill name and it isn't a duplicate
        if (newSkill && newSkill.trim() !== '' && !skills.includes(newSkill)) {
            skills[index] = newSkill.trim(); // Update skill in array
            updateSkillsList(); // Refresh the displayed skills list
        } else if (newSkill === null) {
            // User canceled the prompt
            return;
        } else {
            alert('Skill already exists or input is invalid!'); // Alert if the new skill is a duplicate or empty
        }
    });

    $(document).on('click', '.delete-button', function() {
        const index = $(this).parent().data('index');
        skills.splice(index, 1);
        updateSkillsList();
    });
});