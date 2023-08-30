import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity("movies")
class Movie {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column({ length: 50, unique: true })
    name: string;

    @Column({type: 'text', nullable: true })
    description?: string | undefined | null;

    @Column('int')
    duration: number;

    @Column('int')
    price: number;
}


export default Movie;
