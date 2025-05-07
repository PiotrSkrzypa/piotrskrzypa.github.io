// portfolio-details.js

// Load YouTube IFrame API once
if (!window.youtubeApiLoaded) 
{
  const tag = document.createElement("script");
  tag.src = "https://www.youtube.com/iframe_api";
  document.head.appendChild(tag);
  window.youtubeApiLoaded = true;
}
window.projectsData = 
{
    project3: 
    {
      title: "8 Minute Empire",
      logo : "assets/img/portfolio/8MinuteEmpire/Logo.jpg",
      url: "https://www.nintendo.com/us/store/products/eight-minute-empire-complete-edition-switch/",
      platform: "Nintendo Switch",
      genre: "turnBasedStrategy",
      slides: [
        { type: "video", src: "https://www.youtube.com/embed/fi9aOuyH9sA?enablejsapi=1" },
        { type: "image", src: "assets/img/portfolio/8MinuteEmpire/Screenshot_3.jpg" },
        { type: "image", src: "assets/img/portfolio/8MinuteEmpire/Screenshot_1.jpg" },
        { type: "image", src: "assets/img/portfolio/8MinuteEmpire/Screenshot_2.jpg" },
      ]
    },
    project1: 
    {
      title: "Clash II",
      logo : "assets/img/portfolio/Clash/Clash.jpg",
      url: "https://store.steampowered.com/app/1347760/Clash_II",
      platform: "PC",
      genre: "turnBasedStrategy",
      slides: [
        { type: "video", src: "https://www.youtube.com/embed/6mL2hfvuWFw?enablejsapi=1" },
        { type: "image", src: "assets/img/portfolio/Clash/Screenshot_1.jpg" },
        { type: "image", src: "assets/img/portfolio/Clash/Screenshot_2.jpg" },
        { type: "image", src: "assets/img/portfolio/Clash/Screenshot_3.jpg" },
        { type: "image", src: "assets/img/portfolio/Clash/Screenshot_4.jpg" },
        { type: "image", src: "assets/img/portfolio/Clash/Screenshot_5.jpg" }
      ]
    },
    project4: 
    {
      title: "Caveman Chuck",
      logo : "assets/img/portfolio/CavemanChuck/Logo.jpg",
      url: "https://www.nintendo.com/us/store/products/caveman-chuck-prehistoric-adventure-switch/",
      platform: "Nintendo Switch",
      genre: "platformer2d",
      slides: [
        { type: "video", src: "https://www.youtube.com/embed/lQE1fZz_yhA?enablejsapi=1" },
        { type: "image", src: "assets/img/portfolio/CavemanChuck/Screenshot_1.jpg" },
        { type: "image", src: "assets/img/portfolio/CavemanChuck/Screenshot_2.jpg" },
        { type: "image", src: "assets/img/portfolio/CavemanChuck/Screenshot_3.jpg" },
        { type: "image", src: "assets/img/portfolio/CavemanChuck/Screenshot_4.jpg" }
      ]
    },
    project2: 
    {
      title: "Ski Jump Challenge",
      logo : "assets/img/portfolio/SkiJumpChallenge/Logo.jpg",
      url: "https://play.google.com/store/apps/details?id=com.simplicity.ski_jump_challenge",
      platform: "Android, iOS",
      genre: "sport",
      slides: [
        { type: "image", src: "assets/img/portfolio/SkiJumpChallenge/Screenshot_1.jpg" },
        { type: "image", src: "assets/img/portfolio/SkiJumpChallenge/Screenshot_2.jpg" },
        { type: "image", src: "assets/img/portfolio/SkiJumpChallenge/Screenshot_3.jpg" },
        { type: "image", src: "assets/img/portfolio/SkiJumpChallenge/Screenshot_4.jpg" }
      ]
    },
     project6: 
    {
      title: "Inside Grass",
      logo : "assets/img/portfolio/InsideGrass/Logo.jpg",
      url: "https://play.google.com/store/apps/details?id=com.primebitgames.insidegrass",
      platform: "Androi, iOS",
      genre: "adventure",
      slides: [
        { type: "video", src: "https://www.youtube.com/embed/CjSrx5zOdoY?enablejsapi=1" },
        { type: "image", src: "assets/img/portfolio/InsideGrass/Screenshot_1.jpg" },
        { type: "image", src: "assets/img/portfolio/InsideGrass/Screenshot_2.jpg" },
        { type: "image", src: "assets/img/portfolio/InsideGrass/Screenshot_3.jpg" },
        { type: "image", src: "assets/img/portfolio/CavemanChuck/Screenshot_4.jpg" }
      ]
    },
    project5: 
    {
      title: "Dark Tower",
      logo : "assets/img/portfolio/DarkTower/Logo.jpg",
      url: "https://www.nintendo.com/us/store/products/dark-tower-rpg-dungeon-puzzle-switch/",
      platform: "Nintendo Switch",
      genre: "puzzleRPG",
      slides: [
        { type: "video", src: "https://www.youtube.com/embed/CjSrx5zOdoY?enablejsapi=1" },
        { type: "image", src: "assets/img/portfolio/DarkTower/Screenshot_1.jpg" },
        { type: "image", src: "assets/img/portfolio/DarkTower/Screenshot_2.jpg" },
        { type: "image", src: "assets/img/portfolio/DarkTower/Screenshot_3.jpg" }
      ]
    }
    // Add more projects as needed...
};

  // Store players globally
window.youtubePlayers = [];

window.loadPortfolioDetails = function(projectData, id) 
{
  const titleEl = document.querySelector("#portfolio-title");
  if (titleEl) titleEl.textContent = projectData.title;

  const currentEl = document.querySelector("#current");
  if (currentEl) currentEl.textContent = projectData.title;

  const descEl = document.querySelector(".portfolio-description");
  if (descEl)
  {
    descEl.setAttribute("data-key", id + "Description");
    descEl.setAttribute("data-use-html", "true");
  } 

  const genreEl = document.querySelector("#genre");
  if (genreEl)
  {
    genreEl.setAttribute("data-key", projectData.genre);
  } 
  const projectURLEl = document.querySelector("#projectURL");
  if (projectURLEl)
  {
    projectURLEl.setAttribute("href", projectData.url);
    projectURLEl.textContent = projectData.url;
  } 

  const platformEl = document.querySelector("#platform");
  if (platformEl) platformEl.textContent = projectData.platform;

  const swiperWrapper = document.querySelector(".portfolio-details-slider .swiper-wrapper");
  if (!swiperWrapper) return;

  window.projectSwiper = new Swiper(".portfolio-details-slider", {
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});
  swiperWrapper.innerHTML = "";
  window.youtubePlayers = [];

  projectData.slides.forEach((slide, index) => 
  {
    const slideEl = document.createElement("div");
    slideEl.classList.add("swiper-slide");

    if (slide.type === "image") 
    {
      slideEl.innerHTML = `<img src="${slide.src}" class="img-fluid" alt="">`;
    } 
    else if (slide.type === "video") 
    {
      const iframeId = `ytplayer-${index}-${Date.now()}`;
      slideEl.innerHTML = `
        <div class="ratio ratio-16x9">
          <iframe
            id="${iframeId}"
            src="${slide.src}"
            title="YouTube video"
            allowfullscreen
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture">
          </iframe>
        </div>`;
    }
    swiperWrapper.appendChild(slideEl);
  });

  if (window.projectSwiper) 
  {
    setTimeout(() => {
      window.projectSwiper.update();
    }, 100);
  }
  if (window.YT && typeof YT.Player === "function") 
     {
        window.onYouTubeIframeAPIReady(); // Re-bind new video players
     }
};
// Called automatically by YouTube API after script loads
window.onYouTubeIframeAPIReady = function () 
{
  document.querySelectorAll('iframe[src*="youtube.com"]').forEach((iframe) => {
    const player = new YT.Player(iframe, {
      events: {
        onStateChange: function (event) {
          if (event.data === YT.PlayerState.PLAYING) {
            window.projectSwiper?.autoplay?.stop();
          } else if (
            event.data === YT.PlayerState.ENDED
          ) {
            window.projectSwiper?.autoplay?.start();
          }
        }
      }
    });
    window.youtubePlayers.push(player);
  });
}