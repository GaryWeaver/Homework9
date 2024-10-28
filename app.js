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
        addSkill();
    });

    function addSkill() {
        const newSkill = $('#skillInput').val().trim();
        if (newSkill && !skills.includes(newSkill)) {
            skills.push(newSkill);
            $('#skillInput').val('');
            updateSkillsList();
            $('#skillsList').fadeIn();
        } else {
            alert('Skill already exists or input is invalid!');
        }
    }
    
    $('#skillInput').keydown(function(event) {
        if (event.key === 'Enter') {
            addSkill();
        } else if (event.key === 'Escape') {
            $('#skillInput').val(''); // Clear the input field
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

$(document).ready(function() {
    // Step 1: Store the navigation menu items in an array
    const navItems = [
        { name: "Summary", link: "#summary" },
        { name: "Education", link: "#education" },
        { name: "Skills", link: "#skills" },
        { name: "Projects", link: "#projects" },
        { name: "Contact Info", link: "#contact" }
    ];

    // Step 2: Dynamically render the menu items
    const $navMenu = $('#navMenu');
    navItems.forEach(item => {
        $navMenu.append(`<li><a href="${item.link}">${item.name}</a></li>`);
    });

    // Step 3: Smooth scrolling for navigation items
    $navMenu.on('click', 'a', function(event) {
        event.preventDefault(); // Prevent default anchor click behavior
        const target = $(this).attr('href'); // Get the target section
        
        // Animate scrolling to the target section
        $('html, body').animate({
            scrollTop: $(target).offset().top // Scroll to the target's top position
        }, 800); // 800 milliseconds duration
    });
});

const projects = [
    {
        title: 'Project #1',
        description: 'Lorem ipsum odor amet, consectetuer',
        deadline: new Date("12/14/2024"),
        imageURL: 'portfolioImage1.jpeg'
    },
    {
        title: 'Project #2',
        description: 'Sed donec mollis vel rutrum; primis',
        deadline: new Date("11/05/2024"),
        imageURL: 'portfolioImage2.jpeg'
    },
    {
        title: 'Project #3',
        description: 'Augue consequat venenatis tortor turpis aliquam nullam',
        deadline: new Date("01/10/2025"),
        imageURL: 'portfolioImage1.jpeg'
    }
];

$(document).ready(function() {
    // Function to render projects
    function renderProjects(projects) {
        const $projectContainer = $('#projectContainer');
        $projectContainer.empty(); // Clear the container before rendering

        projects.forEach(project => {
            const projectCard = `
                <div class="project-card">
                    <img src="${project.imageURL}" alt="${project.title}" height:auto;">
                    <h4>${project.title}</h4>
                    <p>${project.description}</p>
                    <p><strong>Deadline:</strong> ${project.deadline.toLocaleDateString()}</p>
                </div>
            `;
            $projectContainer.append(projectCard);
        });
    }

    // Initial rendering of projects
    renderProjects(projects);

    // Sorting functionality
    $('#sortButton').on('click', function() {
        projects.sort((a, b) => a.deadline - b.deadline); // Sort by deadline (earliest to latest)
        renderProjects(projects); // Re-render sorted projects
    });
});