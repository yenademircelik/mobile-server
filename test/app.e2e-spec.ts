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

  describe('Users', () => {
    describe('GetUserInfo', () => {
      it('testing get users info who logged in', () => {
        return pactum
          .spec()
          .get('/users/info')
          .withHeaders({ Authorization: 'Bearer $S{userAt}' })
          .inspect();
      });
    });
  });

  describe('Vendors', () => {
    describe('GetVendorById', () => {
      it('testing get vendors info', () => {
        return pactum
          .spec()
          .get('/vendor/{vendorId}')
          .withHeaders({ Authorization: 'Bearer $S{userAt}' })
          .withPathParams('vendorId', '1')
          .inspect();
      });
    });
  });
  describe('Works', () => {
    describe('GetWorkByUserId', () => {
      it('testing get user by foremanId', () => {
        return pactum
          .spec()
          .get('/works/byUser/{foremanId}')
          .withHeaders({ Authorization: 'Bearer $S{userAt}' })
          .withPathParams('foremanId', '2')
          .inspect();
      });
    });
    describe('GetWorkByWorkId', () => {
      it('testing get work bu workId', () => {
        return pactum
          .spec()
          .get('/works/{workId}')
          .withHeaders({ Authorization: 'Bearer $S{userAt}' })
          .withPathParams('workId', '1')
          .inspect();
      });
    });
  });

  describe('WorkSteps', () => {
    describe('GetWorkStepByIds', () => {
      it('testing get workSteps by ids', () => {
        return pactum
          .spec()
          .get('/work-steps/{ids}')
          .withHeaders({ Authorization: 'Bearer $S{userAt}' })
          .withPathParams('ids', '1,2')
          .inspect();
      });
    });
  });

  describe('WorkProducts', () => {
    describe('GetWorkProductsByIds', () => {
      it('testing get work products by ids', () => {
        return pactum
          .spec()
          .get('/work-products/{ids}')
          .withHeaders({ Authorization: 'Bearer $S{userAt}' })
          .withPathParams('ids', '1,2')
          .inspect();
      });
    });
    describe('UpdateWorkProductsStatus', () => {
      it('testing update work products status', () => {
        const updatedStatus = { status: 'updatedStatus' };

        return pactum
          .spec()
          .put('/work-products/{workId}/products/{productId}')
          .withHeaders({ Authorization: 'Bearer $S{userAt}' })
          .withPathParams('workId', '1')
          .withPathParams('productId', '1')
          .withBody(updatedStatus)
          .inspect();
      });
    });
  });
});
