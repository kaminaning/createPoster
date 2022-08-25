function createPoster({ type, size, bg, fill, eleList, }) {
    return new Promise(function (resolve, reject) {
        let fileType;
        type === "png" ? (fileType = "image/png") : (fileType = "image/jpeg");
        const canvas = document.createElement("canvas");
        canvas.width = size.width;
        canvas.height = size.height;
        const context = canvas.getContext("2d");
        const handleOpts = () => {
            if (eleList) {
                let flag = 0;
                function drawImg(item, i, tmpImg) {
                    let count = i + 1;
                    if (count > flag) {
                        setTimeout(() => {
                            drawImg(item, i, tmpImg);
                        }, 50);
                    }
                    else {
                        context.drawImage(tmpImg, item.pos[0], item.pos[1], item.width, item.height);
                        if (count === flag && flag === eleList.length) {
                            let base64 = canvas.toDataURL(fileType);
                            resolve(base64);
                        }
                    }
                }
                function drawText(item, i) {
                    let count = i + 1;
                    if (count > flag) {
                        setTimeout(() => {
                            drawText(item, i);
                        }, 50);
                    }
                    else {
                        context.fillStyle = item.color;
                        context.font = item.font;
                        context.fillText(item.txt, item.pos[0], item.pos[1]);
                        if (count === flag && flag === eleList.length) {
                            let base64 = canvas.toDataURL(fileType);
                            resolve(base64);
                        }
                    }
                }
                eleList.forEach((item, i) => {
                    if (item.type === "image") {
                        let tmpImg = new Image();
                        tmpImg.src = item.src;
                        tmpImg.crossOrigin = "Anonymous";
                        tmpImg.onload = function () {
                            if (this.complete) {
                                flag++;
                                drawImg(item, i, tmpImg);
                            }
                        };
                        tmpImg.onerror = function () {
                            reject("图片生成错误");
                        };
                    }
                    else {
                        flag++;
                        drawText(item, i);
                    }
                });
            }
            else {
                let base64 = canvas.toDataURL(fileType);
                resolve(base64);
            }
        };
        if (bg) {
            const myImage = new Image();
            myImage.src = bg.src;
            myImage.crossOrigin = "Anonymous";
            myImage.onload = function () {
                context.drawImage(myImage, bg.pos[0], bg.pos[1], bg.width, bg.height);
                handleOpts();
            };
        }
        else {
            if (fill) {
                context.fillStyle = fill;
                context.fillRect(0, 0, size.width, size.height);
                handleOpts();
            }
            else {
                context.fillStyle = "rgba(255, 255, 255, 0)";
                handleOpts();
            }
        }
    });
}
export default createPoster;
//# sourceMappingURL=index.js.map