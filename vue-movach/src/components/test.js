
//프로젝트 메뉴 누르면 해당 프로젝트 열리기
const workMenuBtn = document.querySelector('.work__categories');
const projectMenuBtn = document.querySelector('.works__projects');
const projects = document.querySelectorAll('.project');

workMenuBtn.addEventListener('click', (e) => {
  const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
  if (filter == null) {
    return;
  }})