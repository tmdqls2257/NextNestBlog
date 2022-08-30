import { CommonEntity } from '../common/entities/common.entity'; // ormconfig.json에서 파싱 가능하도록 상대 경로로 지정
import { Column, Entity } from 'typeorm';

// db에 실제로 들어가는 bd명
@Entity({
  name: 'BLOG',
})
export class BlogEntity extends CommonEntity {
  // Column: db에 저장될 때 어떠한 형식으로 저장되는지 결정하는 데코레이터
  @Column({ type: 'varchar', nullable: false })
  title: string;

  @Column({ type: 'varchar', nullable: true })
  description: string;

  @Column({ type: 'text', nullable: true })
  contents: string;
}
