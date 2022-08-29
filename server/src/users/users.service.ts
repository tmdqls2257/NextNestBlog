import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  // create(createUserDto: CreateUserDto) {
  //   return 'This action adds a new user';
  // }

  // findAll() {
  //   return `This action returns all users`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} user`;
  // }

  // update(id: number, updateUserDto: UpdateUserDto) {
  //   return `This action updates a #${id} user`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} user`;
  // }
  constructor(
    @InjectRepository(UserEntity)
    private readonly usersRepository: Repository<UserEntity>,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  async registerUser(userRegisterDTO: UserRegisterDTO): Promise<void> {
    const { email, password } = userRegisterDTO;
    const user = await this.usersRepository.findOne({ email });
    if (user) {
      throw new UnauthorizedException('해당하는 이메일은 이미 존재합니다.');
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    await this.usersRepository.save({
      ...userRegisterDTO,
      password: hashedPassword,
    });
  }

  async verifyUserAndSignJwt(
    email: UserLogInDTO['email'],
    password: UserLogInDTO['password'],
  ): Promise<{ jwt: string; user: UserDTO }> {
    const user = await this.usersRepository.findOne({ email });
    if (!user)
      throw new UnauthorizedException('해당하는 이메일은 존재하지 않습니다.');
    if (!(await bcrypt.compare(password, user.password)))
      throw new UnauthorizedException('로그인에 실패하였습니다.');
    try {
      const jwt = await this.jwtService.signAsync(
        { sub: user.id },
        { secret: this.configService.get('SECRET_KEY') },
      );
      return { jwt, user };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async findUserById(id: string) {
    try {
      const user = await this.usersRepository.findOne({ id });
      if (!user) throw new Error();
      return user;
    } catch (error) {
      throw new BadRequestException('해당하는 사용자를 찾을 수 없습니다.');
    }
  }
}
