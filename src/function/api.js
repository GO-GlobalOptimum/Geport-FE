import axios from "axios";
// api 예시 보고 참고 하세요

export const get_api = () => {
    axios.get("/BE/geport/list",{
        withCredentials: true
    })
        .then(res => {
            console.log(res.data);
        })
        .catch(error => {
            console.error("There was an error making the request:", error);
        });
}

export const post_api = () => {
    axios.post("/BE/geport/create", {
        "name": "string",
        "bio": "string",
        "phone": "string",
        "mbti": "string",
        "age": 0,
        "gender": "string",
        "blog_links": [
            "https://example.com/"
        ],
        "questions": [
            "string"
        ]
    },{
        withCredentials: true,
        headers : {"Content-Type": 'application/json'}
    })
        .then(res => {
            console.log(res.data);
        })
        .catch(error => {
            console.error("There was an error making the request:", error);
        });
}