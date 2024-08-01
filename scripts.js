document.addEventListener('DOMContentLoaded', (event) => {
    const projects = document.querySelectorAll('.project');
    let currentProject = 0;

    // Hide all projects except the first one
    projects.forEach((project, index) => {
        if (index !== 0) project.style.display = 'none';
    });

    document.getElementById('nextBtn').addEventListener('click', () => {
        projects[currentProject].style.display = 'none';
        currentProject = (currentProject + 1) % projects.length;
        projects[currentProject].style.display = 'block';
    });

    document.getElementById('prevBtn').addEventListener('click', () => {
        projects[currentProject].style.display = 'none';
        currentProject = (currentProject - 1 + projects.length) % projects.length;
        projects[currentProject].style.display = 'block';
    });
});
