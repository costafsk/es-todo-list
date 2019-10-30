module.exports = {
    insertTask: (id, description) => {
        const template =
            `<div class="alert alert-primary d-flex justify-content-between align-items-center ${id}" role="alert">
                <div>
                    <strong>${description}</strong>
                </div>
                <div>
                    <button type="button" class="btn btn-danger btn-remove" id="${id}">Excluir</button>
                </div>
            </div>`

        document.querySelector('article').innerHTML += template;
    },

    insertWarning: () => {
        document.querySelector('article').innerHTML += `<h2 class="text-secondary text-center" id="warning">Sem itens cadastrados</h2>`
    },

    removeWarning: () => {
        document.querySelector('#warning').remove();
    }
}