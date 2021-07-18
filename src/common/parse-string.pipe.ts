import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';

@Injectable()
export class ParseStringPipe implements PipeTransform {
  transform(value: string, metadata: ArgumentMetadata) {
    if (value === undefined || value === '') {
      throw new BadRequestException(`${value} is not a string or empty text.`);
    }

    return value;
  }
}
