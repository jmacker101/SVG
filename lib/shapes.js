class Shape {
    constructor(){
        this.color = "green";
    }
    setColor(color){
        this.color = color;
    }
}

class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`
    }
}

class Triangle extends Shape {
    render(){
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`
    }
}

class Square extends Shape {
    render(){
        return ` <rect x="150" y="100" width="100" height="100" fill="${this.color}" />`
    }
}

module.exports = { Circle, Triangle, Square};