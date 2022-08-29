import { IsIP, IsNotEmpty } from 'class-validator';
import { BlogEntity } from 'src/blogs/entities/blog.entity';
import { CommonEntity } from 'src/common/entities/common.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

@Entity({
  name: 'VISITOR',
})
export class VisitorEntity extends CommonEntity {
  @IsIP()
  @IsNotEmpty()
  @Column({ type: 'inet', nullable: false })
  ip: string;

  //* Relation */

  @ManyToOne(() => BlogEntity, (blog: BlogEntity) => blog.visitors, {
    onDelete: 'SET NULL',
  })
  @JoinColumn([{ name: 'blog_id', referencedColumnName: 'id' }])
  blog: BlogEntity;
}
