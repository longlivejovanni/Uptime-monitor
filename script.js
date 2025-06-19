const websites = [
  'https://www.google.com',
  'https://www.github.com',
  'https://thiswebsitedoesnotexist1234.com'
];

const statusList = document.getElementById('status-list');

websites.forEach(async (site) => {
  const listItem = document.createElement('li');
  listItem.textContent = `Checking ${site}...`;
  statusList.appendChild(listItem);

  try {
    const response = await fetch(site, { mode: 'no-cors' });
    listItem.textContent = `${site} is Online ✅`;
    listItem.classList.add('online');
  } catch (error) {
    listItem.textContent = `${site} is Offline ❌`;
    listItem.classList.add('offline');
  }
});
