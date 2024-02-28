const detailsElements = document.querySelectorAll('.faq details');

detailsElements.forEach(detailsElement => {
  detailsElement.addEventListener('mouseover', () => {
    detailsElement.setAttribute('open', '');
  });

  detailsElement.addEventListener('mouseleave', () => {
    detailsElement.removeAttribute('open');
  });
});
