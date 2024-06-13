function Week() {
    let now = new Date();
    let day_week = now.getDay();
    
    switch (day_week) {
        case 0:
            day_week = 'sunday';
            return day_week;
        case 1:
            day_week = 'Monday';
            return day_week;
        case 2:
            day_week = 'Tuesday';
            return day_week;
        case 3:
            day_week = 'Wednesday';
            return day_week;
        case 4:
            day_week = 'Thursday';
            return day_week;
        case 5:
            day_week = 'Friday';
            return day_week;
        case 6:
            day_week = 'Saturday';
            return day_week;
        default:
            day_week = '';
            return day_week;
    }
}
function DayMonthYear() {
    let now = new Date();

    let day_week_number = now.getDate() >= 10 ? now.getDate() : '0'+ now.getDate();
    let month = now.getMonth();
    let year = now.getFullYear();

    switch (month) {
        case 0:
            month = 'January';
            return `<strong>${Week()}, ${month}/${day_week_number}/${year}<br>${now.getHours() >= 10 ? now.getHours() : '0'+ now.getHours()}:${now.getMinutes() >= 10 ? now.getMinutes() : '0'+ now.getMinutes()} </strong>`;
        case 1:
            month = 'February';
            return `<strong>${Week()}, ${month}/${day_week_number}/${year}<br>${now.getHours() >= 10 ? now.getHours() : '0'+ now.getHours()}:${now.getMinutes() >= 10 ? now.getMinutes() : '0'+ now.getMinutes()} </strong>`;
        case 2:
            month = 'March';
            return `<strong>${Week()}, ${month}/${day_week_number}/${year}<br>${now.getHours() >= 10 ? now.getHours() : '0'+ now.getHours()}:${now.getMinutes() >= 10 ? now.getMinutes() : '0'+ now.getMinutes()} </strong>`;
        case 3:
            month = 'April';
            return `<strong>${Week()}, ${month}/${day_week_number}/${year}<br>${now.getHours() >= 10 ? now.getHours() : '0'+ now.getHours()}:${now.getMinutes() >= 10 ? now.getMinutes() : '0'+ now.getMinutes()} </strong>`;
        case 4:
            month = 'May';
            return `<strong>${Week()}, ${month}/${day_week_number}/${year}<br>${now.getHours() >= 10 ? now.getHours() : '0'+ now.getHours()}:${now.getMinutes() >= 10 ? now.getMinutes() : '0'+ now.getMinutes()} </strong>`;
        case 5:
            month = 'June';
            return `<strong>${Week()}, ${month}/${day_week_number}/${year}<br>${now.getHours() >= 10 ? now.getHours() : '0'+ now.getHours()}:${now.getMinutes() >= 10 ? now.getMinutes() : '0'+ now.getMinutes()} </strong>`;
        case 6:
            month = 'July';
            return `<strong>${Week()}, ${month}/${day_week_number}/${year}<br>${now.getHours() >= 10 ? now.getHours() : '0'+ now.getHours()}:${now.getMinutes() >= 10 ? now.getMinutes() : '0'+ now.getMinutes()} </strong>`;
        case 7:
            month = 'August';
            return `<strong>${Week()}, ${month}/${day_week_number}/${year}<br>${now.getHours() >= 10 ? now.getHours() : '0'+ now.getHours()}:${now.getMinutes() >= 10 ? now.getMinutes() : '0'+ now.getMinutes()} </strong>`;
        case 8:
            month = 'September';
            return `<strong>${Week()}, ${month}/${day_week_number}/${year}<br>${now.getHours() >= 10 ? now.getHours() : '0'+ now.getHours()}:${now.getMinutes() >= 10 ? now.getMinutes() : '0'+ now.getMinutes()} </strong>`;
        case 9:
            month = 'October';
            return `<strong>${Week()}, ${month}/${day_week_number}/${year}<br>${now.getHours() >= 10 ? now.getHours() : '0'+ now.getHours()}:${now.getMinutes() >= 10 ? now.getMinutes() : '0'+ now.getMinutes()} </strong>`;
        case 10:
            month = 'November';
            return `<strong>${Week()}, ${month}/${day_week_number}/${year}<br>${now.getHours() >= 10 ? now.getHours() : '0'+ now.getHours()}:${now.getMinutes() >= 10 ? now.getMinutes() : '0'+ now.getMinutes()} </strong>`;
        case 11:
            month = 'December';
            return `<strong>${Week()}, ${month}/${day_week_number}/${year}<br>${now.getHours() >= 10 ? now.getHours() : '0'+ now.getHours()}:${now.getMinutes() >= 10 ? now.getMinutes() : '0'+ now.getMinutes()} </strong>`;
        default:
            month = '';
            return `<strong>${Week()}, ${month}/${day_week_number}/${year}<br>${now.getHours() >= 10 ? now.getHours() : '0'+ now.getHours()}:${now.getMinutes() >= 10 ? now.getMinutes() : '0'+ now.getMinutes()} </strong>`;
    }
}

function DATE() {
    let res = document.querySelector('div#date')
    res.innerHTML = DayMonthYear();
}