let seats = document.getElementsByClassName("seat");

for (const seat of seats) {
    seat.addEventListener("click", () => {
        seat.classList.toggle("booked");

        const bookedSeats = document.getElementsByClassName("booked").length;
        const remainingSeats = 96 - bookedSeats;

        document.querySelector(".bookedSeats").innerHTML = "Booked Seats : " + bookedSeats;
        document.querySelector(".remainingSeats").innerHTML = "Remaining Seats : " + remainingSeats;
    });
}  