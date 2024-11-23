document.addEventListener('DOMContentLoaded', () => {
    const { DateTime } = luxon;

    // Initialize Datepicker
    const datepicker = document.querySelector('#datepicker');
    flatpickr(datepicker, {
        dateFormat: "m/d/Y",
    });

    const form = document.querySelector('#age-form');
    const result = document.querySelector('#result');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const birthdate = datepicker.value;

        if (!birthdate) {
            result.textContent = "Please select a valid birthdate.";
            return;
        }

        const birthDateObj = DateTime.fromFormat(birthdate, "M/d/yyyy");
        if (!birthDateObj.isValid) {
            result.textContent = "Invalid date format.";
            return;
        }

        const now = DateTime.now();
        const diff = now.diff(birthDateObj, ['years', 'months', 'days']).toObject();

        result.innerHTML = `
            You are <strong>${Math.floor(diff.years)} years</strong>, 
            <strong>${Math.floor(diff.months)} months</strong>, and 
            <strong>${Math.floor(diff.days)} days</strong> old.
        `;
    });
});
