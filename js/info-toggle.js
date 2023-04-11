
$( document ).ready(function(){
    const elements = document.querySelectorAll('.info__element');
    $( ".info__element" ).click(function() {
        if (this.classList.contains('open')){
            this.classList.remove('open');
        }
        else {
            elements.forEach(element => {
                element.classList.remove('open');
            });
            this.classList.add('open');
        }
    });
});
