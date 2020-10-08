import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('voiture')
export class VoituresEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    marque: string;

    @Column()
    modele: string;

    @Column()
    idUser: number;
}