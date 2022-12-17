const getUsers = (req, res) => {
    console.log(req.url);
    res.send('Mostrando todos los usuarios')
}

const createUser = (req, res) => {
    res.send('Crear usuario')
}

const updateUser = (req, res) => {
    res.send('Modificar usuario')
}

const deleteUser = (req, res) => {
    res.send('Eliminar usuario')
}

module.exports = { 
    getUsers, 
    createUser, 
    updateUser, 
    deleteUser
}