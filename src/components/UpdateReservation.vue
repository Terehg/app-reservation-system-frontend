<template>
    <div class="submit-form">
      <div>
        <div>
          <h1>Edit Reservation</h1>
        </div>
        <div class="form-group">
          <label for="">Date </label>
          <input type="date" class="form-control" id="date" required name="date" v-model="reservation.date" />
        </div>
        <div class="form-group">
          <label for="">Name</label>
          <input class="form-control" id="name" required name="name" v-model="reservation.name" />
        </div>
        <div class="form-group">
          <label for="">Service</label>
          <select class="form-control" name="select" v-model="reservation.service.id">
            <option class="form-control" value="1">Restaurant</option>
            <option class="form-control" value="2" selected>Hotel</option>
  
          </select>
        </div>
  
        <button class="btn btn-primary" @click="updateReservation()">Edit</button>
      </div>
  
    </div>
  </template>
<script>
import ReservationService from "../services/ReservationService";

export default {
  name: "update-reservation",
  data() {
    return {
      reservation: {
        id: '',
        date: '',
        name: '',
        service: {
          id: ''
        }
      }
    };
  },
  created() {
    console.log("ENTERING THE METHOD CREATED: ");
    const reservationId = this.$route.params.id;
    console.log("PRINTING RESERVATION_ID: ", reservationId);
    if (reservationId) {
      this.fetchReservation(reservationId);
    }
  },
  methods: {  
    fetchReservation(id) {
      ReservationService.get(id)
        .then(response => {
          console.log("ENTERING TO RESPONSE: ", response);
          this.reservation = response.data.dataGeneric;
          console.log("ENTERING TO RESPONSE RESERVATION: ", this.reservation);
        })
        .catch(e => {
          console.error("ERROR FECTHING RESERVATION:", e);
        });
    },
    updateReservation() {
      ReservationService.update(this.reservation)
        .then(response => {
          console.log("UPDATE RESERVATION:", response.data);
          this.$router.push({ name: 'consult-reservation' });
        })
        .catch(e => {
          console.error("ERROR UPDATING RESERVATION:", e);
        });
    }
  }
};
</script>