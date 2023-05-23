import React from "react";

export const handleFormChange = (
  target: HTMLInputElement | HTMLSelectElement,
  setFormData: React.Dispatch<React.SetStateAction<any>>
) => {
  const { name, value } = target as HTMLInputElement | HTMLSelectElement;
  setFormData((prevFormData: any) => ({
    ...prevFormData,
    [name]: value,
  }));
};

  