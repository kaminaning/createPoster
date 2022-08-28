# createPoster
用于生成canvas图片，如微信分享海报、图片等。

## 安装
```
npm i createPoster -S
```
## 引入

```
import createPoster from "createPoster";
```

## 调用示例

```
createPoster({
      type:"png",
      size: {
        width: 800,
        height: 500,
      },
      // bg: {
      //   src: require("@/assets/images/logo.png"),
      //   pos: [10, 10],
      //   width: 700,
      //   height: 700,
      // },
      fill:"#666",
      eleList: [
        {
          type: "image",
          src: require("@/assets/images/mar.jpg"),
          pos: [10, 10],
          width: 200,
          height: 200,
        },
        {
          type: "image",
          src: require("@/assets/images/mar.jpg"),
          pos: [200, 200],
          width: 20,
          height: 200,
        },
        {
          type: "text",
          txt:"哈哈哈哈",
          pos: [260, 260],
          color:"#000",
          font:"bold 60px arial"
        },
      ],
    }).then(res=>{});
   ```
|  参数   | 描述  |  类型  |
|  ----   | ----  | ----  |
| options  | 参数对象集合 | 参见下方表格 |

|  options对象的各属性   | 描述  |  类型  |
|  ----   | ----  | ----  |
| type  | 生成base64图片的mime，必传 | "png" \| "jpg" |
| size  | 生成base64图片的宽高，单位为px，必传 | { width: number,height: number} |
| bg  | 生成base64图片的背景图，若不想要背景图，如想要透明背景，则不传此项，pos为背景图相对canvas[0,0]坐标的位置。非必传 |{ src: string, pos: Array<number>, width: number, height: number } |
| fill  | 生成base64图片的背景色，和bg互斥，只传一项即可，若想要透明背景，则bg和fill都可不传，非必传 | string |
| eleList  | 元素列表，按数组元素升序排列，排序靠后的元素层级靠前，会遮盖排序靠前的元素，目前只支持图片、文字两种格式的元素，pos为背景图相对canvas[0,0]坐标的位置。非必传 | 图片：{ type: string, pos: Array<number>, src: string, width: number, height: number } 文字：{ type: string,txt: string, color: string, font: string，pos: Array<number>} |
   
