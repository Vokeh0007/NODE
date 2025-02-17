// server code
// an app that deletes all pictures in the server in a certain folder --DPA 2019 - Delete all pictures PPI

const fs = require("fs");
const path = require("path");

function deleteImagesInFolder(foldername) {
  //define image file extensions
  const imageExtensions = [
    ".jpg",
    ".jpeg",
    ".png",
    ".gif",
    ".bmp",
    ".svg",
    ".webp",
  ];
  fs.readdir(foldername, (err, files) => {
    if (err) {
      console.error(`error reading directory: ${err}`);
      return;
    }

    // iterate over the files in the directory
    files.forEach((file) => {
      const filePath = path.join(foldername, file);
      const fileExt = path.extname(file).toLowerCase();

      // check if the file is an image
      if (imageExtensions.includes(fileExt)) {
        fs.unlink(filePath, (err) => {
          if (err) {
            console.error(`error deleting file ${filePath}: ${err.message}`);
          } else {
            console.log(`Deleted file: ${filePath}`);
          }
        });
      }
    });
  });
}
deleteImagesInFolder("images");


