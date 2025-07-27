const express = require('express');
const app = express();
const path = require('path');

// Simule une base de données (à remplacer plus tard par une vraie DB)
const utilisateurs = [
  { email: 'mode123', password: 'mode123' },
  { email: 'exemple@gmail.com', password: 'azerty123' }
];

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// Route API de login
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  const utilisateur = utilisateurs.find(u => u.email === email);
  if (!utilisateur) {
    return res.status(401).json({ message: 'Email incorrect' });
  }

  if (utilisateur.password !== password) {
    return res.status(403).json({ message: 'Mot de passe incorrect' });
  }
 res.status(200).json({ message: 'Connexion réussie' });
  res.json({ message: 'Connexion réussie' });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Serveur Node.js fonctionne sur http://localhost:${PORT}`);
});
