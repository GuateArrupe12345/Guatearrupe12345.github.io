var timeAct=80; timeIni=80; timeBon=0;
var successes=0; successesMax=3; attempts=0; attemptsMax=1;
var score=0; scoreMax=3; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=true;
var tiTimeType=1;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=false;
var tiScore=true;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="FELICIDADES GANASTE"; messageTime=""; messageError="BUEN INTENTO"; messageErrorG="BUEN INTENTO"; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="b3JkZW5hcl9mcmFzZXM="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var words=["RWwgZmlzaWNvIEVybmVzdCBSdXRoZXJmb3Jk","ZXMgdW5hIHBhcnTDrWN1bGEgc3ViYXTDs21pY2E=","ZXMgdW5hIHBhcnTDrWN1bGEgY29uIGNhcmdhIGVsw6ljdHJpY2EgbmVnYXRpdmE=","",""];imaW=["modelo_atomico.png","electron.png","electron.jpg","",""];queW=["¿Quien creo este modelo atomico?","¿Que es un electron?","¿cual es la caracteristica de un electron?","",""];altW=["","","","",""];c=[27,27,45,0,0];
var auW=["MQ==","Mg==","Mw==","",""];
var actMaxWidth="600"; actMaxHeight="300";indexG=0;profG=0;dirMedia="ordenar_frases_resources/media/"; textBNext="";
var wordsG=[];imageW=[];questionW=[];audioW=[];cG=[];alterW=[];
