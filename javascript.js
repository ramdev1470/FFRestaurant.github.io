document.querySelector("#reservation-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.querySelector("#name").value;
    const date = document.querySelector("#date").value;
    const time = document.querySelector("#time").value;
    const guests = document.querySelector("#guests").value;

    if (name && date && time && guests) {
        alert(`Reservation confirmed for ${name} on ${date} at ${time} for ${guests} guests. Thank you!`);
    } else {
        alert("Please fill in all fields.");
    }
});
