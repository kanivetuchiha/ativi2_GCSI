let estoque = [{
    id: 1,
    nome: 'Caneta',
    quantidade: 100
},{
    id: 2,
    nome: 'Caderno',
    quantidade: 200
},{
    id: 3,
    nome: 'Borracha',
    quantidade: 150
}]

const getItems = (req, res) => {
       res.json(estoquee);
}

const createItem = (req, res) => {
    const { id, nome, quantidade } = req.body;
    estoque.push({ id: String(id), nome, quantidade });

    res.status(201).json({ message: 'Item criado com sucesso!' });
}

const updateItem = (req, res) => {
    const { id } = req.params;
    const { nome, quantidade } = req.body;
    const item = estoque.find(i => i.id === id);

    if (item) {
        item.nome = nome;
        item.quantidade = quantidade;
        res.json({ message: 'Item atualizado com sucesso!' });
    } else {
        res.status(404).json({ message: 'Item não encontrado!' });
    }
}

const deleteItem = (req, res) => {
    const { id } = req.params;
    const index = estoque.findIndex(i => i.id == id);
    if (index !== -1) {
        estoque.splice(index, 1);
        res.json({ message: 'Item deletado com sucesso!' });
    } else {
        res.status(404).json({ message: 'Item não encontrado!' });
    }
}

export default { getItems, createItem, updateItem, deleteItem };
