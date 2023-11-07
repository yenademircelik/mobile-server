import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class ImageDto {
  @IsNotEmpty()
  readonly image_url: any;
  @IsNotEmpty()
  @IsNumber()
  readonly quality_control_id: number;
  @IsNotEmpty()
  @IsString()
  readonly status: string;
  @IsNotEmpty()
  @IsNumber()
  readonly work_id: number;
}
