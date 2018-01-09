const usersById = {}
const usersByEmail = {}

module.exports = {
  total: () => Object.keys(usersById).length,
  save: (user) => {
    const id = Object.keys(usersById).length + 1
    user.id = id

    usersById[id] = user
    usersByEmail[user.email] = user
  },
  all: () => {
    return Object
      .keys(usersById)
      .map(key => usersById[key])
      .filter(usersById => {
      })
      .sort((a, b) => b.id - a.id)
  },
  findByEmail: (email) => {
    return usersByEmail[email]
  },
  findById: (id) => {
    return usersById[id]
  }
}
