const db = require('../util/db');

class AlunoModel{

  async getAlunos(){
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM alunos', (error, results) => {
        if (error) reject(error);
        resolve(results);
      });
    })                   
  }

  async getAluno(id){
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM alunos WHERE id = ?', id, (error, results) => {
        if (error) reject(error);
        resolve(results);
      });
    })
  }

  async createAluno(novoAluno){
    return new Promise((resolve, reject) => {
      db.query('INSERT INTO alunos SET ?', novoAluno, (error, results) => {
        if (error) reject(error);
        resolve(results);
      });
    })
  }

  async deleteAluno(id){
    return new Promise((resolve, reject) => {
      db.query('DELETE FROM alunos WHERE id = ?', id, (error, results) => {
        if (error) reject(error);
        resolve(results);
      });
    })
  }

  async updateAluno(id, alunoAtualizado) {
    const updateQuery = `UPDATE alunos SET ${Object.keys(alunoAtualizado).map(key => `${key} = ?`).join(', ')} WHERE id = ?`;
    const updateValues = [...Object.values(alunoAtualizado), id];

    return new Promise((resolve, reject) => {
        db.query(updateQuery, updateValues, (error, results) => {
            if (error) reject(error);
            resolve(results);
        });
    });
  }





}
module.exports = AlunoModel;
