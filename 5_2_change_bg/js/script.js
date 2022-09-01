window.addEventListener('load', function (e) {
    
    
    var zxc = document.querySelectorAll(`.btn `); 
    var body = document.querySelector('body');
    
    for(var i = 0; i < zxc.length; i++ ){
        zxc[i].addEventListener(`click`, function() {
            var color = this.getAttribute(`data-color`);
            console.log(color)
            body.style.background = color;
        });
    }
});
    
    
    
















