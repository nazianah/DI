    // Part I
    function makeJuice(size) {
        function addIngredients(first, second, third) {
            // Display on the DOM
            const resultDiv = document.getElementById('result');
            resultDiv.innerHTML = `The client wants a ${size} juice, containing ${first}, ${second}, ${third}`;
        }

        // Invoke addIngredients once
        addIngredients('apple', 'orange', 'carrot');
    }

    // Invoke makeJuice in the global scope
    makeJuice('medium');

    // Part II
    function makeJuiceWithIngredients(size) {
        // Create an empty array named ingredients
        let ingredients = [];

        function addIngredients(first, second, third) {
            // Push ingredients into the array
            ingredients.push(first, second, third);
        }

        function displayJuice() {
            // Display on the DOM
            const resultDiv = document.getElementById('result');
            resultDiv.innerHTML = `The client wants a ${size} juice, containing ${ingredients.join(', ')}`;
        }

        // Invoke addIngredients twice
        addIngredients('apple', 'orange', 'carrot');
        addIngredients('spinach', 'ginger', 'lemon');

        // Invoke displayJuice once
        displayJuice();
    }

    // Invoke makeJuiceWithIngredients in the global scope
    makeJuiceWithIngredients('large');