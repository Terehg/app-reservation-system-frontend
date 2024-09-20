<template>
  <div class="submit-form">
    <div>
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
        <select class="form-control" name="select" v-model="reservation.service">
          <option class="form-control" value="1">Restaurant</option>
          <option class="form-control" value="2" selected>Hotel</option>

        </select>
      </div>

      <button class="btn btn-success" @click="createReservation">Create Reservation</button>
    </div>

  </div>
</template>
<script>
import ReservationService from "../services/ReservationService";

export default {
  name: "create-reservation",
  data() {
    return {
      reservation: {
        date: '',
        name: '',
        service: ''
      },
      submitted: false,
      successMessage: 'SUCCESSFUL REGISTRATION'
    };
  },
  methods: {
    createReservation() {
      const data = {
        reservation: {
          date: this.reservation.date,
          name:  this.reservation.name,
          service: {
            id: this.reservation.service
          }
        }
      };

      ReservationService.create(data)
        .then(response => {
          console.log("IMPRIMIENDO DATA => ", data);
          console.log("IMPRIMIENDO RESPONSE => ", response);
          console.log("IMPRIMIENDO RESPONSE DATA => ", response.data);
          this.submitted = true;
          this.resetForm();
        })
        .catch(e => {
          console.log(e);
        });
    },
    resetForm() {
      this.reservation = {
        date: '',
        name: '',
        service: ''
      };
    }
  }
};


</script>
<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>