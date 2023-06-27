import { CreateUserAdminDto } from './dto/create-user-admin.dto';
import { UpdateUserAdminDto } from './dto/update-user-admin.dto';
export declare class UserAdminService {
    create(createUserAdminDto: CreateUserAdminDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateUserAdminDto: UpdateUserAdminDto): string;
    remove(id: number): string;
}
