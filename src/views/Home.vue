<template>
  <div>
    <section v-if="loading" style="text-align: center; font-size: 2rem;">
      <span><b-spinner variant="primary" label="Large Spinner"></b-spinner>
      <p>Cargando ...</p>
      </span>
    </section>
    <div class="home" v-if="loading ? false : true">
      <header>
        <figure>
          <a href="#principal">
            <img class="logo" src="https://dewey.tailorbrands.com/production/brand_version_mockup_image/433/3227417433_ee01f21e-70db-4f1f-90e8-5148712002a4.png?cb=1593370194" alt="Logo">
          </a>
        </figure>
        <nav class="menu">
          <ul>
            <li><!-- li = list items -->
              <a href="#portafolio">Portafolio</a>
            </li>
            <li>
              <a href="#experiencia">Experiencia</a>
            </li>
            <li>
              <a href="#unidos_trabajando">Trabajemos juntos</a>
            </li>
          </ul>
        </nav>
      </header>
      <section id="principal" class="hero">
        <h1 style="background-color: #222831;">
          ¡Hola! soy <strong>{{ portfolio[0].nombre }}</strong>
          desarrollador <br> <strong>{{ portfolio[0].trabajo }}</strong>
          con gustos por <br> el performance de facebook
        </h1>
      </section>
      <section id="portafolio" class="portfolio">
        <div style="height: 55px;"></div>
        <h2>Portafolio con solo proyectos destacados</h2>
        <article v-for="proj in projects" :key="proj[0]" class="project">
          <div class="project-details">
            <h3 class="project-title">{{ proj.title }}</h3>
            <p class="project-date"><small><strong>Fecha: </strong>{{ proj.Fecha }}</small></p>
            <p class="project-link"><small><strong>Puedes verlo en: </strong>
            <a :href="proj.Link" target="_blank">{{ proj.Link }}</a></small></p>
            <p><small><strong>Descripción: </strong>{{ proj.description }}</small></p>
          </div>
          <figure class="project-imageContainer">
            <img class="project-image" :src="proj.img ? proj.img : imgDefault"
            :alt="proj.title" style="width: 66vh;">
          </figure>
        </article>
      </section>
      <div id="experiencia">
        <div style="height: 86px; background-color: #32E0C4;"></div>
        <h2>Más sobre mi experiencia</h2>
        <section class="experience">
          <article v-for="experience in experiences" :key="experience[0]" class="event">
            <figure class="event-imageContainer">
              <img :src="experience.img" alt="Descripción del evento"
              width="500" class="event-image">
            </figure>
            <div class="event-detail">
              <h3 class="event-title" style="font-weight: bold;">{{ experience.title }}</h3>
              <p>{{ experience.description }}</p>
              <b-button variant="outline-light" block>Ver más</b-button>
            </div>
          </article>
        </section>
      </div>
      <section id="unidos_trabajando" class="working">
        <form action="/subscription/" class="form-email">
          <h3 class="questionReal">¿Creamos algo juntos?</h3>
          <b-input-group prepend="@" style="width: 50vh; margin: 7px;" type="email"
          placeholder="Déjame tu email" id="email">
            <b-form-input></b-form-input>
          </b-input-group>
          <b-button type="submit" variant="info" style="width: 50vh; margin: 7px;">
          ENVIAR <span>
            <b-icon icon="caret-right" variant="light"></b-icon>
          </span></b-button>
        </form>
        <div class="social">
          <a href="https://www.facebook.com/Dereksamuelgr/" class="social-link facebook"></a>
          <a href="https://github.com/dereksamuel" class="social-link github"></a>
        </div>
      </section>
      <footer>
        <div>
          <p>Creado por Derek Paúl en el 2020
            <img class="logo" src="https://dewey.tailorbrands.com/production/brand_version_mockup_image/433/3227417433_ee01f21e-70db-4f1f-90e8-5148712002a4.png?cb=1593370194" alt="logo">
          </p>
        </div>
        <div>
          <p>PORTAFOLIO</p>
        </div>
      </footer>
  </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      portfolio: [],
      loading: false,
      loadingStatus: true,
    };
  },
  created() {
    this.GetPortfolio();
  },
  computed: {
    projects() {
      return this.portfolio[0].proyectos;
    },
    experiences() {
      return this.portfolio[0].experiencia;
    },
  },
  methods: {
    GetPortfolio() {
      this.loading = true;
      this.axios.get('home')// api/home
        .then((response) => {
          const { data } = response;
          this.portfolio = data;
          this.loading = false;
        })
        .catch((err) => console.error(err));
    },
  },
};
</script>

<style lang="scss" scoped>
  $whiteSemigray: #eeeeee;
  $radiantBlue: #32e0c4;
  $grayC: #393e46;
  $grayCD: #222831c7;
  $grayD: #222831;
  $contactColor: #0082c1;

  $urlImageForHero: 'https://scontent.fbog3-1.fna.fbcdn.net/v/t1.0-9/69503604_1203598443170640_7816634844275802112_n.jpg?_nc_cat=108&_nc_sid=09cbfe&_nc_ohc=POLAYxWaX94AX86rMqp&_nc_ht=scontent.fbog3-1.fna&oh=f99f861c343e62cf37c178f6b7df4e64&oe=5F1D4FEC';

  body {
    margin: 0;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  figure img {
    width: 500px;
  }

  .logo {
    width: 50px;
    margin: 9px;
    border-radius: 80px;
    border: 1px solid white;
    background-color: white;
  }

  /* text edition */
  .hero, h2, .questionReal {
    font-family: 'Concert One', cursive;
    line-height: 3rem;
    font-size: 38px;
  }
  .questionReal {
    align-self: flex-start;
  }
  h1 {
    // margin-right: 400px;
    padding: 19px;
    font-size: 2.7rem;
  }
  h2, h3 {
    font-weight: normal;
    padding: 16px;
  }
  .hero {
    display: flex;
    align-items: center;
    font-style: italic;
    height: 400px;
    background-image: url($urlImageForHero);
    background-size: 600px;
    background-repeat: no-repeat;
    background-position-y: -170px;
    background-position-x: right;
    color: $whiteSemigray;
    background-color: $grayC;
    /* text-transform: capitalize; */
    /* text-decoration:transparent; */
  }
  .hero strong {
    color: $radiantBlue;
  }
  h2 {
    color: $grayD;
    text-transform: uppercase;
    margin-bottom: 25px;
    text-align: center;
    background-color: #32E0C4;
    margin: 0;
  }

  /* Dimensions static */
  .portfolio, .experience {
    background-color: $radiantBlue;
    padding: 25px;
  }
  .project {
    display: flex;
    box-shadow: 2px 2px 4px 2px rgba(0,2,1,0.25);
    background-color: #9ca3adb3;
    margin-bottom: 15px;
    padding: 25px;
    width: 77%;
    margin: 45px auto 45px;
    justify-content: space-around;
    // margin-right: 0%;
    // margin-left: ;
    // border-top: 10px groove $grayD;
    // border-right: 10px groove $grayC;
    // border-left: 10px groove $grayC;
    // border-bottom: 10px groove $grayD;
    // border-color: $radiantBlue;
    // border-width: 15px;
    // border-style: solid;
    border-top-left-radius: 50px;
  }
  .project-title {
    font-size: 30px;
    font-weight: 550;
    margin-bottom: 10px;
  }
  .project-date, .project-link {
    margin: 10px 0;
  }
  .project-details {
    width: 500px;
  }
  .project-imageContainer {
    width: 500px;
  }

  .event {
    padding: 25px;
    border-radius: 50px;
    margin: 20px;
    box-shadow: 2px 2px 100px 2px rgba(0,2,1,0.25);
    overflow: hidden;
    background: $grayCD;
  }

  .event img {
    width: 400px;
    height: 258px;
    object-fit: cover;
    border-radius: 20px;
    max-width: 100%;
  }

  .event-detail {
    margin: 2px 10px;
    background-color: #222831;
    color: white;
    margin-top: -87px;
    position: relative;
    padding: 20px;
    text-align: center;
  }

  .experience {
    display: flex;
  }

  /* For Menu */
  header {
    background-color: $grayCD;
    color: #eeeeee;
    height: 70px;
    display: flex;
    justify-content: space-between;
    position: fixed;
    width: 100%;
  }

  .menu {
    height: inherit;
  }

  header ul, header ul li {
    display: flex;
    height: inherit;
  }

  header a {
    color: $whiteSemigray;
    text-decoration: none;
    height: inherit;
    display: flex;
    align-items: center;
    padding: 0 10px;
  }

  .titleForlogo {
    display: flex;
    align-self: flex-start;
  }

  // // Examples
  // .flexbox {
  //   display: flex;
  //   flex-wrap: wrap;
  // }

  // .box {
  //   width: 50px;
  //   margin: 8px;
  //   height: 50px;
  //   border: 1px solid red;
  //   flex-shrink: 0;
  // }

  // for contact
  .for-email {
    margin-top: 37px;
  }
  .working {
    background-color: $contactColor;
    color: $whiteSemigray;
    height: 215px;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  .social {
    background-color: $contactColor;
    padding-left: 45px;
  }

  .social-link {
    display: inline-block;
    width: 50px;
    height: 50px;
    background-repeat: no-repeat;
    background-size: 45px 45px;
    margin-right: 16px;
  }

  .social-link.facebook {
    background-image: url('https://iconsplace.com/wp-content/uploads/_icons/ffffff/256/png/facebook-icon-18-256.png');
  }

  .social-link.github {
    background-image: url('https://iconsplace.com/wp-content/uploads/_icons/ffffff/256/png/github-icon-18-256.png');
  }

  footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100px;
    margin: 0;
    background-color: $grayD;
    color: $whiteSemigray;
  }
  footer div {
    margin: 0 16px;
  }
  footer div img {
    vertical-align: middle;
  }
</style>
