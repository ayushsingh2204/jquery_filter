$('document').ready(()=>{
    $('.filter-tag').click(function(){
        var col=$(this).attr('data-filter');
        console.log(col);
        if(col=='all')
        {
            $('.filter').show();

        }
        else{
            $('.filter').filter('.'+col).show();
            $('.filter').not('.'+col).hide();

        }
        
    });
});
