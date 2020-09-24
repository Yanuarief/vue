<template>
    <div class="main-wrapper" id="app">
        <div class="page-wrapper">
            <router-view name="login"></router-view>
            <router-view name="header"></router-view>
            <router-view name="nav"></router-view>
            <div class="page-content">
                <router-view></router-view>
            </div>
            <router-view name="footer"></router-view>
        </div>
    </div>    
</template>