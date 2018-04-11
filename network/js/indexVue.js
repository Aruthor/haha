
var vm=new Vue({
        el:'#Featured-Wrap',
        data:{
            list:[
                {src:'images/main_img1.jpg',title:"你的书写工具需要一个庇护所",number:68+"人"+2255+"收藏",writer:'By Moollly'},
                {src:'images/main_img2.jpg',title:"你好，男孩"},
                {src:'images/main_img3.jpg',title:"你好，女孩",number:68+"人"+2255+"收藏",writer:'By Moollly'},
                {src:'images/main_img4.jpg',title:"你好，男孩",number:68+"人"+2255+"收藏",writer:'By Moollly'},
                {src:'images/main_img5.jpg',title:"你好，男孩"}
            ]

        }
    })
var vm1=new Vue({
    el: '#SingleProduct',
    data: {
        list1:[{
            all:"全部",
            list2: [
                {src: 'images/main_img6.jpg',commodity:'夹克',online:1791+"人游览",shop:'良品购'},
                {src: 'images/main_img7.jpg',commodity:'夹克',online:1815+"人游览",shop:'良品购'},
                {src: 'images/main_img8.jpg',commodity:'连衣裙',online:1821+"人游览",shop:'良品购'},
                {src: 'images/main_img9.jpg',commodity:'裤子',online:18541+"人游览",shop:'良品购'},
                {src: 'images/main_img10.jpg',commodity:'手换',online:121191+"人游览",shop:'良品购'}
                ]
            },
            {
                all:"上衣"

            },
            {
                all:"裤子"

            },
            {
                all:"牛仔"

            },
            {
                all:"连衣裙"
            }
        ]
}
})

var vm3=new Vue({
    el: '#Talentselection',
    data: {
        list:[
            {url:"images/user_img1.jpg",src:'images/head_img1.jpg'},
            {url:"images/user_img2.jpg",src:'images/head_img2.jpg'},
            {url:"images/user_img3.jpg",src:'images/head_img3.jpg'},
            {url:"images/user_img4.jpg",src:'images/head_img4.jpg'},
            {url:"images/user_img5.jpg",src:'images/head_img5.jpg'}
        ]
    }
})