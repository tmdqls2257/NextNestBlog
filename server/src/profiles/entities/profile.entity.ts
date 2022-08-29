import { CommonEntity } from 'src/common/entities/common.entity';
import { Column } from 'typeorm';

export class ProfileEntity extends CommonEntity {
  @Column({ type: 'varchar', nullable: true })
  bio: string;
}
