const path = require('path');
const fs = require('fs').promises;

class FileService{
    async deleteFile(filePath) {
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
}

module.exports = new FileService();