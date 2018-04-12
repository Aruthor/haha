//存储localStrotage中的数据  本地储存有两种方法
var store={
    save(key,value){
        localStorage.setItem(key,JSON.stringify(value)) //设置数据  JSON格式的字符串(value)转化为JSON
    },
    fetch(key){
        return JSON.parse(localStorage.getItem(key))|| []//获取数据 有数据就获取没有就返回一个空数组
    }
}
//取出所有的值
var list=store.fetch('multitask')

// var list= [
//     {
//         title:"我的四十米大刀",
//         ischecked:false
//     }
// ]


var vm=new Vue({
    el:'.main',
    data:{
        lists:list,
        todo:''   ,  //输入框的
        edtorTodo:'',//记录的是正在编辑的数据
        beforeTodo:'',//记录之前的内容
        visibility:'' //通过这个属性值的变化对数据进行刷选
    },
    watch:{
        // lists:function () { //监控lists这个属性,当这个属性对应的值发生变化的时候会执行函数
        //     store.save('multitask',this.lists)
        // }
        lists:{//简写
            handler:function () { //handler表深度监控
                store.save('multitask',this.lists)
            },
            deep:true  //深度
        }
    },
    methods:{
        addTodo(ev){//添加任务
            this.lists.push({
                title:this.todo,
                ischecked:false
            })
            this.todo=''   //输入框内容清空
        },
        deleteTodo(ev){//删除任务  先找到再删除
            var index=this.lists.indexOf(ev)
            this.lists.splice(index,1)
        },
        edorTodo(todo){////编辑任务  如果要编辑任务 肯定得输入框出现  必须在li 元素身上加上class值为: editing
            this.beforeTodo=todo.title
            this.edtorTodo=todo
        },
        edtorTodoed(todo){//编辑任务成功  让div现实出来 input隐藏
            this.edtorTodo=""
        },
        cancelTodo(todo){ //取消修改   返回上一个值 同时让div现实出来 input隐藏
            todo.title=this.beforeTodo
            this.edtorTodo=''
        }
    },
    directives:{//定义自定义指令
        'focus':{
            update(el,binding){ //el当前操作元素,binding对象属性     vue update 生命周期的钩子函数的一种
                //console.log(el,binding)
                if(binding.value){
                    el.focus();
                }
            }
        }
    },
    computed:{//computed就是实时计算使用。Vue检测到数据发生变动时就会执行对相应数据有引用的函数
        nocheckelength:function() { //没有没被勾选数据的长度
            return this.lists.filter(function (item) {
                return !item.ischecked
            }).length
        },
        filterList:function () {
            var filter={
                all:function (list) {
                    return list;
                },
                finshed:function (list) {
                    return list.filter(function (item) {
                        return item.ischecked;
                    });
                },
                unfinshed:function (list) {
                    return list.filter(function (item) {
                        return !item.ischecked;
                    })
                }
            }
            return filter[this.visibility]?filter[this.visibility](list):list        }
    }
})

function watchHashChange() {
    var hash=window.location.hash.slice(1);
    //console.log(hash)
    vm.visibility=hash
}
watchHashChange()
window.addEventListener('hashchange',watchHashChange)