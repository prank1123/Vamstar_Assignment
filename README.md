# Vamstar's Hiring Challenge

This repo hosts projects related to challenges given by [Vamstar](https://vamstar.io/)

# Features

- A simple Web Scraper built using [puppeteer](https://github.com/puppeteer/puppeteer#readme)
- Extraction of information from this [website](https://prefeitura.pbh.gov.br/saude/licitacao/pregao-eletronico-151-2020)
- The data extracted are made available in JSON format

# Requirements

- `node >= 12.0.2`
- `npm >= 6.0.0`

# Usage

1. Run the application by executing the following commands
   ```sh
   npm install
   npm start
   ```

2. The results are available in JSON files in the following format

   ```json
   {
       "publicationDate": "",
       "BiddingDate": "",
       "Object": "",
       "Links": []
   }
   ```

   