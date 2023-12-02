package main

import (
  "fmt"
  "os"
  "log"
  "strings"
)

func main() {

  fmt.Println(">>Attempting to read input.txt")
  file, err := os.ReadFile("input.txt")

  if err != nil {
    log.Fatal(">>Need to have an input.txt file to continue")
  } else {
    fmt.Println(">>Read successful")
  }

  input := strings.Split(string(file), "\n")

  for i := 0; i < len(input); i++ {
    line := input[i]
    if len(line) < 1 {
      continue
    }
    f := 0
    b := len(line) -1
    for f <= b {
      if line[f] > '0' && line[f] <= '9' {
        fmt.Printf("%c",line[f])
      }

      if line[b] > '0' && line[b] <= '9' {
        fmt.Printf("%c",line[b])
      }
      f++
      b--
    }
  }
}
