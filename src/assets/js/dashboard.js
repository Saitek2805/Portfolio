// Configuración de las gráficas

// 1. Gráfica de Número de Productos por Categoría en Tickets de un Mes
const ctx1 = document.getElementById('productosPorCategoria').getContext('2d');
new Chart(ctx1, {
    type: 'bar',
    data: {
        labels: ['Lácteos', 'Carnes', 'Frutas', 'Bebidas', 'Higiene'],
        datasets: [{
            label: 'Número de Productos',
            data: [50, 30, 45, 20, 15], // Datos simulados
            backgroundColor: ['#007bff', '#28a745', '#ffc107', '#dc3545', '#6c757d']
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top'
            },
            title: {
                display: true,
                text: 'Número de Productos por Categoría'
            }
        }
    }
});

// 2. Gráfica de Rankings de Gasto en Supermercados
const ctx2 = document.getElementById('rankingSupermercados').getContext('2d');
new Chart(ctx2, {
    type: 'pie',
    data: {
        labels: ['Supermercado A', 'Supermercado B', 'Supermercado C', 'Supermercado D'],
        datasets: [{
            label: 'Gasto (€)',
            data: [250, 400, 300, 150], // Datos simulados
            backgroundColor: ['#007bff', '#28a745', '#ffc107', '#dc3545']
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top'
            },
            title: {
                display: true,
                text: 'Ranking de Gasto por Supermercado'
            }
        }
    }
});

// 3. Gráfica 3: Total de Gasto Mensual por Categoría
const ctx3 = document.getElementById('gastoMensualPorCategoria').getContext('2d');
new Chart(ctx3, {
    type: 'line',
    data: {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'], // Ejemplo de meses
        datasets: [{
            label: 'Gasto en Lácteos',
            data: [200, 180, 220, 210, 230, 250],
            borderColor: '#007bff',
            tension: 0.1
        }, {
            label: 'Gasto en Carnes',
            data: [300, 320, 290, 310, 280, 300],
            borderColor: '#dc3545',
            tension: 0.1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top'
            },
            title: {
                display: true,
                text: 'Gasto Mensual por Categoría'
            }
        }
    }
});

// 4. Gráfica 4: Tickets por Día del Mes
const ctx4 = document.getElementById('ticketsPorDia').getContext('2d');
new Chart(ctx4, {
    type: 'bar',
    data: {
        labels: Array.from({ length: 30 }, (_, i) => i + 1), // Días del mes
        datasets: [{
            label: 'Número de Tickets',
            data: Array.from({ length: 30 }, () => Math.floor(Math.random() * 10) + 1), // Datos aleatorios
            backgroundColor: '#28a745'
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top'
            },
            title: {
                display: true,
                text: 'Tickets por Día del Mes'
            }
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Día del Mes'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Cantidad de Tickets'
                },
                beginAtZero: true
            }
        }
    }
});
