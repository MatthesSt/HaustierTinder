import { Shelter } from "./types";

export function getShelters() {
  const shelters = JSON.parse(localStorage.getItem("shelters") || "[]");
  return shelters;
}

export function addShelter(shelter: Shelter) {
  const shelters = getShelters();
  shelters.push(shelter);
  localStorage.setItem("shelters", JSON.stringify(shelters));
}
