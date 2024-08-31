const tours = [
    { date: "February 16, 2024", event: "Culture Room W/ Ripe", location: "Fort Lauderdale, United States" },
    { date: "February 18, 2024", event: "Revolution Live W/ Ripe", location: "Miami, United States" },
    { date: "February 19, 2024", event: "House of Blues", location: "Orlando, United States" },
    { date: "February 20, 2024", event: "Jannus Live", location: "St. Petersburg, United States" },
]

const tourContainer = document.getElementById('tour-container');

tours.forEach(tour => {
    const tourInfo = document.createElement('div');
    tourInfo.className - 'tour-indo';

    tourInfo.innerHTML = `
            <div class="date-event">
                <div class="date">${tour.date}</div>
                <div class="event">${tour.event}</div>
            </div>
            <div class="location">${tour.location}</div>
            <button class="tickets">Get Tickets</button>
        `;

    tourContainer.appendChild(tourInfo);
});