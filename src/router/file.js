const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs').promises;

// Thiết lập disk storage để đặt tên và lưu trữ file
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../public/uploads'));//thu muc luu tru
        // Xác định thư mục đích dựa trên loại tệp tin hoặc nhu cầu của bạn
        // if (file.mimetype.startsWith('image/')) {
        //     cb(null, '../public/images/');
        // } else if (file.mimetype.startsWith('video/')) {
        //     cb(null, '../public/videos/');
                // } else {
        //     cb(null, '../public/other/');
        // }
    },
    filename: function (req, file, cb) {
      // Đặt tên file là tên gốc của file được tải lên
      cb(null, file.originalname)
    }
});

const FileFilter = function(req, file, cb) {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/webp' || file.mimetype === 'image/gif') {
      cb(null, true);
    } else {
      cb(new Error('Only JPEG, PNG, WebP and GIF images are allowed'), false);
    }
};

// Tạo multer middleware để xử lý upload file
// const upload = multer({ storage: storage, fileFilter: fileFilter });
const upload = multer({ storage: storage });

router.post('/img', upload.single('img'), function (req, res) {
    // req.file is the name of your file in the form above, here 'uploaded_file'
    // req.body will hold the text fields, if there were any 
    console.log(req.file)
    const filepath = "/uploads/"+req.file.originalname;
    
    return res.json(filepath)
 });

 router.post('/files', upload.array('files', 20), function (req, res, next) {
    // req.files is array of `photos` files
    console.log("hello");
    console.log(req.files);
    let filesPath = [];

    for (const file of req.files) {
        // console.log(file);   


        const filePath = "/uploads/"+file.originalname;
        console.log(filePath);
        filesPath.push(filePath);

    }
    return res.json(filesPath)
    // req.body will contain the text fields, if there were any
  })


  // delete file ==============================================================
// Xóa một file dựa trên đường dẫn của file
const deleteFile = async (filePath) => {
  try {
    // Đường dẫn URL của tệp cần xóa
    const url = filePath;

    // Trích xuất tên tệp từ đường dẫn URL
    // const fileName = path.basename(url);

    // Xác định đường dẫn thư mục chứa tệp
    const directoryPath = path.join(__dirname, '../public');

    // Kết hợp đường dẫn thư mục và tên tệp
    const filePathToDelete = path.join(directoryPath, url);
  
    await fs.unlink(filePathToDelete);
    console.log('Xóa file thành công');
    return true;
  } catch (err) {
    console.error(`Lỗi khi xóa file: ${err}`);
    return false;
  }
};

router.delete('/deleteFile', async (req, res) => {
  try {
    const filePath = req.query.filePath;
    console.log(filePath);
    const result = await deleteFile(filePath);
    if (result) {
      return res.status(200).json(result);
    }
    return res.status(404).json('not found');
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
});



module.exports = router;