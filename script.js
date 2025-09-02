const btns = document.querySelectorAll('.tab-btn');
const about = document.querySelector('.about');
const articles = document.querySelectorAll('.content');
const body = document.body;
const teamLogo = document.getElementById('team-logo'); // adiciona referência à imagem

//  esse js controla a palavra "active" elementos, por exemplo, se vc clica em corinthians, 
//  ele adiciona a palavra active e essa será a única descrição mostrada, 
//  se vc clica em palmeiras, ele remove o active de corinthians e coloca no palmeiras

about.addEventListener('click', function(e) {
  const id = e.target.dataset.id;
  if (id) {
    btns.forEach(function(btn) {
      btn.classList.remove('active');
    });
    e.target.classList.add('active');

    articles.forEach(function(article) {
      article.classList.remove('active');
    });

    const element = document.getElementById(id);
    element.classList.add('active');

    body.setAttribute('data-theme', id);

    // troca a imagem de acordo com o botão clicado
    const img = e.target.dataset.img;
    if (img) {
      teamLogo.src = img;
    }
  }
});
