const paths = [
    'meat-B.png',
    'scale-B.png',
    '925.jpg', 
    '953.jpg', 
    '954.jpg', 
    '956.jpg', 
    '959.jpg', 
    '964.png', 
    '970.jpg', 
    '972.jpg', 
    '985.jpg', 
    '986.jpg', 
    '998.jpg', 
    '999.jpg', 
    '1005.png', 
    '1012.jpg', 
    '1013.jpg', 
    '1016.jpg', 
    'EGF650R.png', 
    'EGF800C.png', 
    'EGF1000.png', 
    'EGF1000R.png', 
    'EGF1000RC.png', 
    'EGF1250C.png',
    '1018.jpg', 
    '1045.jpg', 
    '1048.png', 
    '1051.png', 
    '1052.jpg', 
    '1053.png', 
    '1054.jpg', 
    '1060.jpg', 
    '1062.jpg', 
    '1063.png', 
    '1064.jpg', 
    '1066.jpg', 
    '1068.jpg', 
    '1069.jpg', 
    '1072.jpg', 
    '1073.png', 
    '1079.jpg', 
    'sandwich_bag.png',
    'handle_bag.png',
    'frites-B.png',
    'frites-B.png',
    'frites-B.png',
    'frites-B.png',
    'frites-B.png',
    'paper_bags-B.png',
    'paper_bags-B.png',
    'paper_bags-B.png',
    'paper_bags-B.png',
    'paper_bags-B.png',
    'paper_bags-B.png',
    'paper_bags-B.png',
    'paper_bags-B.png',
    'paper_bags-B.png',
    '1082.jpg', 
    '1083.jpg', 
    '1084.jpg', 
    '1085.jpg', 
    '1086.jpg', 
    '1095.jpg', 
    '1100.jpg', 
    '1111.png', 
    'cashmere.png',
    'IMG_2407.png']
const descriptions = [
'PELLICULE ALIMENTAIRE 17"X437M (3/CS)',
'SCALE PAPER (WAXED) 9X12 2000 FEUILLES/BOÎTE',
'CAFE EXPRESS PAILLES 8" REGULIER 500/PK X 9 PK/CS ',
'CONTENANT REFERMABLE EN BAGASSE 6" x 6" 50/PQT x 5/CS (1091385) ',
'CONTENANT REFERMABLE EN BAGASSE 6" x 9" 50/PQT x 2/CS (1111582) ',
'CONTENANT REFERMABLE EN BAGASSE 9" x 9" 50/PQT x 2/CS (1111641) ',
'IECO BOITE EN PAPIER KRAFT & ENDUIT PLA #1 (11 X 9 X 6.3CM) 300/CS (1377865)',
'CAFE EXPRESS BOITE EN PAPIER KRAFT & ENDUIT PE #3 (19.7 X 14 X 6.3CM) 200/CS',
'CAFE EXPRESS BOITE EN PAPIER KRAFT & ENDUIT PE #4 (20 X 14 X 9CM) 160/CS',
'CAFE EXPRESS BOITE EN PAPIER KRAFT & ENDUIT PE #8 (15.2 X 11.8 X 6.2CM) 200/CS',
'TITAN CONTENANT EN PP 2OZ 300/PK x 4PK/CS (1200/CS)(1088782) ',
'TITAN COUVERCLE POUR CONTENANT 2 oz 300/PK x 4PK/CS (1200/CS)(1088770) ',
'CONTENEUR RECTANGULAIRE TRANSPARENT PP 750ml a/COUV 300/CS (1092158) ',
'CONTENEUR ROND TRANSPARENT PP 750ml a/COUV 300/CS (1301101) ',
'CONTENANT ROND POUR EMPORTER À BASE CLAIRE 650ml AVEC COUVERCLE 50/PK ',
'CONTENANT RECTANGULAIRE POUR EMPORTER À BASE NOIRE 1000ml AVEC ',
'CONTENANT ROND POUR EMPORTER À BASE NOIRE 1000ml AVEC COUVERCLE 50/PK ',
'CONTENANT RECTANGULAIRE POUR EMPORTER À BASE NOIRE 1000ml AVEC ',
'CONTENANT ROND POUR EMPORTER À BASE NOIRE 650ml AVEC COUVERCLE 50/PK X 3/CS (EGF650R)',
'CONTENANT RECTANGULAIRE POUR EMPORTER À BASE CLAIRE 800ml AVEC COUVERCLE 50/PK X 3/CS (EGF800C)',
'CONTENANT RECTANGULAIRE POUR EMPORTER À BASE NOIRE 1000ml AVEC COUVERCLE 50/PK X 3/CS (EGF1000)',
'CONTENANT ROND POUR EMPORTER À BASE NOIRE 1000ml AVEC COUVERCLE 50/PK X 3/CS (EGF1000R)',
'CONTENANT ROND POUR EMPORTER À BASE CLAIRE 1000ml AVEC COUVERCLE 50/PK X 3/CS (EGF1000RC)',
'CONTENANT RECTANGULAIRE POUR EMPORTER À BASE CLAIRE 1250ml AVEC COUVERCLE 50/PK X 3/CS (EGF1250C)',
'CONTENANT RECTANGULAIRE POUR EMPORTER À BASE CLAIRE 1250ml AVEC ',
'TITAN TABLE À VAPEUR DEMI TAILLE PEU PROFOND EN ALUM 100/CS ',
'TITAN TABLE À VAPEUR DEMI TAILLE PROFONDE EN ALUM 10/PQT X 10/CS ',
'TITAN TABLE À VAPEUR PROFONDES EN ALUM 5/PK X 10/CS ', 
'CONTENANTS RONDS 9" EN ALUMINIUM 500/CS ',
'FOIL CONTENANTS RONDS 9" EN ALUMINIUM 125/PQT X 4/CS ',
'COUVERCLES EN DOME POUR CONT. 9" RONDS 125/PQT X 4/CS',
'TITAN COUVERCLES POUR TABLE À VAPEUR DEMI TAILLE 10/PQT X 10/CS',
'STOBIA CONTENANTS RONDS 8" EN ALUMINIUM 500/CS (1282791) ',
'STOBIA FOIL CONTENANTS RONDS 8" EN ALUMINIUM 125/PQT X 4/CS ',
'COUVERCLES EN DOME POUR CONT. 8" RONDS 125/PQT X 4/CS (1403537) ',
'TITAN FOIL CONTENANTS OBLONGS 1 LIVRE 125/PQT X 4/CS (1390363) ',
'COUVERCLES POUR CONTENANTS TITAN FOIL 1 LIVRE 125/PQT X 4/CS (1399613) ',
'TITAN FOIL CONTENANTS OBLONGS 900ML 125/PQT X 4/CS ',
'TITAN FOIL CONTENANTS OBLONGS 2.25 LIVRES 125/PQT X 4/CS (1386222) ',
'COUVERCLES EN DOME POUR CONT TITAN FOIL 2.25 LIVRE OBLONG 125/PK X 4/CS ',
'TITAN PAPIER PARCHEMIN 16.4" X 24.4" 1000/CS (1304076) ',
'SAC PAPIER POUR SANDWICH REG 6.75"X6.75" (1000/CS)',
'SAC À POIGNÉE 10"X5"X13" (250/CS)',
'SAC PAPIER POUR FRITES DOUBLE NO. 1/2 (3"X1.75"X5.875") (250/PQT)',
'SAC PAPIER POUR FRITES DOUBLE NO. 3/4 (3.5"X2.18"X5.75") (250/PQT)',
'SAC PAPIER POUR FRITES DOUBLE NO. 1 (3.5"X2.18"X6.75") (250/PQT)',
'SAC PAPIER POUR FRITES DOUBLE NO. 2 (4.31"X2.37"X8.18") (250/PQT)',
'SAC PAPIER POUR FRITES DOUBLE NO. 3 (4.75"X3.87"X8.81") (250/PQT)',
'SAC ÉPICERIE PAPIER BRUN NO. 3 (4.75"X2.375"X8.625") (500/PQT)',
'SAC ÉPICERIE PAPIER BRUN NO. 5 (5.25"X3.37"X10.62") (500/PQT)',
'SAC ÉPICERIE PAPIER BRUN NO. 6 (6"X3.625"X11") (500/PQT)',
'SAC ÉPICERIE PAPIER BRUN NO. 7 (6"X3.625"X12.5") (500/PQT)',
'SAC ÉPICERIE PAPIER BRUN NO. 8 (6.25"X3.75"X12.5") (500/PQT)',
'SAC ÉPICERIE PAPIER BRUN NO. 10 (6.56"X4.06"X13") (500/PQT)',

'SAC ÉPICERIE PAPIER BRUN NO. 12 (7.12"X4.31"X13.75") (500/PQT)',
'SAC ÉPICERIE PAPIER BRUN NO. 14 (7.75"X4.75"X14.75") (500/PQT)',
'SAC ÉPICERIE PAPIER BRUN NO. 20 (8.25"X5.25"X16") (500/PQT)',

'SACS À PAPIER KRAFT #10 500/CS (1327560)',
'SACS À PAPIER KRAFT #20 500/CS (1327561) ',
'SACS À PAPIER KRAFT #3 500/CS (1327488) ',
'SACS À PAPIER KRAFT #5 500/CS (1327546) ',
'EMBALLAGE PAPIER D\'ALUMINIUM - 10.5" x 13" - 2500/CS (346097) ',
'SUAVE SERVIETTES DE DINER 1 PLI 1/8 PLIER 12X250/PQ (1319253) ',
'SUAVE SERVIETTE POUR DISTRIBUTRICE JUNIOR 500/PK X 18/CS (193173)(833342) ',
'SUAVE PREMIUM 2 PLY JUMBO PAPIER HYGIENIQUE 8/CS (1300500) (1113083) ',
'PREMIUM CASHMERE',
'ESSUIE MAINS BLANC EN ROULEAU 24 ROULEAUX/CS'
]
var zip = [];
zip = paths.map(function(e, i, a) {
  return [e, descriptions[i]]
})

for (const i in zip) {
    const element = zip[i]
    const image_path = element[0]
    const image_description = element[1]
    var div = document.getElementById('products')

    html_to_add = `
    <div class="card">
        <div class="product" >
            <div class="product_text">
                <p>
                  ${image_description}
                </p>
            </div>
            <div class="product_image">
                <img src=products/${image_path} alt=${image_description} />
            </div>
        </div>
    </div>
    `
    div.innerHTML += html_to_add;
}
