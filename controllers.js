let estoque = [
  { id: 1, nome: 'Caneta', quantidade: 100 },
  { id: 2, nome: 'Caderno', quantidade: 200 },
  { id: 3, nome: 'Borracha', quantidade: 150 }
];


const getItems = (req, res) => {
       res.json(estoque);
}
//Professor, esse aqui sou eu em kkkkk, O erro foi que, o array está escrito de forma errada (estoquee) e nao (estoque.)


const createItem = (req, res) => {
  const { id, nome, quantidade } = req.body;

  if (!id || !nome || quantidade === undefined) {
    return res.status(400).json({ message: 'Campos id, nome e quantidade são obrigatórios!' });
  }

  const existing = estoque.find(i => i.id === Number(id));
  if (existing) {
    return res.status(400).json({ message: 'ID já existe no estoque!' });
  }

  estoque.push({ id: Number(id), nome, quantidade: Number(quantidade) });
  res.status(201).json({ message: 'Item criado com sucesso!' });
}


const updateItem = (req, res) => {
  const { id } = req.params;
  const { nome, quantidade } = req.body;

  const item = estoque.find(i => i.id === Number(id)); 

  if (!item) {
    return res.status(404).json({ message: 'Item não encontrado!' });
  }

  if (nome) item.nome = nome;
  if (quantidade !== undefined) item.quantidade = Number(quantidade);

  res.json({ message: 'Item atualizado com sucesso!', item });
}


const deleteItem = (req, res) => {
  const { id } = req.params;
  const index = estoque.findIndex(i => i.id === Number(id)); 

  if (index === -1) {
    return res.status(404).json({ message: 'Item não encontrado!' });
  }

  const deleted = estoque.splice(index, 1);
  res.json({ message: 'Item deletado com sucesso!', item: deleted[0] });
}

export default { getItems, createItem, updateItem, deleteItem };
