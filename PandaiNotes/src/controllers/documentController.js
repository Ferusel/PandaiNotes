const Document = require("./../models/documentModel");

exports.createDocument = async (req, res) => {
  try {
    const document = await Document.create(req.body);
    res.status(200).json({
      status: "success",
      data: {
        document: document,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status: "fail",
      message: "An error occurred!",
    });
  }
};

exports.updateDocument = async (req, res) => {
  try {
    const document = await Document.findByIdAndUpdate(
      req.params.documentId,
      req.body,
      { new: true, runValidators: true }
    );
    res.status(200).json({
      status: "success",
      data: {
        document: document,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(404).json({
      status: "fail",
      message: "An error occurred!",
    });
  }
};

exports.getAllDocuments = async (req, res) => {
  try {
    const documents = await Document.find();
    res.status(200).json({
      status: "success",
      data: {
        documents: documents,
        contents: documents.map((el) => el.content),
      },
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status: "fail",
      message: "An error occurred!",
    });
  }
};

exports.getDocument = async (req, res) => {
  try {
    const document = await Document.findById(req.params.documentId).populate({
      path: "tags",
      select: "-__v",
    });
    res.status(200).json({
      status: "success",
      data: {
        document: document,
        content: document.content,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(404).json({
      status: "fail",
      message: `Could not find document with associated id: ${req.params.documentId}`,
    });
  }
};
