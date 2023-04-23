const db = require("../db")

module.exports = {
    getUser: async (req, res) => {
        db.query("select * from usuarios", (error, results) => {
            res.send(results)
        })
    },

    insertUser: (req, res) => {
        const { name } = req.body
        const { email } = req.body
        const { fone } = req.body
        const { data_nascimento } = req.body

        db.query("insert into usuarios (nome, email, fone, data_nascimento) values (?, ?, ?, ?)",
            [name, email, fone, data_nascimento],
            (error, results) => {
                res.send(results)
            }
        )
    },

    edittUser: (req, res) => {
        const { id } = req.body
        const { nome } = req.body
        const { email } = req.body
        const { fone } = req.body
        const { data_nascimento } = req.body

        db.query("update usuarios set nome = ?, email = ?, fone = ?, data_nascimento = ? where id = ?",
            [nome, email, fone, data_nascimento, id],
            (error, results) => {
                if (error) console.log(error)
                res.send(results)
            }
        )
    },

    deleteUser: (req, res) => {
        const { id } = req.params

        db.query("delete from usuarios where id = ?",
            [id],
            (error, results) => {
                if (error) console.log(error)
                res.send(results)
            }
        )
    },
}