import { Exclude } from 'class-transformer';
import { IsBoolean, IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { CommonEntity } from 'src/common/entities/common.entity';
import { Column, JoinColumn, OneToMany, OneToOne } from 'typeorm';

export class UserEntitiy extends CommonEntity {
  @IsEmail({}, { message: '올바른 이메일을 작성해주세요' })
  @IsNotEmpty({ message: '이메일을 작성해주세요' })
  @Column({ type: 'varchar', unique: true, nullable: false })
  email: string;

  @IsString()
  @IsNotEmpty({ message: '이름을 작성해주세요.' })
  @Column({ type: 'varchar', nullable: false })
  username: string;

  @Exclude()
  @Column({ type: 'boolean', default: false })
  password: string;

  @IsBoolean()
  @Column({ type: 'boolean', default: false })
  isAdmin: boolean;

  @OneToOne(() => ProfileEntity) // 단방향 연결, 양방향도 가능
  @JoinColumn({ name: 'profile_id', referencedColumnName: 'id' })
  profile: ProfileEntity;

  @OneToMany(() => BlogEntity, (blog: BlogEntity) => blog.author, {
    cascade: true, // 사용자를 통해 블로그가 추가, 수정, 삭제되고 사용자가 저장되면 추가된 블로그도 저장된다.
  })
  blogs: BlogEntity[];
}
