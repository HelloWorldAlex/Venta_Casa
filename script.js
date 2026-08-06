fetch('https://api.counterapi.dev/v1/sindy-ramos-team-4844/visitas/up')
    .then(response => response.json())
    .then(data => {
        document.getElementById('visitor-count').textContent = data.count;
    })
    .catch(error => {
        console.error('Error al cargar el contador:', error);
        document.getElementById('visitor-count').textContent = '---';
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