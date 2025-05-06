window.translations = {
    en: {
      about: "About me",
      resume: "Resume",
      portfolio: "Portfolio",
      contact: "Contact",
      phone: "Phone",
      genre: "Genre",
      platform: "Platform",
      turnBasedStrategy: "Turn-based strategy",
      aboutDescription: "I have been creating games with Unity for 8 years, including over 6 years professionally. \
I have worked on productions for mobile platforms, PC, VR and consoles. \
I have participated in the full cycle of game development - from architecture design, through implementation of mechanics and user interface, to debugging and optimization. \
I also have experience in managing teams of programmers and creating development tools.",
      education: "Education",
      projectInformation: "Project information",
      project1Description: "<h2>This is an example of portfolio details</h2>\
<p>Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia quia. \
Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim. \
Voluptatem officia accusantium nesciunt est omnis tempora consectetur dignissimos. \
Sequi nulla at esse enim cum deserunt eius.</p>",
      project1shortDescription: "Clash english short description",
      // Add more keys...
    },
    pl: {
      about: "O mnie",
      resume: "Doświadczenie",
      portfolio: "Portfolio",
      contact: "Kontakt",
      phone: "Telefon",
      genre: "Gatunek",
      platform: "Platforma",
      turnBasedStrategy: "Strategia turowa",
      aboutDescription: "Od 8 lat tworzę gry z pomocą Unity, z czego ponad 6 lat zawodowo. \
Pracowałem nad produkcjami na platformy mobilne, PC, VR i konsole. \
Brałem udział w pełnym cyklu rozwoju gier — od projektowania architektury, przez implementację mechanik i interfejsu użytkownika, po debugowanie i optymalizację. \
Mam także doświadczenie w zarządzaniu zespołami programistówi tworzeniu narzędzi deweloperskich.",
      education: "Edukacja",
      projectInformation: "Informacje o projekcie",
      project1Description: "<h2>This is an example of portfolio details</h2>\
<p>Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia quia. \
Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim. \
Voluptatem officia accusantium nesciunt est omnis tempora consectetur dignissimos. \
Sequi nulla at esse enim cum deserunt eius.</p>",
      project1shortDescription: "Krótki opis Clasha po polsku",
      // Add more keys...
    }
  };
window.setLanguage = function(lang)  {
  const flagMap = {
    en: {
      src: "https://flagcdn.com/w20/gb.png",
      srcset: "https://flagcdn.com/w40/gb.png 2x",
      label: "English"
    },
    pl: {
      src: "https://flagcdn.com/w20/pl.png",
      srcset: "https://flagcdn.com/w40/pl.png 2x",
      label: "Polski"
    }
  };
  const selected = flagMap[lang];
  const flagImg = document.getElementById("selected-lang-flag");
  flagImg.src = selected.src;
  flagImg.srcset = selected.srcset;
  document.getElementById("selected-lang-text").textContent = selected.label;

  // Optional: trigger translations
  document.querySelectorAll('[data-key]').forEach(el => {
    const key = el.getAttribute('data-key');
    if (el.dataset.useHtml === "true") 
    {
        el.innerHTML = translations[lang][key];
    }
    else
    {
        el.textContent = translations[lang][key] || key;
    }
  });

  localStorage.setItem("preferredLanguage", lang);
}// JavaScript source code
