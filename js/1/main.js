const fs = require('fs')

fs.readFile("./input.txt", (err, data) => {
  if (!err && data) {
    one(data.toString())
  } else {
    fetchAdventData(fs.readFileSync("cookie"))
      .then((data)=>{
        fs.writeFile("./input.txt", data, (err)=>{if(err)console.log(err)})
        one(data)
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

function one(data) {

  let 
  startTime = performance.now()
    ,sum = 0
    ,df=dl=line = ''
    ,digitsF = [
      'zero'
      ,'one'
      ,'two'
      ,'three'
      ,'four'
      ,'five'
      ,'six'
      ,'seven'
      ,'eight'
      ,'nine'
    ]
    ,digitsR = [
      'orez'    
      ,'eno'
      ,'owt'
      ,'eerht'
      ,'ruof'
      ,'evif'
      ,'xis'
      ,'neves'
      ,'thgie'
      ,'enin'
    ]

  if (typeof(data) == 'string')
    data = data.split('\n')
  else
    throw Error("data parameter passed to one() is not a string")

  for (let c1=c2=r=0; r<data.length-1;r++) {
    df=dl=word1=word2=''
    line = data[r]
    c1 = 0
    c2 = data[r].length-1

    while (c1 <= c2 ) {
      if (df == '') {
        if (line[c1] >= '0' && line[c1] <= '9') {
          df = line[c1]
        } 
        word1 += line[c1]
        for (let i =1; i <= 9; i++) {
          if (word1.match(digitsF[i]))
            df = ''+i 
        }
      }

      if (dl == '') {
        if (line[c2] >= '0' && line[c2] <= '9') {
          dl = line[c2]
        }
        word2 += line[c2]
        for (let i =1; i <= 9; i++) {
          if (word2.match(digitsR[i]))
            dl = ''+i 
        }
      }

      if (df == '')
        c1++
      if (dl == '')
        c2--
      if (df && dl) {
        break
      }
    }
    sum += Number(df)*10 + Number(dl)   
  }

  console.log("time taken: ", performance.now() - startTime)
  console.log("answer: ", sum)
}
