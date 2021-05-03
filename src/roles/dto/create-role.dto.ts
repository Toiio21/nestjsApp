import { ApiProperty } from '@nestjs/swagger';

export class CreateRoleDto {
  @ApiProperty({ example: 'ADMIN', description: 'Роль пользователя' })
  readonly value: string;
  @ApiProperty({
    example: 'something about role',
    description: 'Описание роли пользователя',
  })
  readonly description: string;
}
