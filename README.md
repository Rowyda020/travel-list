# Travel-List 

The "Travel-List" project is a straightforward React application designed to assist you in creating a packing list for your trips. It enables you to add items, mark them as packed or unpacked, delete items, and offers statistics to track your packing progress.


## Installation

To run the project locally, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install the required dependencies by running the following command:

   ```shell
   npm install
   ```

4. Start the development server with the following command:

   ```shell
   npm start
   ```

5. Open your web browser and visit `http://localhost:3000` to see the application.

## Project Structure

The project consists of the following components:

- `App`: The main component that holds the state and manages the packing list.
- `Logo`: Renders the title of the application.
- `Form`: Renders the form for adding new items to the packing list.
- `PackingList`: Displays the list of items and provides sorting and clearing functionality.
- `Stats`: Shows statistics about the packing progress.
- `Item`: Represents an individual item in the packing list.

## Usage

The `App` component is the entry point of the application. It manages the state of the packing list items using the `useState` hook. The component renders the `Logo`, `Form`, `PackingList`, and `Stats` components.

The `Logo` component renders the title of the application.

The `Form` component is a form that allows you to add new items to the packing list. It uses the `useState` hook to manage the input fields and their values. When the form is submitted, it creates a new item object with a unique `id` and passes it to the `onAddItems` prop function provided by the parent component (`App`).

The `PackingList` component displays the list of items. It receives the list of items, `onDeleteItem`, `onToggleItem`, and `onClearList` prop functions from the parent component (`App`). It also provides sorting functionality based on different criteria (input order, description, packed status). The user can select a sorting option from the dropdown, and the list will be sorted accordingly. The component maps over the `sortedItems` array and renders an `Item` component for each item.

The `Item` component represents an individual item in the packing list. It receives the item object, `onDeleteItem`, and `onToggleItem` prop functions from the `PackingList` component. It renders a checkbox for marking the item as packed or unpacked, the item description, and a delete button. Clicking the delete button calls the `onDeleteItem` function with the item's `id`, and clicking the checkbox calls the `onToggleItem` function with the item's `id`.

The `Stats` component displays statistics about the packing progress. It receives the list of items from the parent component (`App`). If there are no items in the list, it displays a message encouraging the user to start adding items. Otherwise, it calculates the number of items, the number of packed items, and the packing progress percentage. The component renders a message based on the packing progress.
