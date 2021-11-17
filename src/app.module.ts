import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { InterestPointsModule } from './interest-points/interest-points.module';

@Module({
  imports: [TypeOrmModule.forRoot(), UsersModule, AuthModule, InterestPointsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
