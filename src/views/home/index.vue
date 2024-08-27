<script lang="ts" setup>
import NavBar from "../../components/NavBar.vue";
import adventure from "../../assets/adventure.svg";
import discount from "../../assets/discount.svg";
import solution from "../../assets/solution.svg";
import sertificate from "../../assets/sertificate.svg";
import contact from "../../assets/contact.svg";
import Footer from "../../components/Footer.vue";
</script>

<template>
  <v-app>
    <NavBar />
    <!-- Header  -->
    <section class="m-5 p-5 text-center text-sm-start">
      <div class="container">
        <div class="d-flex align-items-center">
          <div>
            <h1>
              <span class="text-success">Kebersihan</span> Membuat
              <span class="text-success">Perbedaan</span>
            </h1>
            <p class="lead">
              Pilih <span class="text-danger fw-bold">Kualitas</span>, Pilih
              <span class="text-danger fw-bold">Enigma Laundry</span>
            </p>
            <button class="btn btn-primary btn-lg">Buka Dashboard</button>
          </div>
          <img
            class="img-fluid w-50 d-none d-sm-block"
            :src="adventure"
            alt="Adventure"
          />
        </div>
      </div>
    </section>

    <!--  Services  -->
    <h2 class="text-center text-bold">Layanan Kami</h2>
    <section class="container pt-4" id="services">
      <div class="row text-center p-2">
        <div class="col-lg-4 col-md-6 col-sm-12 mx-auto g-2 bg-light text-dark">
          <div class="card">
            <img :src="discount" class="card-img-top" alt="Navigating" />
            <div class="card-body">
              <h5 class="card-title">harga terjangkau</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12 mx-auto g-2">
          <div class="card">
            <img :src="solution" class="card-img-top" alt="Moments" />
            <div class="card-body">
              <h5 class="card-title">Fasilitas Terbaik</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12 mx-auto g-2 bg-light text-dark">
          <div class="card">
            <img :src="sertificate" class="card-img-top" alt="Pesawat" />
            <div class="card-body">
              <h5 class="card-title">Tersertivikasi</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Promo -->
    <section class="bg-primary text-light p-5" id="promo">
      <div class="cotainer">
        <div class="d-md-flex justify-content-between align-items-center">
          <h3>Dapatkan Promo Menarik</h3>

          <div class="input-group mt-3 mt-md-0">
            <input
              value="{inputPromo}"
              type="text"
              class="form-control"
              placeholder="masukkan kode voucher"
            />
            <button class="btn btn-dark btn-lg" type="submit">submit</button>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Us  -->
    <section class="p-5" id="contact">
      <div class="container">
        <div class="row g-4 align-items-center">
          <div class="col-md">
            <h2 class="text-center mb-4">Contact Us</h2>
            <ul class="list-group-flush lead">
              <li class="list-group-item pb-1">
                <i class="bi bi-geo-alt"></i>
                <span class="fw-bold">Location:</span>
                Jalan Sutomo, 11
              </li>

              <li class="list-group-item pb-1">
                <i class="bi bi-telephone"></i>
                <span class="fw-bold">Mobile Phone:</span>
                (+62) 821-1234-5678
              </li>
              <li class="list-group-item">
                <i class="bi bi-instagram"></i>
                <span class="fw-bold">Instagram:</span>
                @enigmacamp
              </li>
              <li class="list-group-item">
                <i class="bi bi-envelope"></i>
                <span class="fw-bold">Email:</span>
                enigmacamp@gmail.com
              </li>
            </ul>
          </div>
          <div class="col-md">
            <img
              class="img-fluid d-none d-md-block"
              :src="contact"
              alt="contact"
            />
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </v-app>
</template>

<style>
#services img {
  height: 150px;
}
</style>
