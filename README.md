# Merge Collections

This project is a TypeScript implementation with unit tests for merging three sorted integer arrays into a single sorted array without using any built-in sorting functions.

## Problem Description
Implement a function with the following interface:
`merge(int[] collection_1, int[] collection_2, int[] collection_3) : int[]`

**Given conditions:**
- `collection_1` and `collection_3` are already sorted from min to max.
- `collection_2` is already sorted from max to min.

## Algorithm & Complexity
The solution uses a **3-Pointers Approach** to compare values from all three collections simultaneously. 
- Since `collection_2` is sorted in descending order, its pointer starts from the end of the array (reading backwards).
- The algorithm achieves a **Time Complexity of $O(N)$** (where $N$ is the total number of elements across all arrays) and iterates through the data only once.

## Prerequisites
- [Node.js](https://nodejs.org/) (version 14 or higher recommended)

## Installation & Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/Ryuto00/merge-collections
2. Navigate to the project directory:
   ```bash
    cd merge-collections
3. Install dependencies:
   ```bash
    npm install
## Running Tests
This project uses **Jest** for unit testing. To execute the tests, run:

```bash
npm run test