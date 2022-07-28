/**
 * Using a callback function.
 * @link https://developer.mozilla.org/en-US/docs/Glossary/Callback_function
 */

// Função auxiliar para formatar números de moeda. Usado por tipCalculator
const formatter = (locale = "en-US", currency = "USD", value) => {
  let formattedValue = new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
  }).format(value);

  return formattedValue;
};

// O retorno de chamada recebe o objeto finalTip, cria e gera uma tabela no DOM.
const printHTML = (finalTip) => {
  const tipTable = document.createElement("table");
  tipTable.innerHTML = `
    <tr>
      <td>Sum before tip:</td>
      <td>${finalTip.sum}</td>
    </tr>
    <tr>
      <td>Tip percentage:</td>
      <td>${finalTip.percentage}</td>
    </tr>
    <tr>
      <td>Tip:</td>
      <td>${finalTip.tip}</td>
    </tr>
    <tr>
      <td>Total:</td>
      <td>${finalTip.total}</td>
    </tr>
  `;
  document.querySelector("main").append(tipTable);
};

// Crie um objeto finalTip com todos os dados. Envie-o para o retorno de chamada printHTML.
const tipCalculator = (sum, percentage, locale, currency, printHTML) => {
  let tip = sum * (percentage / 100);
  let total = sum + tip;

  const finalTip = {
    sum: formatter(locale, currency, sum),
    percentage: percentage + "%",
    tip: formatter(locale, currency, tip),
    total: formatter(locale, currency, total),
  };

  printHTML(finalTip);
};

tipCalculator(29.95, 18, "de-DE", "EUR", printHTML);
