import { Injectable } from '@nestjs/common';
import { Tache } from './tache.interface';

@Injectable()
export class TachesService {
    private taches: Tache[] = [
        {id: 1, titre: "laver linge", complete: false},
        {id: 2, titre: "acheter savon", complete: true}
    ]

    findAll(): Tache[] {
        return this.taches;
    }

    findOne(id: number): Tache | undefined {
        return this.taches.find((tache) => tache.id===id)
    }

    create(titre: string): Tache {
        const tache = {id: Date.now(), titre: titre, complete: false}
        this.taches.push(tache)
        return tache;
    }

    remove(id: number) {
        this.taches = this.taches.filter((tache) => tache.id!==id)
    }

}
