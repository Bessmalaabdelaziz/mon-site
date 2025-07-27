
  
  // Fonction pour afficher la page principale après connexion
  function afficherSite() {
    document.getElementById("loginPage").style.display = "none";
    document.getElementById("mainSite").style.display = "flex";
    document.getElementById("topNavbar").style.display = "none"; // 🔴 cacher le haut
    return false;
  }
  
  function retourLogin() {
    document.getElementById("loginPage").style.display = "flex";
    document.getElementById("mainSite").style.display = "none";
    document.getElementById("topNavbar").style.display = "flex"; // 🔁 réafficher en haut
  }
  
  
  // Fonction appelée quand on clique sur un bouton de style
  function choisirStyle(style) {
    afficherTenueFromStyle(style);
  }
  
  window.addEventListener("DOMContentLoaded", () => {
    if (window.location.hash === "#mainSite") {
      // Afficher directement la page principale après login
      document.getElementById("loginPage").style.display = "none";
      document.getElementById("mainSite").style.display = "flex";
      document.getElementById("topNavbar").style.display = "none";
    }
  });
     
 function verifierConnexion() {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  fetch('/api/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  })
    .then(async res => {
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || "Erreur inconnue");
      }
      // Connexion réussie
      window.location.href = "main.html#mainSite";
    })
    .catch(err => {
      alert(err.message); // Email incorrect ou mot de passe incorrect
    });

  return false;
}


  function afficherTenueFromStyle(style) {
    const tenues = {
      "Classique": [
        { image: "img/classique1.jpg", nom: "Blazer élégant" },
        { image: "img/classique2.jpg", nom: "Pantalon à plis" },
        { image: "img/classique3.jpg", nom: "Chemise blanche" },
        { image: "img/classique4.jpg", nom: "Escarpins" },
        { image: "img/classique5.jpg", nom: "Sac à main structuré" },
      ],
      "Sportif": [
        { image: "img/sportif1.jpg", nom: "Jogging" },
        { image: "img/sportif2.jpg", nom: "Basket stylée" },
        { image: "img/sportif3.jpg", nom: "Hoodie confortable" },
        { image: "img/sportif4.jpg", nom: "Legging" },
        { image: "img/sportif5.jpg", nom: "Casquette" },
      ],
      "Décontracté": [
        { image: "img/decontracte1.jpg", nom: "Jean troué" },
        { image: "img/decontracte2.jpg", nom: "T-shirt ample" },
        { image: "img/decontracte3.jpg", nom: "Sweat doux" },
        { image: "img/decontracte4.jpg", nom: "Sneakers" },
        { image: "img/decontracte5.jpg", nom: "Veste casual" },
      ],
      "Chic": [
        { image: "img/chic1.jpg", nom: "Robe satinée" },
        { image: "img/chic2.jpg", nom: "Talons élégants" },
        { image: "img/chic3.jpg", nom: "Blouse fluide" },
        { image: "img/chic4.jpg", nom: "Pantalon tailleur" },
        { image: "img/chic5.jpg", nom: "Collier raffiné" },
      ],
      "Urbain": [
        { image: "img/urbain1.jpg", nom: "Bomber street" },
        { image: "img/urbain2.jpg", nom: "Jean destroy" },
        { image: "img/urbain3.jpg", nom: "Sneakers chunky" },
        { image: "img/urbain4.jpg", nom: "T-shirt graphique" },
        { image: "img/urbain5.jpg", nom: "Banane épaule" },
      ],
      "Traditionnel": [
        { image: "img/traditionnel1.jpg", nom: "Karakou" },
        { image: "img/traditionnel2.jpg", nom: "Robe Kabyle" },
        { image: "img/traditionnel3.jpg", nom: "Fouta brodée" },
        { image: "img/traditionnel4.jpg", nom: "Chedda algéroise" },
        { image: "img/traditionnel5.jpg", nom: "Accessoires berbères" },
      ],
      "Élégant": [
        { image: "img/elegant1.jpg", nom: "Tailleur moderne" },
        { image: "img/elegant2.jpg", nom: "Pochette assortie" },
        { image: "img/elegant3.jpg", nom: "Blouse chic" },
        { image: "img/elegant4.jpg", nom: "Pantalon fluide" },
        { image: "img/elegant5.jpg", nom: "Talons nude" },
      ],
      "Streetwear": [
        { image: "img/streetwear1.jpg", nom: "Sweat oversize" },
        { image: "img/streetwear2.jpg", nom: "Basket montante" },
        { image: "img/streetwear3.jpg", nom: "Pantalon cargo" },
        { image: "img/streetwear4.jpg", nom: "Bonnet" },
        { image: "img/streetwear5.jpg", nom: "Sac à dos stylé" },
      ],
      "Rock": [
        { image: "img/rock1.jpg", nom: "Veste en cuir" },
        { image: "img/rock2.jpg", nom: "Jeans noir skinny" },
        { image: "img/rock3.jpg", nom: "T-shirt groupe rock" },
        { image: "img/rock4.jpg", nom: "Chaussures cloutées" },
        { image: "img/rock5.jpg", nom: "Accessoires noirs" },
      ],
      "Romantique": [
        { image: "img/romantique1.jpg", nom: "Robe fleurie" },
        { image: "img/romantique2.jpg", nom: "Cardigan pastel" },
        { image: "img/romantique3.jpg", nom: "Ballerines" },
        { image: "img/romantique4.jpg", nom: "Sac perlé" },
        { image: "img/romantique5.jpg", nom: "Collier cœur" },
      ],
      "Vintage": [
        { image: "img/vintage1.jpg", nom: "Robe à pois rétro" },
        { image: "img/vintage2.jpg", nom: "Lunettes rondes" },
        { image: "img/vintage3.jpg", nom: "Foulard soie" },
        { image: "img/vintage4.jpg", nom: "Pantalon taille haute" },
        { image: "img/vintage5.jpg", nom: "Sac rétro" },
      ],
      "Glamour": [
        { image: "img/glamour1.jpg", nom: "Robe soirée pailletée" },
        { image: "img/glamour2.jpg", nom: "Escarpins brillants" },
        { image: "img/glamour3.jpg", nom: "Pochette luxe" },
        { image: "img/glamour4.jpg", nom: "Bracelet doré" },
        { image: "img/glamour5.jpg", nom: "Robe sirène" },
      ],
      "Tendance": [
        { image: "img/tendance1.jpg", nom: "Crop top" },
        { image: "img/tendance2.jpg", nom: "Jean baggy" },
        { image: "img/tendance3.jpg", nom: "Lunettes colorées" },
        { image: "img/tendance4.jpg", nom: "Mini-sac flashy" },
        { image: "img/tendance5.jpg", nom: "Veste courte" },
      ],
      "Oversize": [
        { image: "img/oversize1.jpg", nom: "Veste XXL" },
        { image: "img/oversize2.jpg", nom: "Pantalon large" },
        { image: "img/oversize3.jpg", nom: "T-shirt long" },
        { image: "img/oversize4.jpg", nom: "Sneakers massives" },
        { image: "img/oversize5.jpg", nom: "Sac maxi" },
      ]
    };
  
    const contenu = document.getElementById("contenu-tenue");
    contenu.innerHTML = "";
  
    if (tenues[style]) {
      tenues[style].forEach(t => {
        const div = document.createElement("div");
        div.className = "vetement-card";
        div.style.backgroundImage = `url('${t.image}')`;
        div.textContent = t.nom;
        contenu.appendChild(div);
      });
    } else {
      contenu.innerHTML = "<p>Aucune tenue trouvée pour ce style.</p>";
    }
  }

    const params = new URLSearchParams(window.location.search);
    const genre = params.get("genre");
    const style = params.get("style");
    
    const toutesTenues = JSON.parse(localStorage.getItem("tenues")) || [];
    
    // 👇 FILTRAGE par genre ET style
    const tenuesFiltrees = toutesTenues.filter(tenue => 
      tenue.genre === genre && tenue.style === style
    );
    
    // Affichage dans le DOM
    tenuesFiltrees.forEach(tenue => {
      const carte = document.createElement("div");
      carte.className = "carte-tenue";
      carte.innerHTML = `
        <img src="${tenue.image}" alt="${tenue.nom}" />
        <p>${tenue.nom}</p>
      `;
      document.getElementById("contenu-style").appendChild(carte);
    });
    window.onload = function () {
      const params = new URLSearchParams(window.location.search);
      const genre = params.get("genre");
      const style = params.get("style");
    
      if (!genre || !style) return;
    
      // Affichage du titre
      document.getElementById("titre-style").textContent = `${style} (${genre})`;
    
      const toutesTenues = JSON.parse(localStorage.getItem("tenues")) || [];
    
      const tenuesFiltrees = toutesTenues.filter(tenue => 
        tenue.genre === genre && tenue.style === style
      );
    
      const contenu = document.getElementById("contenu-style");
      contenu.innerHTML = ""; // Nettoyer avant d’ajouter
    
      tenuesFiltrees.forEach(tenue => {
        const carte = document.createElement("div");
        carte.className = "carte-tenue";
        carte.innerHTML = `
          <img src="${tenue.image}" alt="${tenue.nom}" />
          <p>${tenue.nom}</p>
        `;
        contenu.appendChild(carte);
      });
    };
    
  
  
  
  // Appel automatique si l’URL a ?style=Sportif&genre=Femme
  window.onload = function () {
    const params = new URLSearchParams(window.location.search);
    const style = params.get("style");
    const genre = params.get("genre");
    if (style && genre) {
      afficherTenuesDepuisLocalStorage(style, genre);
    }
  };
  
  window.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const style = params.get("style");
  
    if (!style) {
      document.getElementById("titre-style").innerText = "Style non spécifié.";
      return;
    }
  
    const tenues = JSON.parse(localStorage.getItem("tenues") || "[]");
    const tenuesFiltrees = tenues.filter(t => t.style === style);
  
    const container = document.getElementById("contenu-tenue");
    const titre = document.getElementById("titre-style");
  
    titre.innerText = `Style : ${style}`;
    container.innerHTML = "";
  
    if (tenuesFiltrees.length === 0) {
      container.innerHTML = "<p>Aucune tenue trouvée pour ce style.</p>";
      return;
    }
    tenuesFiltrees.forEach((t) => {
      const div = document.createElement("div");
      div.className = "tenue-card";
      div.innerHTML = `
        <img src="${t.image}" alt="${t.nom}">
        <p><strong>${t.nom}</strong><br><em>${t.genre} - ${t.style}</em></p>
      `;
      container.appendChild(div);
    });
    
    
  });
  function supprimerTenue(indexDansStyle, style) {
    let tenues = JSON.parse(localStorage.getItem("tenues") || "[]");
    
    // Trouver les tenues correspondant au style
    const tenuesFiltrees = tenues.filter(t => t.style === style);
  
    // Obtenir l’élément complet à supprimer
    const tenueASupprimer = tenuesFiltrees[indexDansStyle];
  
    // Supprimer cette tenue de la liste complète
    tenues = tenues.filter(t => t.nom !== tenueASupprimer.nom || t.image !== tenueASupprimer.image);
  
    localStorage.setItem("tenues", JSON.stringify(tenues));
    location.reload(); // Recharger la page pour mettre à jour l'affichage
  }
  
  window.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const genre = params.get("genre");
  
    const btnRetour = document.getElementById("btnRetour");
  
    if (btnRetour) {
      if (genre === "femme") {
        btnRetour.onclick = () => window.location.href = "styles-femme.html";
      } else {
        btnRetour.onclick = () => window.location.href = "styles-homme.html";
      }
    }
  });
// Charger les infos de contact depuis localStorage
const contactData = JSON.parse(localStorage.getItem("contactAdmin"));

if (contactData) {
  document.getElementById("contactAdmin").innerHTML = `
    📞 ${contactData.numero ? contactData.numero : "Numéro non fourni"}<br>
    📧 ${contactData.email ? contactData.email : "Email non fourni"}
  `;
} else {
  document.getElementById("contactAdmin").textContent = "Aucun contact disponible.";
}
