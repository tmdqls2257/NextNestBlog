import { BlogEntity } from 'src/blogs/entities/blog.entity';
import { CommonEntity } from 'src/common/entities/common.entity';
import { Column, Entity, ManyToMany } from 'typeorm';

@Entity({
  name: 'TAG',
})
export class TagEntity extends CommonEntity {
  @Column({ type: 'varchar', nullable: true })
  name: string;

  //* Relation */

  @ManyToMany(() => BlogEntity, (blog: BlogEntity) => blog.tags)
  blogs: BlogEntity[];
}
