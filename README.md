# Code challenge
## Estimated Time for Completion: 45 minutes
## Problem Statement: 
You are tasked with building a prototype of a payment transaction dashboard using React.js and TypeScript. Your goal is to create a web application that simulates displaying payment transaction data that allows users to input more payment amounts and see if any two payments add up to a given target amount.

To create the react+ts app you can use `npx create-react-app my-app --template typescript` or with Vite `npm create vite@latest my-app -- --template react-ts`

## Requirements:
- Display a list of past transactions, each with a unique ID and an amount.
    - use a promise that returns an array with the past transactions.
- Display a target amount input field that users can use to check if any two transactions add up to that target. After the user enters a target amount and clicks “Check Transactions,” display the indices (or IDs) of two transactions that add up to that target.
    - If no two transactions add up to the target, display a message like “No matching transactions found.”
- Users should be able to add new transactions (ID and amount) to the list.
- Display any validation or error messages if necessary (e.g., for invalid inputs). (**Bonus points**)

## Constraints:
- Third-party APIs are not allowed. You must use a mock API for data.
- You are not able to use AI tools like gpt or copilot.
- PLEASE CLONE AND PUSH DIRECTLY TO MAIN WHEN YOU FINISH
