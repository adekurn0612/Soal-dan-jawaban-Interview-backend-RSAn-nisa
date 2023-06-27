import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { JadwalDoctorService } from './jadwal-doctor.service';
import { CreateJadwalDoctorDto } from './dto/create-jadwal-doctor.dto';
import { UpdateJadwalDoctorDto } from './dto/update-jadwal-doctor.dto';
// import { Roles } from 'src/Guards/roles_decorator';
// import { RolesGuard } from 'src/Guards/role_Guards';

@Controller('jadwal-doctor')
export class JadwalDoctorController {
  constructor(private readonly jadwalDoctorService: JadwalDoctorService) {}

  @Post()
  // @UseGuards(RolesGuard)
  // @Roles('admin')
  create(@Body() createJadwalDoctorDto: CreateJadwalDoctorDto) {
    return this.jadwalDoctorService.create(createJadwalDoctorDto);
  }

  @Get()
  findAll() {
    return this.jadwalDoctorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.jadwalDoctorService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateJadwalDoctorDto: UpdateJadwalDoctorDto) {
    return this.jadwalDoctorService.update(+id, updateJadwalDoctorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.jadwalDoctorService.remove(+id);
  }
}
