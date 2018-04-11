//本地存储
var store={
    save(key,value){//存储
        localStorage.setItem(key,JSON.stringify(value))
    },
    fetch(key){//读取
        return  JSON.parse(localStorage.getItem(key))||[]
    }
}
// var list=[
//     {title:"输入内容",ischeked:false},
//     {title:"输入内容",ischeked:false}
// ]

var list=store.fetch('mus')


var vm=new Vue({
    el:'.main',
    data:{
        lists:list,
        todo:'',
        edtorTodo:'',
        beforeTodo:'',
        visibility:'' //通过这个属性值的变化对数据进行刷选

    },
    watch:{
        lists:{
            handler:function () {//监听存储
                store.save('mus',this.lists)
            },
        deep:true
        }
    },
    methods:{
        //添加信息
        addTodo(ev){
            this.lists.push({
                title:this.todo,
                icheked:false
            })
            this.todo=""
        },
        //删除信息
        deleteTodo(ev){
            var index=this.lists.indexOf(ev);
            this.lists.splice(index,1)
        },
        //双击,编辑信息
        edorTodo(todo){
            this.beforeTodo=todo.title
            this.edtorTodo=todo;
        },
        //完成编辑
        edyorTodoed(todo){
            this.edtorTodo=""
        },
        //撤销编辑
        cancelTodo(todo){
            todo.title=this.beforeTodo
            this.edtorTodo=''
        }
    },
    //自定义属性
    directives:{
        'focus':{
            update(el,binding){
                if(binding.value){
                    el.focus();
                }
            }
        }
    }
})
function watchHashChange() {
    var hash=window.location.hash.slice(1);
    //console.log(hash)
    vm.visibility=hash
}
watchHashChange()
window.addEventListener('hashchange',watchHashChange)