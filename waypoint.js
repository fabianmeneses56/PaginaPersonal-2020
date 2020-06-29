var $info = $('.fotoensa')
var $info2 = $('.animacionP2') 
var $info3 = $('.animacionCerti') 
$info.waypoint(function(direction){
    if(direction == 'down'){
        $info.addClass('mostrar');
        console.log('down');
    }else{
   $info.removeClass('mostrar');
   console.log('up');
    }
},{offset:'40%'});

 $info2.waypoint(function(direction){
    if(direction == 'down'){
        $info2.addClass('mostrar2');
        console.log('down');
    }else{
   $info2.removeClass('mostrar2');
   console.log('up');
    }
},{offset:'98%'}); 

$info3.waypoint(function(direction){
    if(direction == 'down'){
        $info3.addClass('mostrar3');
        console.log('certi');
    }else{
   $info3.removeClass('mostrar3');
   console.log('certi');
    }
},{offset:'40%'}); 