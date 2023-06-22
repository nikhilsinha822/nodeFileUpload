

const filesPayloadExist = (req,res,next) => {
    if(!req.files) return res.status(400).json({status: "error", message: "Missing Files"})

    next();
}

module.exports = filesPayloadExist