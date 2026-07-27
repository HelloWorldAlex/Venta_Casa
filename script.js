fetch('https://api.counterapi.dev/v1/sindy-ramos-team-4844/visitas/up')
    .then(response => response.json())
    .then(data => {
        document.getElementById('visitor-count').textContent = data.count;
    })
    .catch(error => {
        console.error('Error al cargar el contador:', error);
        document.getElementById('visitor-count').textContent = '---';
    });