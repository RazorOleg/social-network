import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true
});

export const usersAPI = {
    getUsers(currentPage, sizePage) {
        return instance.get(`users?page=${currentPage}&count=${sizePage}`)
            .then(response => {
                return response.data;
            })
    },
    followUser(userId) {
        return instance.post(`follow/${userId}`)
            .then(response => {
                return response.data;

            })
    },
    unFollowUser(userId) {
        return instance.delete(`follow/${userId}`)
            .then(response => {
                return response.data;

            })
    }
}

export const profileAPI = {
    getProfileByUserId(userId) {
        return instance.get(`profile/${userId}`)
            .then(response => {
                return response.data;
            })
    },
    getStatusByUserId(userId) {
        return instance.get(`profile/status/${userId}`)
            .then(response => {
                return response.data;
            })
    },
    updateUserStatus(status) {
        return instance.put(`profile/status`, { status: status })
    },
}

export const authAPI = {
    getAuthData() {
        return instance.get(`auth/me`)
            .then(response => {
                return response.data;
            })
    },

    login(data) {
        return instance.post(`auth/login`, { email: data.email, password: data.password, rememberMe: data.rememberMe });
    },

    logout() {
        return instance.delete(`auth/login`);    
    }
}
