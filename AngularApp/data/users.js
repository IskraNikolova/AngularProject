const usersById =    { '1': { email: 'pesho@abv.bg', password: 'pppp', name: 'pesho', id: 1, isAdmin: false } };
const usersByEmail = { 'pesho@abv.bg': { email: 'pesho@abv.bg', password: 'pppp', name: 'pesho', id: 1, isAdmin:false } };

module.exports = {
  total: () => Object.keys(usersById).length,
  save: (user) => {
    const id = Object.keys(usersById).length + 1
    user.id = id

    usersById[id] = user
    usersByEmail[user.email] = user
  },
  all: () => {
    return usersById
  },
  findByEmail: (email) => {
    return usersByEmail[email]
  },
  findById: (id) => {
    return usersById[id]
  },
  delete: (id) => {
	let user = usersById[id];
	let email = user.email;
	
    delete usersById[id]
	delete usersByEmail[email]
  }
}
