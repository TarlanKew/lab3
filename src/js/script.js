let btns   = document.querySelectorAll('button'),
    hidden = document.querySelector('.hidden')

let mainLink    = 'https://jut.su/kimetsu-yaiba/season-1/',
    tanjiroLink = 'https://kimetsu-no-yaiba.fandom.com/wiki/Tanjiro_Kamado',
    nezukoLink  = 'https://kimetsu-no-yaiba.fandom.com/wiki/Nezuko_Kamado',
    zenitsuLink = 'https://kimetsu-no-yaiba.fandom.com/wiki/Zenitsu_Agatsuma',
    inosukeLink = 'https://kimetsu-no-yaiba.fandom.com/wiki/Inosuke_Hashibira'

for (let btn of btns) {
  btn.addEventListener('click', (e) => {
    if(btn.dataset.name === "header") {
      document.location = mainLink
    }else if(btn.dataset.name === "tanjiro") {
      document.location = tanjiroLink
    }else if(btn.dataset.name === "nezuko") {
      document.location = nezukoLink
    }else if(btn.dataset.name === "zenitsu") {
      document.location = zenitsuLink
    }else if(btn.dataset.name === "inosuke") {
      document.location = inosukeLink
    }
  });
}