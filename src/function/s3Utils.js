import AWS from 'aws-sdk';

// AWS 설정
AWS.config.update({
    accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
    region: process.env.REACT_APP_AWS_REGION
});

const s3 = new AWS.S3();

export const uploadToS3 = (file) => {
    const params = {
        Bucket: process.env.REACT_APP_AWS_S3_BUCKET_NAME,
        Key: `${Date.now()}_${file.name}`,
        Body: file
        // ACL: 'public-read' // ACL 제거
    };

    return new Promise((resolve, reject) => {
        s3.upload(params, (err, data) => {
            if (err) {
                console.error("S3 upload error:", err); // 오류 로그 추가
                reject(err);
            } else {
                console.log("S3 upload data:", data); // 성공 로그 추가
                resolve(data.Location); // 업로드된 이미지의 S3 URL 반환
            }
        });
    });
};
