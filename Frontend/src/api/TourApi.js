import Api from './Api';

const url = "/tours";

const getAll = () => {
    return Api.get(`${url}`);
}

const getListTours = (page = 1, size = 3, sortField = 'tourId', sortType = 'desc') => {
    const parameters = {
        page,
        size,
        sort: `${sortField},${sortType}`,
    }

    return Api.get(`${url}`, { params: parameters })
}

const getListToursAll = (page = 1, size = 20, sortField = 'tourId', sortType = 'desc') => {
    const parameters = {
        page,
        size,
        sort: `${sortField},${sortType}`,
    }

    return Api.get(`${url}`, { params: parameters })
}

const getById = (tourId) => {
    return Api.get(`${url}/${tourId}`)
}

// create tour
const createTour = (nameTour, timer, departureDay, slotBlank, money, img1, img2, img3, img4, img5, day1, day2) => {
    // const FormData = require('form-data');

    const body = new FormData();
    body.append('nameTour', nameTour);
    body.append('timer', timer);
    body.append('departureDay', departureDay);
    body.append('slotBlank', slotBlank);
    body.append('money', money);
    body.append('img1', img1);
    body.append('img2', img2);
    body.append('img3', img3);
    body.append('img4', img4);
    body.append('img5', img5);
    body.append('day1', day1);
    body.append('day2', day2);


    const config = {
        headers: {
            'content-type': 'multipart/form-data; image/jpg'

        }
    }

    return Api.post(url, body, config);
}

// update
const updateTour = (tourId, nameTour, timer, departureDay, slotBlank, money, img1, img2, img3, img4, img5, day1, day2) => {
    // const FormData = require('form-data');

    const body = new FormData();
    body.append('nameTour', nameTour);
    body.append('timer', timer);
    body.append('departureDay', departureDay);
    body.append('slotBlank', slotBlank);
    body.append('money', money);
    body.append('img1', img1);
    body.append('img2', img2);
    body.append('img3', img3);
    body.append('img4', img4);
    body.append('img5', img5);
    body.append('day1', day1);
    body.append('day2', day2);


    const config = {
        headers: {
            'content-type': 'multipart/form-data; image/jpg'

        }
    }

    return Api.put(`${url}/update/${tourId}`, body, config);
}

// delete one tour
const deleteTour = (tourId) => {
    return Api.delete(`${url}/delete/${tourId}`)
}

const api = { getAll, getListTours, getListToursAll, getById, createTour, updateTour, deleteTour };
export default api;