import { CommonEntity } from 'src/common/entities/common.entity';
import { TagEntity } from 'src/tags/entities/tag.entity';
import { UserEntity } from 'src/users/entities/user.entity';
import { VisitorEntity } from 'src/visitors/entities/visitor.entity';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
} from 'typeorm';

@Entity({
  name: 'BLOG',
})
export class BlogEntity extends CommonEntity {
  @Column({ type: 'varchar', nullable: false })
  title: string;

  @Column({ type: 'varchar', nullable: true })
  description: string;

  @Column({ type: 'text', nullable: true })
  contents: string;

  //* Relation */

  @ManyToOne(() => UserEntity, (author: UserEntity) => author.blogs, {
    onDelete: 'CASCADE', // 사용자가 삭제되면 블로그도 삭제된다.
  })
  @JoinColumn([
    // foreignkey 정보들
    {
      name: 'author_id' /* db에 저장되는 필드 이름 */,
      referencedColumnName: 'id' /* USER의 id */,
    },
  ])
  author: UserEntity;

  @ManyToMany(() => TagEntity, (tag: TagEntity) => tag.blogs, {
    cascade: true, // 블로그를 통해 태그가 추가, 수정, 삭제되고 블로그를 저장하면 태그도 저장된다.
  })
  @JoinTable({
    // table
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
  tags: TagEntity[];

  @OneToMany(() => VisitorEntity, (visitor: VisitorEntity) => visitor.blog, {
    cascade: true,
  })
  visitors: VisitorEntity[];
}
