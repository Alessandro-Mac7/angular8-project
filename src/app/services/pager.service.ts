import {Injectable} from '@angular/core';

@Injectable()
export class PagerService {

  constructor() {}

  getPager(totalItems: number, currentPage: number = 1, pageSize: number = 2, maxPages: number = 10) {
    // Calcolo le pagine totale (Math.ceil ritorna un numero intero)
    const totalPages = Math.ceil(totalItems / pageSize);

    console.log('pagine totali' + totalPages);
    // Controllo se la pagina corrente sfora
    if (currentPage < 1) {
      currentPage = 1;
    } else if (currentPage > totalPages) {
      currentPage = totalPages;
    }

    let startPage: number;
    let endPage: number;

    if (totalPages <= maxPages) {
      // pagine totali inferiori a maxPages, quindi mostra tutte le pagine
      startPage = 1;
      endPage = totalPages;
      console.log('pagine totali inferiori a maxpages: ' + startPage + ' - ' + endPage);
    } else {
      // pagine totali più del massimo, quindi calcola le pagine iniziale e finale
      const maxPagesBeforeCurrentPage = Math.floor(maxPages / 2);
      const maxPagesAfterCurrentPage = Math.ceil(maxPages / 2) - 1;
      console.log('pagine totali più del massimo' + maxPagesBeforeCurrentPage + ' - ' + maxPagesAfterCurrentPage);
      if (currentPage <= maxPagesBeforeCurrentPage) {
        // pagina corrente vicino alla pagina iniziale
        startPage = 1;
        endPage = maxPages;
        console.log('Pagina vicino ad iniziale ' +  startPage + ' - ' + endPage);
      } else if (currentPage + maxPagesAfterCurrentPage >= totalPages) {
        // pagina corrente vicino alla pagina finale
        startPage = totalPages - maxPages + 1;
        endPage = totalPages;
        console.log('Pagina vicino ad finale ' +  startPage + ' - ' + endPage);
      } else {
        // pagina corrente nel mezzo
        startPage = currentPage - maxPagesBeforeCurrentPage;
        endPage = currentPage + maxPagesAfterCurrentPage;
        console.log('Pagina nel mezzo ' +  startPage + ' ' + endPage);
      }
    }

    // calcola index iniziale e finale
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
    console.log('Index ' +  startIndex + ' ' + endIndex);

    // Creo l'array delle Pagine
    const pages = Array.from(Array((endPage + 1) - startPage).keys()).map(i => startPage + i);

    // Setto le proprietà dell'oggetto da restituire alle view
    return {
      totalItems,
      currentPage,
      pageSize,
      totalPages,
      startPage,
      endPage,
      startIndex,
      endIndex,
      pages
    };
  }
}
