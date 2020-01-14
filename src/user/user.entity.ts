import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
    name: 'tian_user',
})
export class User {

    @PrimaryGeneratedColumn({ name: 'user_id' })
    id: number;

    @Column({ name: 'username', length: 20, unique: true })
    userName: string;

    @Column({ length: 50 })
    password: string;

    @Column({ name: 'created_time', type: 'datetime' })
    createdTime: Date;
}
