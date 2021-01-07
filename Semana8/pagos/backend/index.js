const {app, PORT} = require('./server/Server');
require('./database/atlas');

app.listen(PORT, (error) => {
  error ? console.error(error) : console.info(`Servidor funcionando en el puerto ${PORT}`);
})