<template>
    <div class="aside">
        <el-menu  default-active="/" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
            background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" :collapse="isCollapse" >
           <h3>{{isCollapse ? '后台' :'通用后台管理系统'}}</h3>
            <el-menu-item @click="clickMenu(item)" v-for="item in noChildren" :index="item.path" :key="item.path">
                <i :class='"el-icon-"+item.icon'></i>
                <span slot="title">{{item.label}}</span>
            </el-menu-item>
            <el-submenu v-for="item in hasChildren" :index="item.path" :key="item.path">
                <template slot="title">
                    <i :class='"el-icon-"+item.icon'></i>
                    <span>{{item.label}}</span>
                </template>
                <el-menu-item-group v-for="(subItem,subIndex) in item.children" :key="subItem.path">
                    <el-menu-item :index="subIndex">{{subItem.label}}</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
        </el-menu>
    </div>
</template>

<script>
export default {
    name: 'CommonAside',
    data() {
        return {
            menu: [{
                path: '/',
                name: 'home',
                label: '首页',
                icon: 's-home',
                url: 'Home/Home'
            },
            {
                path: '/mall',
                name: 'mall',
                label: '商品管理',
                icon: 'video-play',
                url: 'MallManage/MallManage'
            },
            {
                path: '/user',
                name: 'user',
                label: '用户管理',
                icon: 'user',
                url: 'UserManage/UserManage'
            },
            {
                label: '其他',
                icon: 'location',
                children: [
                    {
                        path: '/page1',
                        name: 'page1',
                        label: '页面1',
                        icon: 'setting',
                        url: 'Other/PageOne'
                    },
                    {
                        path: '/page2',
                        name: 'page2',
                        label: '页面2',
                        icon: 'setting',
                        url: 'Other/PageTwo'
                    },
                ]
            },
            ]


        };
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
        clickMenu(item){
            this.$router.push({
                name:item.name
            })
        }
    },
    computed:{
        // 没有子项目
        noChildren(){
           return  this.menu.filter(item=>!item.children)
        },
        // 有子项目
        hasChildren(){
           return  this.menu.filter(item=>item.children)
        },
        isCollapse(){
            return this.$store.state.tab.isCollapse
        }
    }
}
</script>
  
<style lang="less" scoped>
.aside{
    height: 100%;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
    height: 100%;
}
.el-menu{
    height: 100%;
    border: none;
    text-align: left;
    h3{
       color: white;
       text-align: center;
       line-height: 48px;
    }

}
</style>
  
