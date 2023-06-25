class shape {
    constructor() {
        this.color="";
    }

    setColor(colorVar) {
        this.color = colorVar;
    }
}

class Circle extends shape {
    render() {

        return`<circle cx="25" cy="75" r="20" fill="${this.color} />`;
    }
}


class Triangle extends shape {
    render() {

        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
}

class Square extends shape {
    render() {

        return `<rect x="73 y"40" width="160" height="160" fill="${this.color}" />`;
    }
}

module.exports = { Circle, Triangle, Square};


