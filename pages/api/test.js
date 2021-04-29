// api call using next
async function getUser(req, res) {
  const users = await fetch('https://jsonplaceholder.typicode.com/users')
  const usersJson = await users.json()
  const datainfo = new Date()
  //const username = usersJson.name
  const name = usersJson.map((item) => {
    return item.name
  })
  console.log(name)
  // responder request instantinic e user cache control com versel
  res.setHeader('Cache-Control', 's-maxage=10, stale-while-revalidate')

  res.json({
    nome: name,
    data: usersJson,
    timeis: datainfo,
  })
}

export default getUser
