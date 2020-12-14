const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: "bar",
    data: {
        labels: ["javaScript", "java", "React", "Angular", "C#"],
        datasets: [{
            data: [15, 20, 30, 25, 12, 15],
            label: "Programming Languages",
            backgroundColor: [
                "red", "green", "blue", "orange", "yellow"
            ]
        }]
    },
    options: {
        responsive: false,
        layout: {
            padding: 50
        },
        tooltips: {
            enabled: true,
            titleFontSize: 30,
            titleAlign: "center",
            titleMarginBottom: 30,
            titleFontColor: "white",
            titleSpacing: 3,
            titleFontStyle: "normal italic",
            bodyFontColor: "yellow",
            bodyAlign: "center",
            bodySpacing: 5
        },
        title: {
            display: true,
            text: "Custom Title",
            fontSize: 30,
            fontColor: "red",
            position: "bottom"
        },
        legend: {
            display: true,
            position: "top",
            align: "center",
            labels: {
                fontSize: 24,
                fontColor: "green",
                boxWidth: 20
            }
        },
        animation: {
            duration: 4000,
            easing: "easeInOutBounce"
        },
        // events: ['click']
    }

});