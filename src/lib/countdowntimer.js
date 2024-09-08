export function startCountdown(targetDate, callback) {
  let interval = setInterval(function () {
    // Get today's date and time
    let now = new Date().getTime();

    // Find the distance between now and the countdown date
    let distance = targetDate - now;

    // Time calculations for days, hours, minutes, and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Pass the countdown values to the callback
    callback({ days, hours, minutes, seconds });

    // If the countdown is over, stop the timer
    if (distance < 0) {
      clearInterval(interval);
      callback({ days: 0, hours: 0, minutes: 0, seconds: 0, expired: true });
    }
  }, 1000);

  return () => clearInterval(interval); // Return a function to stop the countdown
}
