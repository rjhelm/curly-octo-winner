import http from "../http"

class FishService {
    getAll() {
        return http.get("/fish");
    }

    get(id) {
        return http.get(`/fish/${id}`);
    }

    create(data) {
        return http.post("/fish", data);
    }

    delete(id) {
        return http.delete(`/fish/${id}`);
    }
}

export default new FishService();