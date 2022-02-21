
# File Upload by Using Multer in Express and Mongoose

For uploading files you need to ensure that your frontend form is using encType of multipart/form-data and then you pass the file in the post request and this then we upload this file to local system and then optionally push it to cloud (In production systems DO NOT put things inside local system ) and once the file is saved, we will use the file path and save it in the database for retrieval later.

We are using multer npm package to help us with file uploads and you can check how it is used in the video.

# if we want to use the url of image then we can use it from image_url.

**Below picture shows the postman picture and it shows the image url and data of products.**

**Single Upload files:-**



**Multiple uploads files:-**


