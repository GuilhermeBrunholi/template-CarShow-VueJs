<template>
  <div>
    <title>Comprar</title>
    <div class="container">
      <br>
      <h2 class="text-body-titulo title-font">- Pesquisar -</h2>
      <form class="form-group">
        <div class="form-row">
          <div class="col">
            <p class="form-text">Montadora</p>
            <select id="inputMontadora" class="form-control">
              <option selected>Montadora...</option>
              <option>...</option>
            </select>
          </div>
          <div class="col">
            <p class="form-text">Modelo</p>
            <select id="inputModelo" class="form-control">
              <option selected>Modelo...</option>
              <option>...</option>
            </select>
          </div>
          <div class="col">
            <p class="form-text">De</p>
            <select id="inputDe" class="form-control">
              <option selected>De...</option>
              <option>...</option>
            </select>
          </div>
          <div class="col">
            <p class="form-text">Até</p>
            <select id="inputAte" class="form-control">
              <option selected>Até...</option>
              <option>...</option>
            </select>
          </div>
        </div>
        <div class="form-row">
          <div class="col">
            <p class="form-text">Cidade</p>
            <select id="inputCidade" class="form-control">
              <option selected>Cidade...</option>
              <option>...</option>
            </select>
          </div>
          <div class="col">
            <p class="form-text">Estado</p>
            <select id="inputEstado" class="form-control">
              <option selected>Estado...</option>
              <option>...</option>
            </select>
          </div>
          <div class="col">
            <p class="form-text">País</p>
            <select id="inputPais" class="form-control">
              <option selected>País...</option>
              <option>...</option>
            </select>
          </div>
        </div>
        <br>
        <div class="d-flex">
          <div class="ml-auto p-2">
            <button class="btn btn-primary" type="submit">Procurar</button>
          </div>
        </div>
      </form>
      <br>
      <h2 class="text-body-titulo title-font">- Resultado -</h2>
      <br>

      <div class="row">
        <div class="col-md-4">
          <div class="card card-index">
            <img
              class="card-img-top"
              src="https://dmi3w0goirzgw.cloudfront.net/gallery-images/840x560/404000/400/404420.jpg"
              alt="Card image cap"
            >
            <div class="card-body">
              <h3 class="title-font">Titulo</h3>
              <p class="card-text">
                Some quick example text to build on the card title and make up the bulk of
                the
                card's content.
              </p>
              <a href="#">View >></a>
            </div>
          </div>
          <br>
        </div>
        <div class="col-md-4">
          <div class="card card-index">
            <img
              class="card-img-top"
              src="https://www.samaa.tv/wp-content/uploads/2019/01/Aqua-640x398.jpg"
              alt="Card image cap"
            >
            <div class="card-body">
              <h3 class="title-font">Titulo</h3>
              <p class="card-text">
                Some quick example text to build on the card title and make up the bulk of
                the
                card's content.
              </p>
              <a href="#">View >></a>
            </div>
          </div>
          <br>
        </div>
        <div class="col-md-4">
          <div class="card card-index">
            <img
              class="card-img-top"
              src="https://www.autoguide.com/blog/wp-content/uploads//2014/11/2015-CarOfTheYear.jpg"
              alt="Card image cap"
            >
            <div class="card-body">
              <h3 class="title-font">Titulo</h3>
              <p class="card-text">
                Some quick example text to build on the card title and make up the bulk of
                the
                card's content.
              </p>
              <a href="#">View >></a>
            </div>
          </div>
          <br>
        </div>
      </div>
    </div>
  </div>
</template>
