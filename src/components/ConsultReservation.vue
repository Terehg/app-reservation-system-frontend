<template>
  <div>
    <h2>Consult Reservations</h2>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>ID</th>
          <th>Date</th>
          <th>Name</th>
          <th>Service</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="reservation in reservations" :key="reservation?.id">
          <td>{{ reservation?.id || 'No ID' }}</td>
          <td>{{ reservation?.date || 'No Date' }}</td>
          <td>{{ reservation?.name || 'No Name' }}</td>
          <td>{{ reservation?.service?.name || 'No service' }}</td>
          <td>
            <!--<router-link :to="{ name: 'update-reservation', params: { id: reservation.id } }" class="btn btn-primary">Edit</router-link>-->
            <button class="btn btn-primary" @click="editReservation(reservation?.id)">Edit</button>
            <button class="btn btn-danger" @click="deleteReservation(reservation?.id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import ReservationService from "../services/ReservationService";

export default {
  name: "consult-reservation",
  data() {
    return {
      reservations: [

      ],
      headers: [
        { text: 'Date', value: 'date' },
        { text: 'Customer', value: 'customer' },
        { text: 'Service', value: 'service' },
        { text: 'Actions', value: 'actions', sortable: false }
      ]
    };
  },
  methods: {
    ConsultAllReservations() {
      ReservationService.getAll()
        .then(response => {
          console.log("Response Data:", response.data);
          this.reservations = response.data.listData;
          console.log("Response this.reservations:", this.reservations);
        })
        .catch(e => {
          console.error("ERROR SEARCHING RESERVATIONS:", e);
        });
    },

    editReservation(id) {
      console.log("ENTERING TO RESPONSE EDITRESERVATION: ");
      //console.log("IMPRIMIENDO EL OBJETO RESERVATION: ", reservation);
      console.log("PRINTING ID RESERVATION: ", id);
      if (id) {
        this.$router.push({ name: 'update-reservation', params: { id: id } });
      } else {
        console.error("RESERVATION IS UNDEFINED OR MISSING ID");
      }
    },

    deleteReservation(id) {
      ReservationService.delete(id)
        .then(() => {
          console.log("DELETED RESERVATION WITH ID:", id);
          this.ConsultAllReservations(); // Se refresca la lista
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.ConsultAllReservations();
  }
};
</script>

<style>
.table {
  margin-top: 20px;
}
</style>