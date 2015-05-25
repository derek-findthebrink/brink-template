express = require('express')
router = express.Router()

siteTitle = 'Brink | Template'
siteUrl = 'localhost:3000'

router.get('/', (req,res,next)->
	res.render('pages/home', {title: siteTitle }))

module.exports = router