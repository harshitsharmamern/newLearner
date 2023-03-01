const express = require('express');
const multer = require('multer');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const storage = multer.memoryStorage();
const upload = multer({ storage });

app.post('/upload', upload.single('file'), (req, res) => {
    //You can access the csv data by req.file.buffer
    // you can use the csv data with any csv parse library or with any other logic
    // you can store the data in any database or on the filesystem as per your requirement
    res.send({ message: 'success' });
    // console.log(file);
});

app.listen(4000, () => {
  console.log('Server started on port 4000');
});
