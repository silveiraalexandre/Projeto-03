const jwt = require('jsonwebtoken');

function verificaToken(req, res, next) {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(401).send({ mensagem: 'Token não fornecido.' });
  }

  jwt.verify(token, 'seu_secreto_aqui', (err, decoded) => {
    if (err) {
      return res.status(401).send({ mensagem: 'Token inválido.' });
    }

    req.usuario = decoded;
    next();
  });
}