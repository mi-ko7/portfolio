const hamburger = document.querySelector('.hamburger');
const drawerNav = document.querySelector('.drawer__nav');
const overlay = document.querySelector('.drawer__overlay');

// 共通の切り替え関数を作る
const toggleDrawer = () => {
  hamburger.classList.toggle('is-open'); // 三本線を✕にする
  drawerNav.classList.toggle('is-open'); // メニューを横から出す
  overlay.classList.toggle('is-open');   // 背景を暗くする
};

// ハンバーガーボタンをクリックした時
hamburger.addEventListener('click', toggleDrawer);

// 背景の暗幕をクリックした時（メニューを閉じる）
overlay.addEventListener('click', toggleDrawer);

// メニュー内のリンクをクリックした時（ページ内リンクで移動した後にメニューを閉じる）
const drawerLinks = document.querySelectorAll('.drawer__nav-list a');
drawerLinks.forEach(link => {
  link.addEventListener('click', toggleDrawer);
});



/* ===========================
Works    モーダル表示用のスタイル  
=========================== */


document.addEventListener('DOMContentLoaded', function() {
  const modalLinks = document.querySelectorAll('.js-modal');
  
  // モーダル用の要素を作成してbodyに追加
  const modal = document.createElement('div');
  modal.classList.add('modal');
  modal.innerHTML = '<div class="modal__content"><img src="" alt=""></div>';
  document.body.appendChild(modal);
  
  const modalImg = modal.querySelector('img');

  // 画像がクリックされた時の処理
  modalLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault(); // ページ遷移を防ぐ
      const imageSrc = this.getAttribute('href'); // hrefの画像パスを取得
      modalImg.setAttribute('src', imageSrc); // モーダルのimgにセット
      modal.classList.add('is-active'); // 表示
    });
  });

  // 黒い背景をクリックしたら閉じる
  modal.addEventListener('click', function() {
    modal.classList.remove('is-active');
  });
});