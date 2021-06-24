let seats = document.getElementsByClassName("seat");

for (const seat of seats) {
    seat.addEventListener("click", () => {
        let booked = seat.classList.toggle("booked");

        const bookedSeats = document.getElementsByClassName("booked").length;
        const remainingSeats = 96 - bookedSeats;


    document.querySelector(".bookedSeats").innerHTML = "Booked Seats : " + bookedSeats;
    const remaining = (document.querySelector(".remainingSeats").innerHTML = "Remaining Seats : " + remainingSeats);
});
}  