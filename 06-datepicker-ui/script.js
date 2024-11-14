document.querySelector('.dark-mode-switch').onclick = () => {
    document.body.classList.toggle('dark');
    document.body.classList.toggle('light');
}

const isLeapYear = (year) => {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

const getFebDays = (year) => {
    return isLeapYear(year) ? 29 : 28;
}

const calendar_days = document.querySelector('.calendar-days');
const month_picker = document.querySelector('#month-picker');
const year_number = document.querySelector('#year-number');

const month_names = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

month_picker.onclick = () => {
    document.querySelector('.month-list').classList.add('show');
}

const generateCalendar = (month, year) => {
    calendar_days.innerHTML = '';
    let days_of_month = [31, getFebDays(year), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const currDate = new Date();
    month_picker.innerHTML = month_names[month];
    year_number.innerHTML = year;

    let first_day = new Date(year, month, 1).getDay();

    for (let i = 0; i < days_of_month[month] + first_day; i++) {
        let day = document.createElement('div');
        if (i >= first_day) {
            day.classList.add('calendar-day');
            day.innerHTML = i - first_day + 1;
            day.innerHTML += `<span></span><span></span><span></span><span></span>`;
            if (i - first_day + 1 === currDate.getDate() && year === currDate.getFullYear() && month === currDate.getMonth()) {
                day.classList.add('curr-date');
            }
        }
        calendar_days.appendChild(day);
    }
}

const month_list = document.querySelector('.month-list');
month_names.forEach((e, index) => {
    let month = document.createElement('div');
    month.innerHTML = `<div>${e}</div>`;
    month.onclick = () => {
        curr_month.value = index;
        generateCalendar(curr_month.value, curr_year.value);
        month_list.classList.remove('show');
    };
    month_list.appendChild(month);
});

document.querySelector('#prev-year').onclick = () => {
    --curr_year.value
    generateCalendar(curr_month.value, curr_year.value)
}

document.querySelector('#next-year').onclick = () => {
    ++curr_year.value
    generateCalendar(curr_month.value, curr_year.value)
}

let currDate = new Date();
let curr_month = { value: currDate.getMonth() };
let curr_year = { value: currDate.getFullYear() };

generateCalendar(curr_month.value, curr_year.value);
