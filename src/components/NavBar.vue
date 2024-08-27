<script setup lang="ts">
import logo from "../assets/logo.svg";
import { ref } from "vue";

const isAuth = ref(true);
</script>

<template>
  <v-app-bar app color="dark" dark prominent class="py-3">
    <v-container>
      <v-row align="center" no-gutters >
        <v-col cols="auto">
          <img
            :src="logo"
            width="50"
            height="40"
            alt="Enigma Laundry Logo"
            class="d-inline-block align-top me-2"
          />
          <v-toolbar-title class="text-light">Enigma Laundry</v-toolbar-title>
        </v-col>
        <v-col cols="auto" class="ml-auto">
          <v-spacer></v-spacer>
          <v-btn href="#services">Services</v-btn>
          <v-btn href="#promo">Promo</v-btn>
          <v-btn href="#contact">Contact Us</v-btn>
          <v-btn v-if="isAuth" color="primary" variant="elevated">Logout</v-btn>
          <v-btn v-else color="primary" variant="text">Login</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>
