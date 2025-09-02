const btns = document.querySelectorAll('.tab-btn');
const articles = document.querySelectorAll('.content');
const body = document.body;
const teamLogo = document.getElementById('team-logo');

//  esse js controla a palavra "active" elementos, por exemplo, se vc clica em corinthians, 
//  ele adiciona a palavra active e essa será a única descrição mostrada, 
//  se vc clica em palmeiras, ele remove o active de corinthians e coloca no palmeiras

btns.forEach(function(btn) {
  btn.addEventListener('click', function(e) {
    const id = e.currentTarget.dataset.id;
    if (id) {
      btns.forEach(function(btn) {
        btn.classList.remove('active');
      });
      e.currentTarget.classList.add('active');

      articles.forEach(function(article) {
        article.classList.remove('active');
      });

      const element = document.getElementById(id);
      element.classList.add('active');

      body.setAttribute('data-theme', id);

      const img = e.currentTarget.dataset.img;
      if (img) {
        teamLogo.src = `img/${img}`;
      }
    }
  });
});