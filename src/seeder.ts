import { getShelters } from './shelter';
import { Shelter, User } from './types';
import { getUsers } from './user';

const nameList = ['Max', 'Moritz', 'Luna', 'Bella', 'Felix', 'Mia', 'Lilly', 'Luna', 'Paul', 'Emma', 'Hugo', 'Milo', 'Maja', 'Mila'];
const users = [] as User[];
const roles = [
  { role: 'user', amount: 3 },
  { role: 'admin', amount: 1 },
  { role: 'tierheim', amount: 2 },
] as const;
export function seed() {
  if (getUsers().length == 0) {
    for (let role of roles) {
      for (let i = 0; i < role.amount; i++)
        users.push({
          id: Math.random().toString(36).substr(2, 9),
          username: nameList[Math.floor(Math.random() * nameList.length)],
          email: role.role + i + '@example.com',
          role: role.role,
          password: role.role,
          preferences: [],
        });
        
    }
    for (let user of users.filter(user => user.role == 'user')) {
        user.preferences.push(Math.random() > 0.5 ? 'Hund': 'Katze');
    }
  
    localStorage.setItem('users', JSON.stringify(users));
  }

  if (getShelters().length == 0) {
    const shelters = [] as Shelter[];
    for (let i = 0; i < 2; i++) {
      shelters.push({
        name: 'Tierheim ' + i,
        standort: 'Standort ' + i,
        id: Math.random().toString(36).substr(2, 9),
        telefonnummer: '0123456789',
        email: 'tierheim' + i + '@example.com',
        homepage: 'https://example.com',
        user_id: users.find(user => user.email == `tierheim${i}@example.com`)?.id || '',
        tiere: [],
      });
    }
    const tierVariation = [
      {
        art: 'Hund',
        rasse: ['Labrador', 'Dackel', 'Schäferhund', 'Mischling'],
        farbe: ['schwarz', 'braun', 'weiß', 'grau'],
        besonderheiten: ['blind', 'taub', 'dreibeinig', 'allergisch'],
      },
      {
        art: 'Katze',
        rasse: ['Bengal', 'Savannah', 'Highlander'],
        farbe: ['schwarz', 'braun', 'weiß', 'grau'],
        besonderheiten: ['blind', 'taub', 'dreibeinig', 'allergisch'],
      },
    ];

    for (let tier of tierVariation) {
      for (let i = 0; i < 10; i++) {
        shelters[Math.floor(Math.random() * 2)].tiere.push({
          name: nameList[Math.floor(Math.random() * nameList.length)],
          id: Math.random().toString(36).substr(2, 9),
          alter: Math.floor(Math.random() * 10),
          art: tier.art,
          rasse: tier.rasse[Math.floor(Math.random() * tier.rasse.length)],
          farbe: tier.farbe[Math.floor(Math.random() * tier.farbe.length)],
          besonderheiten: tier.besonderheiten[Math.floor(Math.random() * tier.besonderheiten.length)],
        });
      }
    }
    localStorage.setItem('shelters', JSON.stringify(shelters));
  }
}
