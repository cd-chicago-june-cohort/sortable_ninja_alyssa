$(document).ready(function(){
    $( function() {
        $( "#sortable" ).sortable();
        $( "#sortable" ).disableSelection();
    } );
    var sorter_id;
    var pic_name;
    for(var i=1; i<6; i++){
        sorter_id = '#slice_' + i;
        pic_name = 'url("sorting_images/sort' + i + '.png")';
        $(sorter_id).css('background-image',pic_name);
    }
});
