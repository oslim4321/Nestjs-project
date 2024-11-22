import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  ParseBoolPipe,
  ParseIntPipe,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreatePropertyDto } from './dto/createProperty.dto';

@Controller('property')
export class PropertyController {
  @Get()
  findAll() {
    return ['Property 1', 'Property 2', 'Property 3'];
  }

  @Post()
  @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
  @HttpCode(202)
  create(@Body() body: CreatePropertyDto) {
    console.log(body);

    return body;
  }

  @Get(':id/:slug')
  findOne(
    @Param('id', ParseIntPipe) id: number,
    @Param('slug') slug: string,
    @Query('sort', ParseBoolPipe) sort: string,
  ) {
    console.log(typeof id);
    console.log(sort);

    return `Property with id ${id} and slug ${slug}`;
  }
}
