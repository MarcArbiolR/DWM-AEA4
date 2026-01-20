// 1. Configuració de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDdTpqQR6VIOhArncARLknJBPCMN-v9PUo",
  authDomain: "app-netlify.firebaseapp.com",
  projectId: "app-netlify",
  storageBucket: "app-netlify.firebasestorage.app",
  messagingSenderId: "264072704308",
  appId: "1:264072704308:web:008c1fbbd110c1bb55f561",
  measurementId: "G-3F31YH1ZGY"
};

// Inicialitzar Firebase
firebase.initializeApp(firebaseConfig);

// Obtenir referència a Firestore
const db = firebase.firestore();

// Referència a la col·lecció de camps
const campsRef = db.collection("camps");

// Elements del DOM
const formCamp = document.getElementById("form-camp");
const inputNom = document.getElementById("input-nom");
const inputHectarees = document.getElementById("input-hectarees");
const inputCultiu = document.getElementById("input-cultiu");
const inputDataSembra = document.getElementById("input-data-sembra");
const inputReg = document.getElementById("input-reg");
const inputUbicacio = document.getElementById("input-ubicacio");
const inputNotes = document.getElementById("input-notes");
const llistaCamps = document.getElementById("llista-camps");

// 2. Afegir un camp nou
formCamp.addEventListener("submit", async (e) => {
  e.preventDefault();
  
  const nom = inputNom.value.trim();
  const hectarees = parseFloat(inputHectarees.value);
  const cultiu = inputCultiu.value;
  const dataSembra = inputDataSembra.value;
  const reg = inputReg.value;
  const ubicacio = inputUbicacio.value.trim();
  const notes = inputNotes.value.trim();

  if (!nom || !hectarees || !cultiu || !dataSembra || !reg || !ubicacio) return;

  try {
    await campsRef.add({
      nom: nom,
      hectarees: hectarees,
      cultiu: cultiu,
      dataSembra: dataSembra,
      reg: reg,
      ubicacio: ubicacio,
      notes: notes,
      actiu: true,
      creatEl: firebase.firestore.FieldValue.serverTimestamp()
    });
    
    // Netejar formulari
    formCamp.reset();
  } catch (error) {
    console.error("Error afegint camp:", error);
    alert("Error al registrar el camp");
  }
});

// 3. Escoltar els canvis en temps real
campsRef
  .orderBy("creatEl", "desc")
  .onSnapshot((snapshot) => {
    llistaCamps.innerHTML = "";

    if (snapshot.empty) {
      llistaCamps.innerHTML = '<p class="missatge-buit">No hi ha camps registrats encara.</p>';
      return;
    }

    snapshot.forEach((doc) => {
      const camp = doc.data();
      const card = document.createElement("div");
      card.classList.add("camp-card");
      if (!camp.actiu) {
        card.classList.add("camp-inactiu");
      }

      // Formatear la data
      const dataFormatada = new Date(camp.dataSembra).toLocaleDateString('ca-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });

      card.innerHTML = `
        <div class="camp-header">
          <h3>${camp.nom}</h3>
          <span class="badge ${camp.actiu ? 'badge-actiu' : 'badge-inactiu'}">
            ${camp.actiu ? '✓ Actiu' : '✗ Inactiu'}
          </span>
        </div>
        <div class="camp-info">
          <div class="info-item">
            <strong>🌾 Cultiu:</strong> ${camp.cultiu}
          </div>
          <div class="info-item">
            <strong>📏 Hectàrees:</strong> ${camp.hectarees} ha
          </div>
          <div class="info-item">
            <strong>📅 Data sembra:</strong> ${dataFormatada}
          </div>
          <div class="info-item">
            <strong>💧 Sistema de reg:</strong> ${camp.reg}
          </div>
          <div class="info-item">
            <strong>📍 Ubicació:</strong> ${camp.ubicacio}
          </div>
          ${camp.notes ? `<div class="info-item notes"><strong>📝 Notes:</strong> ${camp.notes}</div>` : ''}
        </div>
        <div class="camp-accions">
          <button class="boto-toggle" data-id="${doc.id}" data-actiu="${camp.actiu}">
            ${camp.actiu ? '⏸ Desactivar' : '▶ Activar'}
          </button>
          <button class="boto-eliminar" data-id="${doc.id}">🗑 Eliminar</button>
        </div>
      `;

      // Botó toggle actiu/inactiu
      const botoToggle = card.querySelector(".boto-toggle");
      botoToggle.addEventListener("click", () => {
        campsRef.doc(doc.id).update({
          actiu: !camp.actiu
        }).catch((error) => {
          console.error("Error actualitzant camp:", error);
        });
      });

      // Botó eliminar
      const botoEliminar = card.querySelector(".boto-eliminar");
      botoEliminar.addEventListener("click", () => {
        if (confirm(`Estàs segur que vols eliminar el camp "${camp.nom}"?`)) {
          campsRef.doc(doc.id).delete().catch((error) => {
            console.error("Error esborrant camp:", error);
          });
        }
      });

      llistaCamps.appendChild(card);
    });
  });