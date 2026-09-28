/* ==========================================================
   DONNÉES : infos de stage (Activités 1 et 3 du sujet)
   ========================================================== */

const stage = {
    entreprise: "L'Artocarpe",
    secteur: "Association culturelle spécialisée en art contemporain",
    lieu: "Le Moule, Guadeloupe",
    periode: "1er - 30 juin 2026",
    poste: "Stagiaire communication digitale et contenu web"
};

const missions = [
    {
        titre: "Création de flyers et affiches événementielles",
        categorie: "Communication / Design",
        description: "Conception de flyers et d'affiches pour les événements de différents clients de l'association, en utilisant exclusivement Canva (contrainte imposée par la structure).",
        outils: ["Canva"],
        competence: "AC13.03 · Créer, composer et retoucher des visuels"
    },
    {
        titre: "Montage de vidéos de témoignages",
        categorie: "Vidéo",
        description: "Montage de vidéos de témoignages et de retours d'expérience de participants aux formations et résidences d'artistes organisées par l'Artocarpe.",
        outils: ["Canva"],
        competence: "AC13.04 · Tourner et monter une vidéo"
    },
    {
        titre: "Conception d'un questionnaire d'enquête",
        categorie: "Communication",
        description: "Création d'un Google Form pour recueillir l'avis et l'intérêt du public pour l'art contemporain, en vue du salon Pool Art Fair.",
        outils: ["Google Forms"],
        competence: "AC11.05 · Identifier les cibles"
    },
    {
        titre: "Enquête terrain au salon Pool Art Fair",
        categorie: "Communication",
        description: "Rencontre avec des artistes exposants pour recueillir leur avis sur l'art contemporain et évaluer leur intérêt, réponses consignées via le formulaire créé.",
        outils: ["Google Forms"],
        competence: "AC11.06 · Réaliser des entretiens utilisateurs"
    },
    {
        titre: "Création et animation d'un canal WhatsApp",
        categorie: "Communication digitale",
        description: "Création d'un canal WhatsApp pour tenir informées les personnes intéressées rencontrées lors des salons, des événements et expositions de l'Artocarpe.",
        outils: ["WhatsApp"],
        competence: "AC12.04 · Proposer une stratégie de communication",
        lien: { url: "https://whatsapp.com/channel/0029Vb886UO5a242rR61cv3r", texte: "Voir le canal L'ArtoNews" }
    }
];

const realisations = [
    {
        type: "image",
        titre: "Affiche d'exposition Natural Genesis",
        description: "Flyer pour l'exposition de CHAD (Pierre Chadru) à la GPE Gallery.",
        src: "assets/images/flyer-natural-genesis.jpg"
    },
    {
        type: "image",
        titre: "Location de galerie pro",
        description: "Flyer promotionnel pour la location de la galerie de l'Artocarpe.",
        src: "assets/images/flyer-location-galerie.jpg"
    },
    {
        type: "video",
        titre: "Résumé Artocarpe 2K26",
        description: "Vidéo de présentation des activités de l'association.",
        youtubeId: "xyRgPzEv4PI"
    },
    {
        type: "video",
        titre: "Story L'Artocarpe",
        description: "Format story pour les réseaux sociaux.",
        youtubeId: "7fjEIpobpXk"
    }
];

const bilan = {
    appris: "À m'adapter aux directives du client et surtout à l'avis de mon responsable sur mon propre travail : prendre du recul sur mes réalisations, et transformer une contrainte (comme devoir tout faire uniquement avec Canva) en moteur de créativité.",
    approfondir: "Ma pluridisciplinarité : je veux devenir un vrai couteau suisse capable de mener un projet de A à Z malgré les contraintes, et rester fier du résultat."
};

// Outils utilisés au quotidien pendant le stage, mais pas liés à une mission précise
// (réunions, partage de fichiers...) : affichés dans "Mes outils" avec leur utilisation.
const outilsGeneraux = [
    { outil: "Zoom", utilisation: "Réunion hebdomadaire du vendredi avec le président de l'association, et réunions journalières du matin avec ma référente de stage." },
    { outil: "Google Drive", utilisation: "Transmission et partage de documents avec l'équipe." }
];

/* ==========================================================
   ACTIVITÉ 7 : DÉFIS JAVASCRIPT
   Regarde le résultat dans la console du navigateur (F12)
   ========================================================== */

// Défi n°1 : afficher le nom et la catégorie de chaque mission
missions.forEach(function (mission) {
    console.log(`${mission.titre} - ${mission.categorie}`);
});

// Défi n°2 : afficher automatiquement le nombre de missions réalisées
console.log(`${missions.length} missions réalisées`);

/* ==========================================================
   AFFICHAGE DYNAMIQUE DANS LA PAGE (Activité 6 & 7)
   Les missions ne sont écrites nulle part dans le HTML :
   elles sont générées ici, à partir du tableau `missions`.
   ========================================================== */

function renderStage(stageData) {
    document.getElementById("stage-entreprise").textContent = stageData.entreprise;
    document.getElementById("stage-secteur").textContent = stageData.secteur;
    document.getElementById("stage-periode").textContent = stageData.periode;
}

function renderMissions(missionsData) {
    const container = document.getElementById("missions-list");

    missionsData.forEach(function (mission) {
        const card = document.createElement("article");
        card.className = "mission-card";

        const titre = document.createElement("h3");
        titre.textContent = mission.titre;

        const categorie = document.createElement("p");
        categorie.className = "mission-categorie";
        categorie.textContent = mission.categorie;

        const description = document.createElement("p");
        description.className = "mission-description";
        description.textContent = mission.description;

        const competence = document.createElement("p");
        competence.className = "mission-competence";
        competence.textContent = mission.competence;

        const outilsListe = document.createElement("ul");
        outilsListe.className = "mission-outils";
        mission.outils.forEach(function (outil) {
            const item = document.createElement("li");
            item.textContent = outil;
            outilsListe.appendChild(item);
        });

        card.append(titre, categorie, description, competence, outilsListe);

        if (mission.lien) {
            const lien = document.createElement("a");
            lien.className = "mission-lien";
            lien.href = mission.lien.url;
            lien.target = "_blank";
            lien.rel = "noopener";
            lien.textContent = mission.lien.texte + " →";
            card.appendChild(lien);
        }

        container.appendChild(card);
    });
}

function renderRealisations(realisationsData) {
    const container = document.getElementById("realisations-list");

    realisationsData.forEach(function (realisation) {
        const card = document.createElement("article");
        card.className = "realisation-card";

        const thumb = document.createElement("div");
        thumb.className = "realisation-thumb";

        const image = document.createElement("img");
        if (realisation.type === "image") {
            image.src = realisation.src;
        } else {
            image.src = `https://img.youtube.com/vi/${realisation.youtubeId}/hqdefault.jpg`;
        }
        image.alt = realisation.titre;
        thumb.appendChild(image);

        if (realisation.type === "video") {
            const playIcon = document.createElement("span");
            playIcon.className = "play-icon";
            playIcon.textContent = "▶";
            thumb.appendChild(playIcon);
        }

        const titre = document.createElement("h3");
        titre.textContent = realisation.titre;

        card.append(thumb, titre);
        card.addEventListener("click", function () {
            ouvrirLightbox(realisation);
        });

        container.appendChild(card);
    });
}

function renderOutils(missionsData, outilsSupplementaires) {
    const container = document.getElementById("outils-list");
    const utilisationsParOutil = {};

    missionsData.forEach(function (mission) {
        mission.outils.forEach(function (outil) {
            if (!utilisationsParOutil[outil]) {
                utilisationsParOutil[outil] = [];
            }
            utilisationsParOutil[outil].push(mission.titre);
        });
    });

    outilsSupplementaires.forEach(function (item) {
        if (!utilisationsParOutil[item.outil]) {
            utilisationsParOutil[item.outil] = [];
        }
        utilisationsParOutil[item.outil].push(item.utilisation);
    });

    Object.keys(utilisationsParOutil).forEach(function (outil) {
        const terme = document.createElement("dt");
        terme.textContent = outil;

        const definition = document.createElement("dd");
        definition.textContent = utilisationsParOutil[outil].join(" • ");

        container.append(terme, definition);
    });
}

function renderBilan(bilanData) {
    document.getElementById("bilan-appris").textContent = bilanData.appris;
    document.getElementById("bilan-approfondir").textContent = bilanData.approfondir;
}

renderStage(stage);
renderMissions(missions);
renderRealisations(realisations);
renderOutils(missions, outilsGeneraux);
renderBilan(bilan);

/* ==========================================================
   MODALE "MENTIONS LÉGALES"
   ========================================================== */

const legalModal = document.getElementById("legal-modal");
const openLegalButton = document.getElementById("open-legal");
const closeLegalButton = document.getElementById("close-legal");

openLegalButton.addEventListener("click", function () {
    legalModal.hidden = false;
});

closeLegalButton.addEventListener("click", function () {
    legalModal.hidden = true;
});

legalModal.addEventListener("click", function (event) {
    if (event.target === legalModal) {
        legalModal.hidden = true;
    }
});

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && !legalModal.hidden) {
        legalModal.hidden = true;
    }
});

/* ==========================================================
   MODALE "LIGHTBOX" (Mes réalisations)
   Affiche une image en grand, ou intègre la vidéo YouTube
   correspondante, selon le type de la réalisation cliquée.
   ========================================================== */

const lightboxModal = document.getElementById("lightbox-modal");
const lightboxContent = document.getElementById("lightbox-content");
const closeLightboxButton = document.getElementById("close-lightbox");

function ouvrirLightbox(realisation) {
    let contenu;

    if (realisation.type === "image") {
        contenu = document.createElement("img");
        contenu.src = realisation.src;
        contenu.alt = realisation.titre;
    } else {
        contenu = document.createElement("iframe");
        contenu.src = `https://www.youtube.com/embed/${realisation.youtubeId}`;
        contenu.title = realisation.titre;
        contenu.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
        contenu.allowFullscreen = true;
    }

    const texte = document.createElement("div");
    texte.className = "lightbox-text";

    const titre = document.createElement("h3");
    titre.textContent = realisation.titre;

    const description = document.createElement("p");
    description.textContent = realisation.description;

    texte.append(titre, description);

    lightboxContent.replaceChildren(contenu, texte);
    lightboxModal.hidden = false;
}

function fermerLightbox() {
    lightboxModal.hidden = true;
    lightboxContent.replaceChildren();
}

closeLightboxButton.addEventListener("click", fermerLightbox);

lightboxModal.addEventListener("click", function (event) {
    if (event.target === lightboxModal) {
        fermerLightbox();
    }
});

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && !lightboxModal.hidden) {
        fermerLightbox();
    }
});
