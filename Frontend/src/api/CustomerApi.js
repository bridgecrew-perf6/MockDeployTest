import Api from './Api';

const url = "/customer";
const create = (customerName, email, date, phone, address,note) => {

    const body = {
        customerName: customerName,
        email: email,
        date: date,
        phone: phone,
        address: address,
        note: note
    }

    return Api.post(url, body);
};
// export
const api = {create}
export default api;