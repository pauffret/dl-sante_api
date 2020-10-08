import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VoituresController } from './voitures.controller';
import { VoituresService } from './voitures.service';
import { VoituresEntity } from './voitures.entity';

@Module({
    imports: [TypeOrmModule.forFeature([VoituresEntity])],
    controllers: [VoituresController],
    providers: [VoituresService],
})
export class VoituresModule {}