import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { InterestPointsService } from './interest-points.service';
import { CreateInterestPointDto } from './dto/create-interest-point.dto';
import { UpdateInterestPointDto } from './dto/update-interest-point.dto';

@Controller('interest-points')
export class InterestPointsController {
  constructor(private readonly interestPointsService: InterestPointsService) {}

  @Post()
  create(@Body() createInterestPointDto: CreateInterestPointDto) {
    return this.interestPointsService.create(createInterestPointDto);
  }

  @Get()
  findAll() {
    return this.interestPointsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.interestPointsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateInterestPointDto: UpdateInterestPointDto) {
    return this.interestPointsService.update(+id, updateInterestPointDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.interestPointsService.remove(+id);
  }
}
