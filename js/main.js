document.addEventListener('DOMContentLoaded', () => {
  const vid = document.getElementById('heroVideo');
  vid.onended = () => { vid.pause(); };
});