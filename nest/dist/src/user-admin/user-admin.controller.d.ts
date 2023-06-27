import { UserAdminService } from './user-admin.service';
import { CreateUserAdminDto } from './dto/create-user-admin.dto';
import { UpdateUserAdminDto } from './dto/update-user-admin.dto';
export declare class UserAdminController {
    private readonly userAdminService;
    constructor(userAdminService: UserAdminService);
    create(createUserAdminDto: CreateUserAdminDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateUserAdminDto: UpdateUserAdminDto): string;
    remove(id: string): string;
}
