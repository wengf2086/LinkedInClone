import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity('feed_post')
export class FeedPostEntity {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({ default: '' })
    body: string;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }) // by default when we create an entry it'll be the current time 
    createdAt: Date;
}