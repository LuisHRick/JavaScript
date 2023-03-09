function classificaTriangulo(x, y, z) {
    if (x == y && x == z) {
        return 'Equilátero'
    } else if (x == y || x == z || y == z) {
        return 'Isósceles'
    } else {
        return 'Escaleno'
    }
}

console.log(classificaTriangulo(2, 1, 3))