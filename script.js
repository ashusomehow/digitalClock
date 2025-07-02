function updateClock() {
  const now = new Date();

  let hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const ampm = hours >= 12 ? 'PM' : 'AM';

  // Convert to 12-hour format
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'

  const timeStr = [
    hours.toString().padStart(2, '0'),
    minutes.toString().padStart(2, '0'),
    seconds.toString().padStart(2, '0')
  ].join(':') + ' ' + ampm;

  const dateStr = now.toDateString(); // e.g., "Tue Jul 1 2025"

  document.getElementById('clock').textContent = timeStr;
  document.getElementById('date').textContent = dateStr;
}

setInterval(updateClock, 1000);
updateClock(); // Call once initially

// Theme Toggle
document.getElementById('toggleTheme').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});
