import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { enableClassicTheme } from "../../redux/actions/themeActions";
import DuLichViet from "../Tour/DuLichViet";

const ThemeClassic = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(enableClassicTheme());
  }, [dispatch])

  return <DuLichViet />
}

export default ThemeClassic;
