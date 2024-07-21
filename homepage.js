function calculate() {
    const birthDate = document.getElementById("birthDate").value;
    const firstDate = document.getElementById("firstDate").value;
    const secondDate = document.getElementById("secondDate").value;
    const todayDate = Date();

    const birthDateStamp = new Date(birthDate).getTime();
    const firstDayStamp = new Date(firstDate).getTime();
    const secondDayStamp = new Date(secondDate).getTime();
    const todayDateStamp = new Date(todayDate).getTime();

    //calculate time difference 
    if (secondDayStamp > firstDayStamp && birthDate < firstDate) {
        const timeDifferenceEvents = Math.round((secondDayStamp - firstDayStamp) / (1000 * 60 * 60 * 24));
        const timeDifferenceAge = Math.round((todayDateStamp - birthDateStamp) / (1000 * 60 * 60 * 24));
        const percentageTimeDifference = (timeDifferenceEvents / timeDifferenceAge) * 100;

        const element = document.getElementById('answer');
        answer.innerHTML = percentageTimeDifference;
    } else {
        const element = document.getElementById('answer');
        answer.innerHTML = 'i think you entered the dates wrong!!!!!';
    }
}