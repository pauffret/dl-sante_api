import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

//pass the name of table inside @Entity() i.e "users", if you don't pass table name it will create "users_entity" table by default
@Entity('users')
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