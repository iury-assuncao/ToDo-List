
const addBotao = document.querySelector("#adicionar");

const tarefas = [ ];

// Função para validar input

addBotao.addEventListener('click', (e)=>{
    e.preventDefault();

    let novaTarefa = document.getElementById('nova_tarefa').value

    
    if(novaTarefa !=''){

        tarefas.push(novaTarefa);     
        document.getElementById('nova_tarefa').value='';  

    }

    else{
        window.alert("Insira uma nova tarefa");
    }
    
    renderTarefas(tarefas);


})

//funcao mostrar cards de tarefas 

const renderTarefas = (tarefas) => {

        for(i=0;i<tarefas.length;i++){
            let cardTarefa = document.getElementById('lista_tarefas')

            cardTarefa.innerHTML += `
            <li class="card_tarefa">
                    
                <p class="text">${tarefas[i]}</p>
                 
                <div class="botoes_list">
                    <button class="edit" id="editar"><img src="./imgs/edit.png"/></button>
                    <button class="remove" id="remover"><img src="./imgs/remove.png"/></button>
                </div>
            
            </li>

            
    
    
    `;

    
            

    }
    

};



