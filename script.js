
let addBotao = document.querySelector("#adicionar");
let tarefa = document.getElementById('lista_tarefas');
let inputNovaTarefa = document.getElementById('nova_tarefa');

// função para adicionar ao precionar enter
addBotao.addEventListener('click',(e)=>{
    e.preventDefault();

    let valida = inputNovaTarefa.value;

    if(valida != ''){
        let tarefas = {
            nome: inputNovaTarefa.value,
            id:gerarId(),
        }

        adicionarTarefa(tarefas);
        

    }

    else{
        window.alert("Insira uma nova tarefa");
    }

        
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
    li.id = tarefas.id;
    

    let p = document.createElement('p');
    p.classList.add('text');
    p.innerHTML = tarefas.nome;


    let btnRemover = document.createElement('button');
    btnRemover.innerHTML = `<img src="./imgs/remove.png"/>`;

    btnRemover.setAttribute('onclick','removerTarefa('+tarefas.id+')');

    li.appendChild(p);
    li.appendChild(btnRemover);

    return li;

}

function removerTarefa(id){
    let confirma = window.confirm('Tem certeza que deseja excluir?');

    if(confirma){

        let li = document.getElementById(''+id+ '');
        console.log(id)
        if(li) {
            tarefa.removeChild(li);
        } else {
            alert(id);
        }

    };
}




    
        
    





