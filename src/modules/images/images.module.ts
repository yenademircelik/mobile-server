import { Module } from '@nestjs/common';
import { ImagesService } from './images.service';
import { ImagesController } from './images.controller';
import { imagesProviders } from './images.provider';

@Module({
  providers: [ImagesService, ...imagesProviders],
  controllers: [ImagesController],
})
export class ImagesModule {}
