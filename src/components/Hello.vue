<template>
  <div class="hello">

    <!-- JUMBOTRON -->
    <div class="jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-4">

            <!-- CAROUSEL -->
            <div id="helloCarousel" class="carousel slide rounded" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#helloCarousel" data-slide-to="0" class="active"></li>
                <li data-target="#helloCarousel" data-slide-to="1"></li>
                <li data-target="#helloCarousel" data-slide-to="2"></li>
              </ol>
              <div class="carousel-inner" role="listbox">
                <div class="carousel-item active">
                  <img class="d-block img-fluid" src="http://lorempixel.com/400/200" alt="First slide">
                </div>
                <div class="carousel-item">
                  <img class="d-block img-fluid" src="http://lorempixel.com/400/200" alt="Second slide">
                </div>
                <div class="carousel-item">
                  <img class="d-block img-fluid" src="http://lorempixel.com/400/200" alt="Third slide">
                </div>
              </div>
              <a class="carousel-control-prev" href="#helloCarousel" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#helloCarousel" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
            <!-- FIN CAROUSEL -->

          </div>
          <div class="col-8">

            <!-- INTRODUCTION + BOUTTON REJOINDRE -->
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac risus nisi. Nulla pulvinar, augue non ultricies tristique, felis nisi tempor purus, non varius mi quam at libero. Nulla nec augue sodales, congue ex eu, dictum mauris. Fusce fermentum justo ut dolor sodales eleifend. Orci varius 
            </p>
            <p>
              <a class="btn btn-primary btn-lg" href="#" role="button">Learn more »</a>
            </p>
            <!-- FIN INTRODUCTION + BOUTTON REJOINDRE -->

          </div>
        </div>
      </div>
    </div>
    <!-- FIN JUMBOTRON -->

    <!-- PRESENTATION TEAM -->
    <div class="container">
      <div class="row">
        <div class="col-4">
          test
        </div>
        <div class="col-4">
          test
        </div>
      </div>
    </div>
    <!-- FIN PRESENTATION TEAM -->

  </div>
</template>
<script>
  export default {
    name: 'Hello'
  }
</script>

