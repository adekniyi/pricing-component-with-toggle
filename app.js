const g1h2 = document.querySelector('.grid1 h2');
const g2h2 = document.querySelector('.grid2 h2');
const g3h2 = document.querySelector('.grid3 h2');
const toggle = document.querySelector('.switch input');










toggle.addEventListener('click',function(){
    if (this.checked) {
          g1h2.innerHTML = "$19.99";
          g2h2.innerHTML = "$24.99";
          g3h2.innerHTML = "$39.99"
    }
    else{
        g1h2.innerHTML = "$199.99";
        g2h2.innerHTML = "$249.99";
        g3h2.innerHTML = "$399.99"
    }
})