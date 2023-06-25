const { Triangle, Square, Circle } = require('../Lib/shapes');

test('renders triangle with correct color', () => {
    const shape = new Triangle();
shape.setColor("blue");
expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
  
});

test('renders triangle with correct color', () => {
    const shape = new Square();
shape.setColor("blue");
expect(shape.render()).toEqual(`<rect x="73 y"40" width="160" height="160" fill="blue" />`);
  
});

test('renders triangle with correct color', () => {
    const shape = new Circle();
shape.setColor("blue");
expect(shape.render()).toEqual( `<circle cx="25" cy="75" r="20" fill="blue />`);
  
});