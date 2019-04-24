<template>
  <div>
    <title>Vender</title>
    <div class="container">
      <br>
      <h2 class="text-body-titulo title-font">- Cadastro de veículo -</h2>
      <br>
      <form>
        <div class="form-row">
          <div class="form-group col-md-3">
            <label for="inputMarca" class="form-text">Marca</label>
            <select class="form-control" id="inputMarca">
              <option selected>Marca...</option>
              <option value>...</option>
            </select>
          </div>
          <div class="form-group col-md-3">
            <label for="inputModelo" class="form-text">Modelo</label>
            <select class="form-control" id="inputModelo">
              <option selected>Modelo...</option>
              <option value>...</option>
            </select>
          </div>
          <div class="form-group col-md-3">
            <label for="inputAno" class="form-text">Ano</label>
            <select class="form-control" id="inputAno">
              <option selected>Ano...</option>
              <option value>...</option>
            </select>
          </div>
          <div class="form-group col-md-3">
            <label for="inputPreco" class="form-text">Preço</label>
            <input class="form-control" id="inputPreco" placeholder="Ex: 15.000,00">
          </div>
        </div>
        <div class="form-group">
          <label for="inputRua" class="form-text">Rua</label>
          <input type="text" class="form-control" id="inputRua" placeholder="Ex: Av. Brasil">
        </div>
        <div class="form-row">
          <div class="form-group col-md-4">
            <label for="inputPais" class="form-text">País</label>
            <select id="inputPais" class="form-control">
              <option selected>País...</option>
              <option>...</option>
            </select>
          </div>
          <div class="form-group col-md-2">
            <label for="inputEstado" class="form-text">Estado</label>
            <select class="form-control" id="inputEstado">
              <option selected>Estado...</option>
              <option value>...</option>
            </select>
          </div>
          <div class="form-group col-md-6">
            <label for="inputBairro" class="form-text">Bairro</label>
            <input type="text" class="form-control" id="inputBairro">
          </div>
        </div>
        <button type="submit" class="btn btn-primary">Salvar</button>
      </form>
      <br>
    </div>
  </div>
</template>
