import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class SlugPipe implements PipeTransform {
  transform(value: string, metadata: ArgumentMetadata) {
    const slug = (value: string) =>
      value
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, '')
        .replace(/[\s_-]+/g, '-')
        .replace(/^-+|-+$/g, '');
    return slug;
  }
}
