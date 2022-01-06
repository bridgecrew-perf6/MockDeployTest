import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { enableModernTheme } from "../../redux/actions/themeActions";
import DuLichViet from "../Tour/DuLichViet";

const ThemeModern = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(enableModernTheme());
  }, [dispatch])

  return <DuLichViet />
}

export default ThemeModern;
