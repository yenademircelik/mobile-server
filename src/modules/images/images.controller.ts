import {
  Controller,
  Post,
  Req,
  Res,
  UseGuards,
  UploadedFile,
  UseInterceptors,
  HttpStatus,
  InternalServerErrorException,
  Get,
  Param,
  ParseArrayPipe,
  NotFoundException,
  ParseFilePipe,
  FileTypeValidator,
} from '@nestjs/common';
import { JwtGuard } from '../auth/guard/jwt.guard';
import { ImagesService } from './images.service';
import { ImageDto } from './dto/images.dto';
import { Request, Response } from 'express';
import { uploadFile } from '../utils/upload_azure';
import { FileInterceptor } from '@nestjs/platform-express';

@UseGuards(JwtGuard)
@Controller('images')
export class ImagesController {
  constructor(private readonly imagesService: ImagesService) {}

  @Post()
  @UseInterceptors(FileInterceptor('images'))
  async createImage(
    @UploadedFile(
      new ParseFilePipe({
        validators: [new FileTypeValidator({ fileType: 'image/jpeg' })],
      }),
    )
    file: Express.Multer.File,

    @Req() req: Request,
    @Res() res: Response,
  ) {
    const { quality_control_id, status, work_id } = req.body;

    try {
      const image_url = file
        ? await uploadFile(file.buffer, file.originalname, file.path)
        : null;

      const imageDto: ImageDto = {
        image_url: image_url,
        quality_control_id: quality_control_id,
        status: status,
        work_id: work_id,
      };

      const result = await this.imagesService.createImage(imageDto);

      return res
        .status(HttpStatus.CREATED)
        .json({ message: 'Image Successfully created !', image: result });
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException(error);
    }
  }

  @Get(':qualityControlIds/:workId')
  async getImageCount(
    @Param('qualityControlIds', ParseArrayPipe) qualityControlIds: number[],
    @Param('workId') workId: number,
  ) {
    const image = await this.imagesService.findImageByWorkId(workId);
    if (!image) {
      throw new NotFoundException('Image can not be found !');
    }

    return await this.imagesService.getImagesCount(qualityControlIds, workId);
  }
}
