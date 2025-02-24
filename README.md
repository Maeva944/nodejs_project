# Comment installer le projet sur votre machine ? 🚀

## 1️⃣ Installer Docker 🐳  

1. Téléchargez et installez [Docker Desktop](https://www.docker.com/) en fonction de votre système d'exploitation.  
2. Lancez Docker et assurez-vous qu'il fonctionne correctement.  

---

## 2️⃣ Cloner le projet  

git clone https://github.com/Trinyz7/Fitness_app.git

cd nom-du-projet

---

## 3️⃣ Lancer le projet avec Docker
📌 Ouvrir le terminal dans VS Code
Si vous utilisez VS Code, ouvrez le projet puis allez dans Terminal > Nouveau terminal.


📌 Construire et démarrer les conteneurs

docker-compose up --build -d
- Cette commande va :

Construire l’image Docker (si elle ne l’est pas déjà).
Lancer les conteneurs en arrière-plan.


📌 Vérifier que les conteneurs sont bien en cours d’exécution

docker ps
- Vous devriez voir une liste des conteneurs en cours d'exécution, incluant l'API et la base de données.

--- 

## 4️⃣ Accéder au projet
L’API 👉 http://localhost:3000

pgAdmin (interface pour PostgreSQL) 👉 http://localhost:5050

Email : admin@armstrong.com

Mot de passe : password


---

## 5️⃣ Arrêter le projet
docker-compose down