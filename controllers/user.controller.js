module.exports.getAllUser = (req, res) => {
  res.json({
    success: true,
    data: [{ id: 1, name: "john" }],
  });
};

// 
module.exports.SendUser = (req, res) => {
  res.json({
    success: true,
    data: req.body,
  });
};
