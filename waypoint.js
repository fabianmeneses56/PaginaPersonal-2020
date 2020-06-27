var $info = $('.fotoensa')

$info.waypoint(function(direction){
    if(direction == 'down'){
        $info.addClass('mostrar');
        console.log('down');
    }else{
   $info.removeClass('mostrar');
   console.log('up');
    }
},{offset:'40%'});