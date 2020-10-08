import {
    Controller,
    Get,
    Post,
    Patch,
    Delete,
    Body,
    Param,
    HttpStatus,
} from '@nestjs/common';

import { VoituresService } from './voitures.service';
import { VoituresDTO } from './voitures.dto';

@Controller('voitures')
export class VoituresController {
    constructor(private voituresService: VoituresService) {}

    @Get()
    async showAllVoitures() {
        return {
            statusCode: HttpStatus.OK,
            data: await this.voituresService.showAll(),
        };
    }

    @Post()
    async createVoitures(@Body() data: VoituresDTO) {
        return {
            statusCode: HttpStatus.OK,
            message: 'Voiture added successfully',
            data: await this.voituresService.create(data),
        };
    }

    @Get(':id')
    async readVoitures(@Param('id') id: number) {
        return {
            statusCode: HttpStatus.OK,
            data: await this.voituresService.read(id),
        };
    }

    @Patch(':id')
    async uppdateVoitures(@Param('id') id: number, @Body() data: Partial<VoituresDTO>) {
        return {
            statusCode: HttpStatus.OK,
            message: 'Voiture update successfully',
            data: await this.voituresService.update(id, data),
        };
    }

    @Delete(':id')
    async deleteVoiture(@Param('id') id: number) {
        await this.voituresService.destroy(id);
        return {
            statusCode: HttpStatus.OK,
            message: 'Voiture deleted successfully',
        };
    }
}