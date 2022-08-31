import { CommonEntity } from '../common/entities/common.entity'; // ormconfig.json에서 파싱 가능하도록 상대 경로로 지정
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { UserEntity } from '../users/users.entity';
import { TagEntity } from '../tags/tags.entity';
import { VisitorEntity } from '../visitors/visitors.entity';

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

  @ManyToOne(() => UserEntity, (author: UserEntity) => author.blogs, {
    // 사용자가 삭제되면 블로그도 삭제됩니다.
    onDelete: 'CASCADE',
  })
  @JoinColumn([
    // foreignkey 정보들 입력
    {
      name: 'author_id',
      referencedColumnName: 'id',
    },
  ])
  author: UserEntity;

  // @ApiProperty({
  //   description: '좋아요 갯수',
  // })
  // @Prop({
  //   default: 0,
  // })
  // @IsPositive()
  // @IsNotEmpty()
  @Column({ type: 'int', nullable: true })
  likeCount: number;

  @ManyToMany(() => TagEntity, (tag: TagEntity) => tag.blog, {
    cascade: true,
  })
  @JoinTable({
    name: 'BLOG_TAG',
    joinColumn: {
      name: 'blog_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'tag_id',
      referencedColumnName: 'id',
    },
  })
  tags: TagEntity;

  @OneToMany(() => VisitorEntity, (visitor: VisitorEntity) => visitor.blog, {
    cascade: true,
  })
  visitors: VisitorEntity[];
}
