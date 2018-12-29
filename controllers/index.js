const ping = async (req, res) => res.status(200).json({ message: 'PONG' });

module.exports = router => {
  router.get('/ping', ping);
};
