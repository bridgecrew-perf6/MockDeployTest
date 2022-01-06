import React from "react";
import { getListTourAction } from "../../redux/actions/TourAction";
// import { selectTours } from "../redux/Selectors/TourSelectors";
import { connect } from "react-redux";
import { selectTours } from "../../redux/Selectors/TourSelectors";
import FormTour from "../../components/FormTour";
import FormTourForeign from "../../components/FormTourForeign";


const DuLichViet = () => {

    return (
        <>
            <FormTour />
            <FormTourForeign />
        </>
    )

}

const mapGlobalStateToProps = state => {
    return {
        tours: selectTours(state)
    }
};


export default connect(mapGlobalStateToProps, { getListTourAction })(DuLichViet);

