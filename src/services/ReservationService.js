import http from "../http-common";

class ReservationService {

  getAll() {
    return http.get("/get-reservation-all");
  }
  
  get(id) {
    const url = `/get-reservation/${id}`;
    console.log("ENTERING AT SERVICE TO BRING ID => ", id);
    console.log("ENDPOINT URL => ", url); // Se imprime la URL del endpoint
    const response = http.get(url);
    console.log("THEN => ", id);
    return response;
  }

  create(data) {
    console.log("ENTERING AT SERVICE  CREATE => " , data);
    return http.post("/create-reservation", data);
  }

  update(data) {
    console.log("ENTERING AT SERVICE UPDATE => ", data);
    return http.put(`/update-reservation`, data);
  }

  delete(id) {
    console.log("ENTERING AT SERVICE DELETE => " , id);
    return http.request({
      url: `/delete-reservation`,
      method: 'delete',
      data: { id: id }
    });
  }
}

export default new ReservationService();