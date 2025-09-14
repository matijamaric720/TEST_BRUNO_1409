"use client";
import React, { useState } from "react";
import DatePicker from "react-multi-date-picker";

export default function DatePickerComponent() {
  const [value, setValue] = useState(new Date());

  return <DatePicker format="MMMM DD YYYY" value={value} onChange={setValue} editable={false} />;
}
