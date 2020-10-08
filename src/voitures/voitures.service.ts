import { Injectable, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { VoituresEntity } from './voitures.entity';
import { VoituresDTO } from './voitures.dto';

@Injectable()
export class VoituresService {
    constructor(
        @InjectRepository(VoituresEntity)
        private voituresRepository: Repository<VoituresEntity>,
    ) {}

    async showAll() {
        return await this.voituresRepository.find();
    }

    async create(data: VoituresDTO) {
        const user = this.voituresRepository.create(data);
        await this.voituresRepository.save(data);
        return user;
    }

    async read(id: number) {
        return await this.voituresRepository.findOne({ where: { id: id } });
    }

    async update(id: number, data: Partial<VoituresDTO>) {
        await this.voituresRepository.update({ id }, data);
        return await this.voituresRepository.findOne({ id });
    }

    async destroy(id: number) {
        await this.voituresRepository.delete({ id });
        return { deleted: true };
    }
}
