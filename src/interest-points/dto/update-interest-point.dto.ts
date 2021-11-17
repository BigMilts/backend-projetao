import { PartialType } from '@nestjs/mapped-types';
import { CreateInterestPointDto } from './create-interest-point.dto';

export class UpdateInterestPointDto extends PartialType(CreateInterestPointDto) {}
