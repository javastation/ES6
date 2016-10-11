(function(){
    var promise = new Vue({
        el:'#promise',
        data:{

        },
        methods:{
            out:function(){
                const a = 'shan';
                const b =  `mu${a}zi`;
                console.log(b)
            }
        },
        created:function(){
            this.out();
        }
    })
    
})()
