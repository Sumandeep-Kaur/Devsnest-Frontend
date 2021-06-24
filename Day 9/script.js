let seats = document.getElementsByClassName("seat");

for (const ticket of seats) {
    ticket.addEventListener("click", () => {
        let booked = ticket.classList.toggle("booked");

        const bookedSeats = document.getElementsByClassName("booked").length;
        const remainingSeats = 36 - bookedSeats;


    document.querySelector(".bookedSeats").innerHTML = "Booked Seats : " + bookedSeats;
    const remaining = (document.querySelector(".remainingSeats").innerHTML = "Remaining Seats : " + remainingSeats);
});
}  