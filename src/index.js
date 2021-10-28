import './style.css';

const inputs = document.querySelectorAll('.controls input');

const handleUpdate = (e) => {
  const tar = e.target;
  const suffix = tar.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${tar.name}`, tar.value + suffix);
};

inputs.forEach((input) => input.addEventListener('change', handleUpdate));
// inputs.forEach((input) => input.addEventListener('mousemove', handleUpdate));