import { ref, watch } from 'vue';
import { Shelter, Animal } from './types';
import { currentUser, getUsers, updateUser } from './user';

export const currentShelter = ref<Shelter | null>(null);

export function getShelters(): Shelter[] {
  const shelters = JSON.parse(localStorage.getItem('shelters') || '[]');
  return shelters;
}

export function addShelter(shelter: Shelter) {
  const shelterAdmin = getUsers().find(user => user.id == shelter.user_id);
  if (!shelterAdmin) return;
  updateUser({ ...shelterAdmin, role: 'tierheim' });
  const shelters = getShelters();
  shelters.push(shelter);
  localStorage.setItem('shelters', JSON.stringify(shelters));
}

export function getShelter() {
  const shelters = getShelters();
  currentShelter.value = shelters.find(shelter => shelter.user_id == currentUser.value?.id) || null;
}

export function createAnimal(animal: Animal) {
  if (currentShelter.value) {
    currentShelter.value.tiere.push(animal);
  }
}
watch(currentShelter, setCurrentShelter, { deep: true });

function setCurrentShelter() {
  if (!currentShelter.value) return;
  const shelters = getShelters();
  const index = shelters.findIndex(shelter => shelter.id == currentShelter.value?.id);
  shelters[index] = currentShelter.value;
  localStorage.setItem('shelters', JSON.stringify(shelters));
}

export function getUniqueAnimals() {
  return [...new Set(getShelters().reduce((acc: string[], shelter) => [...acc, ...shelter.tiere.map(t => t.art)], []))];
}
