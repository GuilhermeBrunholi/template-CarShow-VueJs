<template>
  <div>
    <title>Cadastro</title>
    <div class="container box-center">
      <h2 class="text-body-titulo title-font">Entrar</h2>
      <div class="d-flex justify-content-center">
        <div class="col-md-5">
          <div class="form-group">
            <label for="inputNome" class="form-text">Nome Completo</label>
            <input type="text" class="form-control" id="inputNome" placeholder="Digite seu nome completo">
          </div>
          <div class="form-group">
            <label for="inputEmail" class="form-text">E-mail</label>
            <input type="email" class="form-control" id="inputEmail" placeholder="Ex: email@email.com">
          </div>
          <div class="form-group">
            <label for="inputSenha" class="form-text">Senha</label>
            <input type="password" class="form-control" id="inputSenha">
          </div>
          <div class="form-group">
            <label for="inputConfirma" class="form-text">Confirmar senha</label>
            <input type="password" class="form-control" id="inputConfirma">
          </div>
          <div class="d-flex">
            <div class="ml-auto p-2">
              <button class="btn btn-primary" type="submit">Salvar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
