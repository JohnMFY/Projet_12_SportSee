|************|
|* SportSee *|
|************|

/* About */
    SportSee est une application avec un tableau de bord d'analytics de coaching sportif.
    Développé en React, les graphique sont eux fait avec Recharts.

/* API */
    Les datas sont récupéré à l'aide de fetch, dans le dossier services Frontend\src\services\api-data-formatter.js.
    Dans ce même fichier une condition est mise sur chaque fetch pour avoir des datas mocké grace à [const isMocked = true;].
    Dans le cas ou les datas ont besoins d'être formatté pour correspondre aux attentes des graphs Rechart,
    des fonctions de formatage se trouve dans ce fichier Frontend\src\services\api-data-formatter.js

/* Representation des composants .jsx*/

main.jsx = {
    Header
    Nav
    Dashbord = {
        Hello
        DailyActivity
        SessionsDatas = {
            SessionsDatasActivity
            SessionsDatasIntensity
            SessionsDatasScore
        }
        Nutrition
    }
}