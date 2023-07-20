<template>

    <div class="container-fluid">

        <div class="row" id="barraprincipal">
            <div class="col" style="border: solid;">
                <div class="row">
                    <button>Menu</button>
                </div>
            </div>
            <div class="col" style="border: solid;">
            </div>
            <div class="col" style="border: solid;"></div>
        </div>

        <div class="row">
            <div class="col"></div>
            <div class="col mt-5">
                <div class="div">
                    <router-link to="">
                        <div class="card ">
                    <div class="card-body">
                        <h6 class="card-title">Registrar Usuarior</h6>
                    </div>
                </div>
                    </router-link>


            </div>
            </div>
            <div class="col"></div>
        </div>

        <router-view></router-view>

    </div>
</template>

<style>
#barraprincipal{
    background-color: blue;
}
</style>