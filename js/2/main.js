const fs = require('fs')

fs.readFile("./input.txt", (err, data) => {
  if (!err && data) {
    main(data.toString())
  } else {
    fetchAdventData(fs.readFileSync("cookie"))
      .then((data)=>{
        fs.writeFile("./input.txt", data, (err)=>{if(err)console.log(err)})
        main(data)
      })
  }
})

async function fetchAdventData(cookie) {
  console.log('local input.txt not found, fetching...')

  return fetch(
    "https://adventofcode.com/2023/day/1/input",
    {
      headers: {
        cookie: cookie
      }
    })
    .then((res)=>{
      if (res.ok) {
        console.log("fetched ok")
        return res.text()
      }
    })
    .catch((err)=>{
      console.log(err)
    })
}

function main(data) {

  let 
  startTime = performance.now()

  console.log(typeof(data))

  console.log("time taken: ", performance.now() - startTime)
}
