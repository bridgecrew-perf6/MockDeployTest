import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { enableCorporateTheme } from "../../redux/actions/themeActions";
import DuLichViet from "../Tour/DuLichViet";

const ThemeCorporate = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(enableCorporateTheme());
  }, [dispatch])

  return <DuLichViet />
}

export default ThemeCorporate;
