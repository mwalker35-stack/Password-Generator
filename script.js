// Assignment code here pulling from the ID from the HTML code
const characterAmountRange = document.getElementById('characterAmountRange')
const characterAmountNumber = document.getElementById('characterAmountNumber')
const includeUppercaseElement = document.getElementById('includeUppercase')
const includeNumbersElement = document.getElementById('includeNumbers')
const includeSymbolsElement = document.getElementById('includeSymbols')
const form = document.getElementById('passwordGeneratorForm')
const passwordDisplay = document.getElementById('passwordDisplay')
const generatePasswordButtonEl = document.getElementById('generate')


//added variables for strings so they can be used in an array for the random generator
const UPPERCASE_CHAR_CODES = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const LOWERCASE_CHAR_CODES = "abcdefghijklmnopqrstuvwxyz"
const NUMBER_CHAR_CODES = "0123456789"
const SYMBOL_CHAR_CODES = "!@#$%^&*()"

const upperCaseArray = UPPERCASE_CHAR_CODES.split("");
const lowerCaseArray = LOWERCASE_CHAR_CODES.split("");
const numberArray = NUMBER_CHAR_CODES.split("");
const symbolArray = SYMBOL_CHAR_CODES.split("");

characterAmountNumber.addEventListener('input', syncCharacterAmount)
characterAmountRange.addEventListener('input', syncCharacterAmount)


form.addEventListener('submit', (e) => {
  e.preventDefault()
  const characterAmount = characterAmountNumber.value
  const includeUppercase = includeUppercaseElement.checked
  const includeNumbers = includeNumbersElement.checked
  const includeSymbols = includeSymbolsElement.checked
  const password = generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols)
  passwordDisplay.innerText = password
})
//concat the array of code together 
function generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols) {
  let charCodes = lowerCaseArray
  if (includeUppercase) {charCodes = charCodes.concat(upperCaseArray)}
  if (includeSymbols) {charCodes = charCodes.concat(symbolArray)}
  if (includeNumbers) {charCodes = charCodes.concat(numberArray)}
  //console.log(charCodes)

// generates the random characters to passwordCharacters push to the array
  const passwordCharacters = []
  for (let i = 0; i < characterAmount; i++) {
    const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
    passwordCharacters.push(characterCode)
  }
  return passwordCharacters.join('')
}
//slider and number function to match 
function syncCharacterAmount(e) {
  const value = e.target.value
  characterAmountNumber.value = value
  characterAmountRange.value = value
}






