const router = require('express').Router()
const MarcacaoController = require('../controllers/MarcacaoController')

const verifyToken = require('../helpers/verify-token')

/**
 * @openapi
 * /marcacao/registracpf/{cpf}/idrep/{id}:
 *   post:
 *     description: Registra marcação pelo CPF!
 *     parameters:
 *       - in: path
 *         name: cpf
 *         required: true
 *         schema:
 *           type: string
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: FMarcação registrada!
 *       '500':
 *         description: Erro na tranasção com banco!
 *       '401':
 *         description: Acesso negado!    
 */
router.post('/registracpf/:cpf/idrep/:id', verifyToken, MarcacaoController.registraCPF)
/**
 * @openapi
 * /marcacao/registrapis/{pis}/idrep/{id}:
 *   post:
 *     description: Registra marcação pelo PIS!
 *     parameters:
 *       - in: path
 *         name: pis
 *         required: true
 *         schema:
 *           type: string
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: FMarcação registrada!
 *       '500':
 *         description: Erro na tranasção com banco!
 *       '401':
 *         description: Acesso negado!    
 */
router.post('/registrapis/:pis/idrep/:id', verifyToken, MarcacaoController.registraPIS)
/**
 * @openapi
 * /marcacao/recolher/{idrep}/{nsr}:
 *   get:
 *     description: Busca as marcações de um Rep-p pelo NSR!
 *     parameters:
 *       - in: query
 *         name: page
 *         require: false 
 *         schema:
 *           type: int
 *       - in: query
 *         name: limit
 *         require: false 
 *         schema:
 *           type: int
 *       - in: path
 *         name: idrep
 *         schema:
 *           type: int
 *       - in: path
 *         name: nsr
 *         schema:
 *           type: int
 *     responses:
 *       '200':
 *         description: Retorna o funcinario!
 *       '500':
 *         description: Erro na tranasção com banco!
 *       '401':
 *         description: Acesso negado!  
 */
 router.get('/recolher/:idrep/:nsr',verifyToken,MarcacaoController.recolheMarc)

 router.get('/dia/:cpf',verifyToken,MarcacaoController.marcacaoFunc)

module.exports = router