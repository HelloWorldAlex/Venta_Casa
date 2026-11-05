document.addEventListener('DOMContentLoaded', () => {
    const visitorCountElement = document.getElementById('visitor-count');
    
    if (visitorCountElement) {
        let currentVisits = localStorage.getItem('contador_visitas_casa');
        if (!currentVisits) {
            currentVisits = 142; 
        } else {
            currentVisits = parseInt(currentVisits) + 1; 
        }
        localStorage.setItem('contador_visitas_casa', currentVisits);
        visitorCountElement.textContent = currentVisits;
    }
});

function showFloor(floorId, button) {
    const floors = document.querySelectorAll('.floor-content');
    floors.forEach(floor => {
        floor.classList.remove('active-floor');
    });

    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => {
        btn.classList.remove('active');
    });

    document.getElementById(floorId).classList.add('active-floor');
    button.classList.add('active');
}

function showFloor(floorId, button) {
    const floors = document.querySelectorAll('.floor-content');
    floors.forEach(floor => {
        floor.classList.remove('active-floor');
    });

    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => {
        btn.classList.remove('active');
    });

    document.getElementById(floorId).classList.add('active-floor');
    button.classList.add('active');
}