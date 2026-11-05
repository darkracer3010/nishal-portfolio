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

// Keep the featured Voice AI card compact and present its stack like the inline
// technology lists elsewhere on the page.
const voiceCaseStyles = document.createElement('style');
voiceCaseStyles.textContent = `
  .case-featured { margin-bottom: 0; }
  .case-featured .chip-row {
    display: flex;
    flex-wrap: wrap;
    gap: 0 8px;
    margin-top: 18px;
    color: #b6c990;
    font: 10px/1.8 var(--mono);
  }
  .case-featured .chip-row span {
    display: inline;
    padding: 0;
    border: 0;
    background: none;
    color: inherit;
    font: inherit;
  }
  .case-featured .chip-row span + span::before {
    content: "·";
    margin-right: 8px;
    color: #71836a;
  }
`;
document.head.appendChild(voiceCaseStyles);
