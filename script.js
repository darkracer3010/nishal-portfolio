const menu = document.getElementById('menu');
const nav = document.getElementById('nav');

if (menu && nav) {
  menu.addEventListener('click', () => nav.classList.toggle('open'));
  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => nav.classList.remove('open'));
  });
}

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

// Keep the Voice AI feature flush with the following work cards and format its
// technology list consistently with the inline lists used elsewhere.
const featuredCase = document.querySelector('.case-featured');
if (featuredCase) {
  featuredCase.style.marginBottom = '0';

  const caseGrid = featuredCase.nextElementSibling;
  if (caseGrid?.classList.contains('case-grid')) caseGrid.style.marginTop = '0';

  const caseCopy = featuredCase.querySelector('.case-copy');
  if (caseCopy) {
    let stack = caseCopy.querySelector('.chip-row');
    if (!stack) {
      stack = document.createElement('div');
      stack.className = 'chip-row';
      const result = caseCopy.querySelector('.case-result');
      if (result) result.after(stack);
      else caseCopy.append(stack);
    }

    stack.replaceChildren();
    ['Twilio', 'Azure Voice Live', 'Pipecat', 'Python', 'RAG'].forEach((technology, index) => {
      if (index) stack.append(document.createTextNode(' · '));
      stack.append(document.createTextNode(technology));
    });
    Object.assign(stack.style, {
      display: 'block',
      marginTop: '18px',
      color: '#b6c990',
      fontFamily: 'var(--mono)',
      fontSize: '10px',
      lineHeight: '1.8'
    });
  }
}
