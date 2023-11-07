import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { IMAGES_REPOSITORY } from '../core/constants';
import { Images } from './images.entity';
import { ImageDto } from './dto/images.dto';

@Injectable()
export class ImagesService {
  constructor(
    @Inject(IMAGES_REPOSITORY) private readonly imagesRepository: typeof Images,
  ) {}

  async createImage(imageDto: ImageDto) {
    return await this.imagesRepository.create(imageDto);
  }

  async findImageByWorkId(workId: number) {
    const image = await this.imagesRepository.findAll({
      where: { work_id: workId },
    });

    if (!image) {
      throw new NotFoundException('Image can not be found !');
    }

    return image;
  }

  async getImagesCount(qualityControlIds: number[], workId: number) {
    const counts = await this.imagesRepository.count({
      where: { quality_control_id: qualityControlIds, work_id: workId },
    });

    return counts;
  }
}
