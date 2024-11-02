export class Vehicule {
  id: number;
  marca: string;
  linea: string;
  referencia: string;
  modelo: number;
  kilometraje: number;
  color: string;
  imagen: string;

  constructor({
    id,
    marca,
    linea,
    referencia,
    modelo,
    kilometraje,
    color,
    imagen,
  }: Vehicule) {
    this.id = id;
    this.marca = marca;
    this.linea = linea;
    this.referencia = referencia;
    this.modelo = modelo;
    this.kilometraje = kilometraje;
    this.color = color;
    this.imagen = imagen;
  }
}
