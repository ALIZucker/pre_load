export class Post {
    constructor(imgAdd,titlePost,desc) {
        this.srcImg=imgAdd;
        this.Title=titlePost;
        this.Desc=desc;
    }
    getSrc(){
        return this.srcImg;
    }
    getTitle(){
        return this.Title;
    }
    getDesc(){
        return this.Desc;
    }
}