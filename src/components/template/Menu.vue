<template>
    <nav class="navbar navbar-expand-lg navbar-dark">
        <router-link class="navbar-brand title-font" to="/">Car Show</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <router-link class="nav-link" to="/comprar">Comprar</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/vender">Vender</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/noticias">Notícias</router-link>
                </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
                <router-link class="nav-link" to="/entrar">Entrar</router-link>
                <router-link class="nav-link" to="/cadastrar">Cadastrar</router-link>
            </form>
        </div>
    </nav>
</template>

<script>
export default {
    
}
</script>
