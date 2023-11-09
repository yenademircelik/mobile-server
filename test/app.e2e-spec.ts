import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import { AppModule } from './../src/app.module';
import * as pactum from 'pactum';
import { AuthDto } from 'src/modules/auth/dto/auth.dto';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleRef.createNestApplication();
    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
      }),
    );
    await app.init();
    await app.listen(3000);
    pactum.request.setBaseUrl('http://localhost:3000');
  });

  afterAll(async () => {
    await app.close();
  });

  describe('Auth', () => {
    describe('Login', () => {
      it('testing login', () => {
        const dto: AuthDto = {
          phone: '654654',
          password: '1',
        };

        return pactum
          .spec()
          .post('/auth/login')
          .withBody(dto)
          .stores('userAt', 'access_token')
          .inspect();
      });
    });
  });
  describe('Products', () => {
    describe('getProductById', () => {
      it('get product by id testing', () => {
        return pactum
          .spec()
          .get('/products/{productId}')
          .withHeaders({ Authorization: 'Bearer $S{userAt}' })
          .withPathParams('productId', '1')
          .inspect();
      });
    });
  });
  describe('QualityControl', () => {
    describe('getQualityControlByFormIdWorkId', () => {
      it('testing get Quality Control By FormId and WorkId', () => {
        return pactum
          .spec()
          .get('/quality-control/{formId}/{workId}')
          .withHeaders({ Authorization: 'Bearer $S{userAt}' })
          .withPathParams('formId', 1)
          .withPathParams('workId', '1')
          .inspect();
      });
    });
  });
});
