document.addEventListener('DOMContentLoaded', function () {
  // Account Menüsü
  var accountMenu = document.getElementById("accountMenu");
  var accountDropdownMenu = accountMenu.querySelector(".dropdown-menu");

  // Fonksiyonu tanımla
  function toggleAccountDropdown() {
      accountDropdownMenu.style.display = accountDropdownMenu.style.display === "block" ? "none" : "block";
  }

  // Hesap metnine tıklanıldığında toggleDropdown fonksiyonunu çağır
  accountMenu.addEventListener("click", function () {
      toggleAccountDropdown();
  });

  // Sayfa dışında bir yere tıklandığında account menüyü kapat
  document.addEventListener("click", function (event) {
      if (!accountMenu.contains(event.target)) {
          accountDropdownMenu.style.display = "none";
      }
  });

  //SEARCH
  const movieTitleInput = document.getElementById("movieTitleInput");
    const fetchMovieButton = document.getElementById("fetchMovieButton");
    const movieInfoDiv = document.getElementById("movieInfo");
    const videoPlayerDiv = document.getElementById("videoPlayer");

    fetchMovieButton.addEventListener("click", function () {
        const movieTitle = movieTitleInput.value;

        if (movieTitle) {
            fetchMovieInfo(movieTitle);
        } else {
            alert("Lütfen bir film adı girin.");
        }
    });

    movieTitleInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            const movieTitle = movieTitleInput.value;

            if (movieTitle) {
              fetchMovieInfo(movieTitle);
              // Arama yapıldıktan sonra input alanını temizle
              movieTitleInput.value = "";
            } else {
              alert("Lütfen bir film adı girin.");
            }
        }
    });

    function fetchMovieInfo(title) {
        // Film adına göre sayfaya yönlendirme
        const pageURL = getPageURL(title);

        if (pageURL) {
            window.location.href = pageURL;
        } else {
            movieInfoDiv.innerHTML = `<p>Film bulunamadı.</p>`;
            videoPlayerDiv.innerHTML = "";
        }
    }

    function getPageURL(movieTitle) {
      const lowerCaseTitle = movieTitle.toLowerCase();
    
      // Film adlarına göre sayfa URL'lerini içeren bir harita
      const movieURLs = {
        "nowhere": "pop1.html",
        "the tomorrow war": "pop2.html",
        "rustin": "pop3.html",
        "crater": "pop4.html",
        "oppenheimer": "pop5.html",
        "rampage": "pop6.html",
        "lou": "m1.html",
        "blood red sky": "m2.html",
        "mortal engines": "m3.html",
        "bumblebee": "m4.html",
        "the starling": "m5.html",
        "skyscraper": "m6.html",
        "when they see us": "s1.html",
        "manifest": "s2.html",
        "tribes of europa": "s3.html",
        "unorthodox": "s4.html",
        "collateral": "s5.html",
        "lost ollie": "s6.html",
        "troll": "ac1.html",
        "gemini man": "ac2.html",
        "21 bridges": "ac3.html",
        "extraction 2": "ac4.html",
        "aka": "ac5.html",
        "blackout": "ac6.html",
        "don't look up": "c1.html",
        "hustle": "c2.html",
        "the takedown": "c3.html",
        "red notice": "c4.html",
        "we have a ghost": "c5.html",
        "me time": "c6.html",
        "the strays": "t1.html",
        "paradise": "t2.html",
        "awake": "t3.html",
        "jaula": "t4.html",
        "the platform": "t5.html",
        "the good nurse": "t6.html",
        "monster hunter": "f1.html",
        "nightbooks": "f2.html",
        "shazam! fury of the gods": "f3.html",
        "jungle cruise": "f4.html",
        "avatar the way of water": "f5.html",
        "guardians of the galaxy": "f6.html",
        "tim of the word": "sf1.html",
        "ıo": "sf2.html",
        "bird box barcelona": "sf3.html",
        "the midnight sky": "sf4.html",
        "f.r.e.d.i": "sf5.html",
        "oxygen": "sf6.html",
        "hunger": "d1.html",
        "lavander": "d2.html",
        "fatherhood": "d3.html",
        "end of the road": "d4.html",
        "the wonder": "d5.html",
        "cargo": "d6.html",
        "the willoughbys": "an1.html",
        "the sea beast": "an2.html",
        "new gods: nezha reborn": "an3.html",
        "secret magic control agency": "an4.html",
        "grinch": "an5.html",
        "dc league of super-pets": "an6.html",
      };
    
      // Eğer film adı tanımlıysa ilgili URL'yi döndür, değilse boş bir URL döndür
      return movieURLs[lowerCaseTitle] || "";
    }
    
  // Genres Menüsü
  var genresMenu = document.getElementById("genresMenu");
  var genresSubMenu = genresMenu.querySelector(".sub-menu");

  // Fonksiyonu tanımla
  function toggleGenresDropdown() {
      genresSubMenu.style.display = genresSubMenu.style.display === "block" ? "none" : "block";
  }

  // Genres metnine tıklanıldığında toggleDropdown fonksiyonunu çağır
  genresMenu.addEventListener("click", function () {
      toggleGenresDropdown();
  });

  // Sayfa dışında bir yere tıklandığında genres menüyü kapat
  document.addEventListener("click", function (event) {
      if (!genresMenu.contains(event.target)) {
          genresSubMenu.style.display = "none";
      }
  });

  //Login - Signup modal çağırma
  function login(event) {
    event.preventDefault();

    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    console.log('Login:', { username, password });
  }
  function signup(event) {
    event.preventDefault();

    const username = document.getElementById('signupUsername').value;
    const password = document.getElementById('signupPassword').value;

    console.log('Sign Up:', { username, email,  password });
  }

  // Dark Menu
  const ball = document.querySelector(".ball");
  const items = document.querySelectorAll(".container, .navbar-container, .darkmenu,  .ball , .movie-list-container, #scrollToTopBtn,  .dropdown-menu, .sub-menu, .dropdown-menu :hover, .sub-menu a :hover, .footer, .footer p, .footer a");

  ball.addEventListener("click", () => {
    items.forEach((item) => {
      item.classList.toggle("active"); // toggle kullanarak ekleyip kaldırmak
    });
  });
  
  //Arkaplan Animasyonu
  const animatedBackground = document.getElementById('animatedBackground');
  const popularTitle = document.querySelector('.popular-title');
  const popularDetails = document.querySelector('.popular-details');
  const backgrounds = ['url("img/home1.jpg")', 'url("img/home2.jpg")','url("img/home3.png")', 'url("img/home4.jpg")'];
  let currentBackgroundIndex = 0;

  function changeBackground() {
    animatedBackground.style.background = `linear-gradient(to bottom, rgba(0, 0, 0, 0.2), #151515), ${backgrounds[currentBackgroundIndex]}`;
    currentBackgroundIndex = (currentBackgroundIndex + 1) % backgrounds.length;

    // Başlık ve detaylar
    switch (currentBackgroundIndex) {
      case 1:
        popularTitle.src = 'img/h1.png';
        popularDetails.textContent = "The Queen's Gambit Walter Tevis'in 1983 tarihli aynı adlı romanına dayanan bir Amerikan dramatik televizyon mini dizisidir. Scott Frank ve Allan Scott tarafından oluşturuldu ve 23 Ekim 2020'de Netflix'te yayınlandı.";
        break;
      case 2:
        popularTitle.src = 'img/h2.png';
        popularDetails.textContent = "Zeki, alaycı ve azıcık içi geçmiş bir kız olan Wednesday Addams, Nevermore Akademisinde yeni dostlar ve düşmanlar edinirken art arda gerçekleşen cinayetleri araştırır.";
        break;
      case 3:
        popularTitle.src = 'img/h3.png';
        popularDetails.textContent = "Dünyanın en çok aranan sanat eseri hırsızının peşine düşen bir Interpol ajanının hikayesini konu ediyor. İnterpol tarafından dünyanın en çok aranan insanlarını yakalamak için kırmızı bülten çıkarıldığında, FBI'ın en iyi profil uzmanı John Hartley harekete geçer.";
        break;
      case 0:
        popularTitle.src = 'img/h4.png';
        popularDetails.textContent = "Bir acil durum hattına bakan dikkatli bir FBI ajanı, bir aramayı yanıtlar ve kendini Beyaz Saray'daki bir köstebekle ilişkili ölümcül bir komplonun içinde bulur. ";
        break;
      
    }
  }
  // İlk başta arka planı ve içeriği ayarla
  changeBackground();

  setInterval(changeBackground, 10000); // arka planı 10 saniyede bir değiştir
});

// menü-list sayfa içi yönlendirmeleri
function scrollToSection(targetTitle) {
  var titleElements = document.querySelectorAll('.movie-list-title');

  for (var i = 0; i < titleElements.length; i++) {
      var title = titleElements[i].textContent.trim().toUpperCase();

      if (title === targetTitle) {
          titleElements[i].scrollIntoView({ behavior: 'smooth' });
          break;
      }
  }
}

document.getElementById('movies-link').addEventListener('click', function (event) {
  event.preventDefault();
  scrollToSection("MOVIES");
});

document.getElementById('series-link').addEventListener('click', function (event) {
  event.preventDefault();
  scrollToSection("SERIES");
});

document.getElementById('kids-link').addEventListener('click', function (event) {
  event.preventDefault();
  scrollToSection("KIDS/ANIMATION");
});
document.getElementById('action-link').addEventListener('click', function (event) {
  event.preventDefault();
  scrollToSection("ACTION");
});
document.getElementById('comedy-link').addEventListener('click', function (event) {
  event.preventDefault();
  scrollToSection("COMEDY");
});
document.getElementById('thriller-link').addEventListener('click', function (event) {
  event.preventDefault();
  scrollToSection("THRILLER");
});
document.getElementById('fantasy-link').addEventListener('click', function (event) {
  event.preventDefault();
  scrollToSection("FANTASY");
});
document.getElementById('sci-fi-link').addEventListener('click', function (event) {
  event.preventDefault();
  scrollToSection("SCIENCE FICTION");
});
document.getElementById('drama-link').addEventListener('click', function (event) {
  event.preventDefault();
  scrollToSection("DRAMA");
});
document.getElementById('animation-link').addEventListener('click', function (event) {
  event.preventDefault();
  scrollToSection("KIDS/ANIMATION");
});


// login
renderMovies();
const wrapper=document.querySelector('.wrapper');
const loginLink=document.querySelector('.login-link');
const registerLink=document.querySelector('.register-link');

registerLink.addEventListener('click',()=> {
  wrapper.classList.add('.active');
})

loginLink.addEventListener('click',()=> {
  wrapper.classList.remove('.active');
})

//login signup modal açılıp-kapanma
function openLoginModal() {
  closeModal('signupModal');
  closeModal('forgotPasswordModal'); // Ek olarak forgot password modalını kapat
  openModal('loginModal');
}
function openSignupModal() {
  closeModal('loginModal');
  closeModal('forgotPasswordModal'); 
  openModal('signupModal');
}
function openModal(modalId) {
  document.getElementById(modalId).style.display = "block";
}
function closeModal(modalId) {
  var modal = document.getElementById(modalId);
  modal.style.display = 'none';
}

//Yukarı çık buttonu
function scrollToTop() {
  const scrollDuration = 400; // Kaydırma süresi (0.4 saniye)
  const scrollStep = -window.scrollY / (scrollDuration / 15); // Her adımdaki kaydırma miktarı
  let scrollInterval = setInterval(function () {
    if (window.scrollY !== 0) {
      window.scrollBy(0, scrollStep);
    } else {
      clearInterval(scrollInterval);
    }
  }, 15);
}
window.onscroll = function () {
  var scrollToTopBtn = document.getElementById("scrollToTopBtn");
  var triggerHeight = 500; // Belirli bir yükseklik (500 piksel)

  if (document.body.scrollTop > triggerHeight || document.documentElement.scrollTop > triggerHeight) {
    scrollToTopBtn.style.opacity = "1";
  } else {
    scrollToTopBtn.style.opacity = "0";
  }
}
document.getElementById("scrollToTopBtn").addEventListener("click", function () {
  scrollToTop();
});

//Forgot Password 
function openForgotPasswordModal() {
  closeModal('loginModal'); // Login modalını kapat
  closeModal('signupModal'); // Signup modalını kapat
  closeModal('successMessage'); // Başarı mesajını kapat
  var modal = document.getElementById('forgotPasswordModal');
  modal.style.display = 'block';
}
function submitForgotPasswordForm(event) {
  event.preventDefault();

  var email = document.getElementById('forgotPasswordEmail').value;
  
  // Simülasyon: Mail gönderme başarılı varsayılıyor
  console.log('Forgot Password form submitted with email: ' + email);

  closeModal('forgotPasswordModal');
  
  // Başarı mesajını göster
  openSuccessMessage();
}
function openSuccessMessage() {
  var successMessage = document.getElementById('successMessage');
  successMessage.style.display = 'block';
}
// Kapatma fonksiyonları
function closeSuccessMessage() {
  var successMessage = document.getElementById('successMessage');
  successMessage.style.display = 'none';
}

// Anasayfaya yönlendirme işlemi
function redirectToHomePage() {
  window.location.href = "file:///C:/Users/EXCALIBUR/OneDrive/Masa%C3%BCst%C3%BC/Web%20Sitesi/index.html";
}



