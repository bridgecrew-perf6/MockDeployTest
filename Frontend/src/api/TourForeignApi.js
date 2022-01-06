import Api from './Api';

const url = "/toursForeign";

const getAll = () => {
    return Api.get(`${url}`);
}

const getListToursForeign = (page = 1, size = 3, sortField = 'tourForeignId', sortType = 'desc') => {
    const parameters = {
        page,
        size,
        sort: `${sortField},${sortType}`,
    }

    return Api.get(`${url}`, { params: parameters })
}

const getListToursForeignAll = (page = 1, size = 6, sortField = 'tourForeignId', sortType = 'desc') => {
    const parameters = {
        page,
        size,
        sort: `${sortField},${sortType}`,
    }

    return Api.get(`${url}`, { params: parameters })
}

const getById = (tourForeignId) => {
    return Api.get(`${url}/${tourForeignId}`)
}


// create tour
const createTourForeign = (nameTour, timer, departureDay, slotBlank, money, img1, img2, img3, img4, img5, day1, day2) => {
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

// delete groups

// delete one group

// {ids.toString()} viết thêm toString để ra nhận được dạng dấu " , "
const api = { getAll, getListToursForeign, getListToursForeignAll, getById, createTourForeign };
export default api;