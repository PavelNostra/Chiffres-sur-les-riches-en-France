const barCanvas = document.getElementById("barCanvas");

const barChart = new Chart(barCanvas, {
    type: "bar",
    data: {
        labels: ["Beijing", "Tokyo", "Seoul", "Hong Kong"],
        datasets: [{
            data: [240,120,140,130]
        }]
    }
})

const barChart1 = new Chart(barCanvas, {
    type: "bar",
    data: {
        labels: ["Test", "On regarde", "Seoul", "Hong Kong"],
        datasets: [{
            data: [240,120,140,130]
        }]
    }
})