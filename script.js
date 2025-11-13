function calculateArea() {
    // Get the radius from the user
    let radius = prompt("Enter the radius of the circle:");

    // Convert to number
    radius = Number(radius);

    // Calculate area using πr²
    let area = Math.PI * radius * radius;

    // Round to two decimal places
    area = area.toFixed(2);

    // Display the result
    console.log(`The area of the circle with radius ${radius} is ${area}`);
    alert(`The area of the circle with radius ${radius} is ${area}`);
}

calculateArea();
