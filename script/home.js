const toggleDark = document.getElementById('toggle-dark')
const html = document.querySelector('html')
const btnProduto = document.querySelectorAll('btn-produto');
const sol = document.getElementById('sol')
const lua = document.getElementById('lua')

let darkMode = false;

mudaIcone();

toggleDark.addEventListener('click',function(){
    if(darkMode){
        html.classList.remove('dark-mode')
        darkMode = false
    }else{
        html.classList.add('dark-mode')
        darkMode = true
    }

    mudaIcone();
})

function mudaIcone(){
    if(darkMode){
        sol.style.opacity = '0'
        lua.style.opacity = '1'
    }else{
        sol.style.opacity = '1'
        lua.style.opacity = '0'
    }
}