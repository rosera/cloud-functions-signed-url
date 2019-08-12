
const {Storage} = require('@google-cloud/storage');
const storage = new Storage();

/**
* TODO(developer): Uncomment the following lines before running the sample.
*/
const bucketName = 'roselabs-212512-secure';
const filename = 'my-secure-file.pdf';

// These options will allow temporary read access to the file
const options = {
  action: 'read',
  expires: '03-17-2025',
};

async function googleSignedURL2(req, res) {
  // Get a signed URL for the file
  storage
    .bucket(bucketName)
    .file(filename)
    .getSignedUrl(options)
    .then(results => {
      const url = results[0];

      console.log(`The signed url for ${filename} is ${url}.`);
      res.send('Signed URL: ' + url);
    })
    .catch(err => {
      console.error('ERROR:', err);
    });
}

// Functions export
exports.helloSecureURL2 = (req, res)=> {
  googleSignedURL2(req, res);
}
