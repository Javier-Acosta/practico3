import fs from 'fs';
import { json } from 'node:stream/consumers';
class Superheroe{
    constructor(id, nombreSuperheroe,nombreReal, nombeSociedad,edad,planetaOrigen,debilidad,poder,habilidadEspecial,aliado,enemigo){
        this.id=id;
        this.nombreSuperheroe=nombreSuperheroe;
        this.nombreReal=nombreReal;
        this.nombeSociedad=nombeSociedad;
        this.edad=edad;
        this.planetaOrigen=planetaOrigen;
        this.debilidad=debilidad;
        this.poder=poder;
        this.habilidadEspecial=habilidadEspecial;
        this.aliado=aliado;
        this.enemigo=enemigo;
    }
}

export function leerSuperHeroe(rutas){
    const datos=fs.readFileSync(rutas,'utf8');
    const superHeroeArray=JSON.parse(datos);


    const superheroes=superHeroeArray.map(
        hero=>new Superheroe(hero.id, hero.nombreSuperheroe, hero.nombreReal, hero.nombeSociedad ,hero.edad, hero.planetaOrigen, hero.debilidad, hero.poder, hero.habilidadEspecial,hero.aliado,hero.enemigo)
    );

    superheroes.sort((a,b)=> a.nombreSuperheroe.localeCompare(
        b.nombreSuperheroe
    ));
    return superheroes;

}