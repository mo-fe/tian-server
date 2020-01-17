import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
    name: 'tian_user',
})
export class User {

    @PrimaryGeneratedColumn({ name: 'user_id', comment: '用户Id' })
    userId: number;

    @Column({ name: 'username', length: 20, unique: true, comment: '用户名' })
    username: string;

    @Column({ length: 50, comment: '密码' })
    password: string;

    @Column({ name: 'created_time', type: 'datetime', comment: '注册时间' })
    createdTime: Date;

    @Column({ name: 'last_login_time', type: 'datetime', comment: '上次登录时间' })
    lastLoginTime: Date;

    @Column({ name: 'last_login_ip', length: 50, comment: '上次登录IP' })
    lastLoginIp: string;
}
