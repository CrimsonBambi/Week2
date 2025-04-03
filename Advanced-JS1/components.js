import variables from './variables.js';
import { fetchData } from '../JS-recap5/lib/fetchData.js';

// your code here
const table = document.querySelector('#target');
const modal = document.querySelector('#modal');

let restaurants = [];
let previuousHl = null;

const getAllRestaurants = async () => {
  try {
    restaurants = await fetchData(`${variables.apiUrl}/restaurants/`);
  } catch (e) {
    console.log(e);
  }
};

const getDailyMenu = async (id, language) => {
  try {
    return await fetchData(
      `${variables.apiUrl}/restaurants/daily/${id}/${language}/`
    );
  } catch (e) {
    console.log(e);
  }
};

const sortAlphabeticly = () => {
  restaurants.sort(function (a, b) {
    return a.name > b.name ? 1 : -1;
  });
};

const createTable = () => {
  for (const r of restaurants) {
    const tr = document.createElement('tr');
    tr.addEventListener('click', async () => {
      try {
        previuousHl?.classList.remove('highlight');
        modal.innerHTML = '';

        const coursesResponse = await getDailyMenu(r._id, 'fi');

        const menuHtml = createMenuHtml(coursesResponse.courses);

        tr.classList.add('highlight');

        createModalHtlm(r, modal);

        console.log(menuHtml[0] == null);

        modal.insertAdjacentHTML('beforeend', menuHtml);

        if (menuHtml[0] == null) {
          modal.insertAdjacentHTML('beforeend', '<p>NO DATA FOUND.</p>');
        }

        modal.showModal();
        previuousHl = tr;
      } catch {
      }
    });

    restaurantRow(r, tr);
    table.append(tr);
  }
};

const restaurantRow = (r, tr) => {
  const nametd = document.createElement('td'); 
  nametd.innerText = r?.name;

  const addressTd = document.createElement('td');
  addressTd.innerText = r?.address;

  const cityTd = document.createElement('td');
  cityTd.innerText = r?.city;

  tr.append(nametd, addressTd, cityTd);
};

const createModalHtlm = (r, mdl) => {
  const nameP = document.createElement('h1');
  nameP.innerText = r.name;
  mdl.append(nameP);
};

const createMenuHtml = (courses) => {
  let html = '';

  for (const {name, price, diets} of courses) {
    html += `
    <article class="course">
        <p><strong>${name}</strong></p>
        <p>Hinta: ${price}</p>
        <p>Allergeenit: ${diets}</p><br>
    </article>`;
  }

  return html;
};

export default {
  getAllRestaurants,
  sortAlphabeticly,
  createTable,
};