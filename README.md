<!-- verificar


const token = import.meta.env.VITE_GITHUB_TOKEN;

const response = await fetch('https://api.github.com/users/Carleone-Souza-Santos/repos', {
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

const data = await response.json();
console.log(data); -->
