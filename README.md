# api-dj-sequelize
Contexte du projet

Tes tâches :

    Installer et configurer Sequelize sur l'API
    Créer les migrations pour les différentes tables
    Créer les différents modèles
    Lancer les migrations
    Créer un seeder pour les genres de musique et le lancer (un fichier seed avec les données est fourni)
    Coder la logiquer métier dans les contrôleurs (intéractions avec la base de données)

On doit pouvoir :

    ajouter un DJ
    récupérer les informations concernant un DJ
    récupérer la liste de tous les DJs
    modifier un DJ
    supprimer un DJ
    récupérer la liste de tous les genres de musique
    ajouter un club
    récupérer la liste de tous les clubs
    récupérer les informations concernant un club

4 tables :

    Djs (stocke les informations concernant les DJs)
    Musicalgenres (stocke les différentes genres de musique)
    Clubs (stocke les informations concernant les clubs)
    DjMusicalgenres (stocke les relations entre Djs et Musicalgenres)

Relations :

    Un DJ mixe un ou plusieurs genres de musique (relation many-to-many).
    Un genre de musique peut être lié à plusieurs DJs (relation many-to-many).
    Un DJ peut être résident dans un et un seul club (relation one-to-many).

Routes :

    GET /api/djs - récupérer la liste de tous les DJs
    GET /api/djs/:name - récupérer les informations concernant le DJ "name"
    POST /api/djs - ajouter un DJ
    PUT /api/djs/:name - modifier les informations concernant le DJ "name"
    DELETE /api/djs/:name - supprimer le DJ "name"
    GET /api/musicalgenres - récupérer la liste des genres de musique
    GET /api/clubs - récupérer la liste des clubs
    POST /api/clubs - ajouter un club
    GET /api/clubs/:name - récupérer les informations concernant le club "name"

Modalités pédagogiques

Tu travailleras en équipe mais le rendu est individuel.

Tu utiliseras :

    Git et GitHub au quotidien pour sauvegarder et versionner ton code
    Sequelize comme ORM pour intéragir avec la base de données en MySQL

