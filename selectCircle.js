function selectCircle(element) {
  const row = element.parentElement;
  const circles = row.querySelectorAll('.circle');
  circles.forEach(circle => circle.style.backgroundColor = 'black');
  element.style.backgroundColor = 'white';
}

