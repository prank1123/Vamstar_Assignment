const puppeteer= require('puppeteer');

(async () => {
    let url='https://prefeitura.pbh.gov.br/saude/licitacao/pregao-eletronico-151-2020';
    // put the url in `url`   
   
    // Initiate the Puppeteer for browser  
    let browser = await puppeteer.launch(); // it launces the chrome browser in --headless mode 
    let page = await browser.newPage(); //  opens a new page 
    await page.goto(url, { waitUntil :'load', timeout: 0}); // loads the page 

     // Renders the javascript inside of the  loaded page 
  let data =  await page.evaluate(() =>{

        var k=document.querySelector('#block-views-block-view-noticia-pbh-block-5 > div > div > div > div > div > div.views-field.views-field-nothing > span').childNodes;
        let  PublicationDate = k[0].innerText;
        let BiddingDate = k[18].innerText;
        let Object = k[5].innerText;
        let links=document.querySelector('td:nth-child(2) > div > div > div > a').href;

        /* Returning an object filled with data */
        return{

        PublicationDate,
        BiddingDate,
        Object,
        links
        }


    }  );

    /* Output*/
    console.log(data);

    await browser.close();

})();