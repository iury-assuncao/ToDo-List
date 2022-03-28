
let addBotao = document.querySelector("#adicionar");
let tarefa = document.getElementById('lista_tarefas');
let inputNovaTarefa = document.getElementById('nova_tarefa');

// função para adicionar ao precionar enter
addBotao.addEventListener('click',(e)=>{
    e.preventDefault();

        let tarefas = {
            nome: inputNovaTarefa.value,
            id:gerarId(),
        }

        adicionarTarefa(tarefas);
});

function gerarId(){
    return Math.floor(Math.random() * 3000);
};

function adicionarTarefa(tarefas){
    let li = criarLi(tarefas)
    tarefa.appendChild(li);
    
    inputNovaTarefa.value = '';

}

function criarLi(tarefas){
    let li = document.createElement('li');
    

    let p = document.createElement('p');
    p.classList.add('text');
    p.innerHTML = tarefas.nome;


    let btnRemover = document.createElement('button');
    btnRemover.innerHTML = `<img src="./imgs/remove.png"/>`;

    li.appendChild(p);
    li.appendChild(btnRemover);

    return li;


}




    
        
    





