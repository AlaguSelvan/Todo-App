import Models from '../models';

const { Todo } = Models;

export const createTodo = async(req, res) => {
    const { title, description } = req.body;
    const { id } = req.user
    console.log(req.user, 'user')
    if (!title) {
      return res
        .status(422)
        .send({
          errors: [
            { title: 'Data missing', detail: 'Provide title and description' },
          ],
        });
    }
    await Todo.create({
      title,
      description,
      createdBy: id
    })
    return res.json({ success: true });
}

export const updateTodo = async(req, res) => {

}

export const deleteTodo = async(req, res) => {

}

export const getAllTodo = async(req, res) => {
    const data = await Todo.findAll();
    return res.send(data)
}

export const getTodoById = async(req, res) => {
  const { id } = req.params;
  const data = await Todo.findById(id);
}