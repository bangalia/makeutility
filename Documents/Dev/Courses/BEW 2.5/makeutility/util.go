package main

import (
	"fmt"
	"io"
	"log"
	"net/http"
	"os"
	"strings"
	"sync"
)

func main() {
	urls := []string{
		"https://github.com/Tech-at-DU/ACS1710-Web-Architecture",
		"https://github.com/Tech-at-DU/SPD-1.1-Introduction-To-Software-Product-Development",
		"https://www.dominican.edu/sites/default/files/2020-10/five-year-calendar_2020-2025.pdf",
	}

	var wg sync.WaitGroup

	wg.Add(len(urls))

	for _, url := range urls {
		go func(url string) {
			defer wg.Done()
			tokens := strings.Split(url, "/")
			fileName := tokens[len(tokens)-1]
			fmt.Println("Downloading", url, "to", fileName)

			output, err := os.Create(fileName)
			if err != nil {
				log.Fatal("File creation error", fileName, "-", err)
			}
			defer output.Close()

			res, err := http.Get(url)
			if err != nil {
				log.Fatal("Site connection error: ", err)
			} else {
				defer res.Body.Close()
				_, err = io.Copy(output, res.Body)
				if err != nil {
					log.Fatal("Download failed", url, "-", err)
				} else {
					fmt.Println("Downloaded", fileName)
				}
			}
		}(url)
	}
	wg.Wait()
	fmt.Println("Download completed")
}
