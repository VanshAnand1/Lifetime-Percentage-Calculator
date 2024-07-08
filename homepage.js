function calculate() {
    const birthDate = document.getElementById("birthDate");
    const eventDate = document.getElementById("eventDate");
    const todayDate = Date();

    const testDate = new Date("05/10/2022");

    console.log(birthDate.value);
    console.log(eventDate.value);
    console.log(todayDate);

    const timeBetween = todayDate.getTime() - testDate.getTime();
    console.log(timeBetween);

}